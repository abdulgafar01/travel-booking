# Thinking Notes

## 1. Frontend component structure strategy

I structured the frontend so the page shell stays server-friendly and the interactive pieces are isolated as client components. The main page in the app router remains a server component by default, and it simply renders the package list. The list and card components are marked as client components because they use hooks and mutation logic from Redux Toolkit Query.

This separation keeps the initial page rendering lightweight while still allowing real-time user interaction where it matters. In practice, the page component is responsible for layout and composition, while the package list owns data fetching and the package card owns booking behavior.

## 2. Caching and state updates after booking

I used RTK Query to manage the package list and booking flow. The `getPackages` query provides the package data, and the `bookPackage` mutation is defined to invalidate the `Packages` tag after a successful booking.

That means when a user books a package, the mutation completes, RTK Query marks the related package cache as stale, and the list refetches automatically. This keeps the UI in sync without manually juggling local state. The booking button also disables itself while the mutation is loading, which gives the user clear feedback.

## 3. Issues encountered and how I solved them

### 1. MongoDB Atlas DNS resolution error

While connecting the Express backend to MongoDB Atlas, I initially encountered:

```text
MongoDB connection failed:
Error: querySrv ECONNREFUSED _mongodb._tcp.travel-booking.zlchguv.mongodb.net
```

The issue was not caused by Mongoose or MongoDB being missing. The Atlas cluster itself was valid, but Node.js was unable to resolve the MongoDB SRV record through the system DNS resolver.

I verified this by running:

```bash
nslookup -type=SRV _mongodb._tcp.travel-booking.zlchguv.mongodb.net 8.8.8.8
```

That returned the expected Atlas host information, while Node.js still failed to resolve the record. I then configured the Wi-Fi adapter to use Google DNS servers:

```text
8.8.8.8
8.8.4.4
```

and flushed the Windows DNS cache:

```bash
ipconfig /flushdns
```
but this proved abortive 
After that, I change the mongodb string from MONGODB_URI="mongodb+srv: to MONGODB_URI=mongodb. And that worked successfully

### 2. CORS error between Next.js and Express

When the frontend tried to call the backend from a different origin, the browser blocked the request with a CORS error:

```text
Access to fetch at 'http://localhost:5000/api/packages'
from origin 'http://localhost:3000'
has been blocked by CORS policy.
```

The fix was to configure Express CORS middleware and allow the frontend origin explicitly through the environment variable:

```ts
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST",],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
```

The backend environment file includes:

```env
FRONTEND_URL=http://localhost:3000
```

This enabled the Next.js app to communicate with the Express API safely during local development.

### 3. Keeping the available slot count updated after booking

A key requirement was that the available slot count should update immediately after a booking without forcing a page refresh.

Instead of managing a separate local state for the package list, I used RTK Query to manage the server state. The packages query provides a cache tag:

```ts
getPackages: builder.query<PackagesResponse, void>({
  query: () => "/packages",
  providesTags: ["Packages"],
})
```

The booking mutation invalidates the same tag:

```ts
bookPackage: builder.mutation<BookingResponse, string>({
  query: (packageId) => ({
    url: `/packages/${packageId}/book`,
    method: "POST",
  }),
  invalidatesTags: ["Packages"],
})
```

After a successful booking, RTK Query invalidates the package cache and automatically refetches the data so the UI reflects the latest slot count.

### 4. Server vs client component considerations

Because RTK Query hooks are client-side hooks, components that use them must be Client Components. That is why files such as `PackageList.tsx` and `PackageCard.tsx` include `"use client"`.

The main page stays a Server Component and simply renders the interactive package list, while the Redux provider is wrapped in a dedicated client-side provider component to keep the client boundary limited to the parts that actually need browser state.

### 5. Environment configuration

The frontend and backend run on separate ports during development, so I used environment variables to keep the configuration flexible.

Frontend:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

Backend:

```env
PORT=5000
FRONTEND_URL=http://localhost:3000
```

This makes the app easier to configure for local development and future deployment without changing the source code.

## 4. How to run the frontend and backend locally

### Backend
1. Go to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   FRONTEND_URL=http://localhost:3000
   ```
4. Start the API:
   ```bash
   npm run dev
   ```

### Frontend
1. Go to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file with:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000
   ```
4. Start the Next.js app:
   ```bash
   npm run dev
   ```

Once both are running, open http://localhost:3000 to use the app.
