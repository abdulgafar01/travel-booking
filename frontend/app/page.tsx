import PackageList from "@/components/packages/PackageList";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10">
          <p className="text-sm font-medium uppercase tracking-wider text-gray-500">
            Explore & Travel
          </p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight">
            Available Travel Packages
          </h1>

          <p className="mt-3 max-w-2xl text-gray-600">
            Choose your destination and book your next
            adventure.
          </p>
        </div>

        <PackageList />
      </section>
    </main>
  );
}