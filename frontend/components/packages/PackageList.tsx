"use client";

import { useGetPackagesQuery } from "@/features/packages/packageApi";
import PackageCard from "./PackageCard";



export default function PackageList() {
  const {
    data,
    isLoading,
    isError,
    error,
  } = useGetPackagesQuery();

  if (isLoading) {
    return (
      <div className="py-12 text-center">
        Loading packages...
      </div>
    );
  }

  if (isError) {
    console.error(error);

    return (
      <div className="py-12 text-center text-red-600">
        Failed to load travel packages.
      </div>
    );
  }

  const packages = data?.data ?? [];

  if (packages.length === 0) {
    return (
      <div className="py-12 text-center">
        No travel packages available.
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {packages.map((packageItem) => (
        <PackageCard
          key={packageItem._id}
          packageItem={packageItem}
        />
      ))}
    </div>
  );
}