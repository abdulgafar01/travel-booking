//  <reference types="node" />

import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

import type { BookingResponse, PackagesResponse } from "../../types/package";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000";

export const packageApi = createApi({
  reducerPath: "packageApi",

  baseQuery: fetchBaseQuery({
    baseUrl: apiBaseUrl,
  }),

  tagTypes: ["Packages"],

  endpoints: (builder) => ({
    getPackages: builder.query<PackagesResponse, void>({
      query: () => "/packages",

      providesTags: ["Packages"],
    }),

    bookPackage: builder.mutation<BookingResponse, string>({
      query: (packageId) => ({
        url: `/packages/${packageId}/book`,
        method: "POST",
      }),

      invalidatesTags: ["Packages"],
    }),
  }),
});

export const {
  useGetPackagesQuery,
  useBookPackageMutation,
} = packageApi;
