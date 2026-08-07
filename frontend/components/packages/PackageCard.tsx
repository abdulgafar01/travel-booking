"use client";

import type { TravelPackage } from "@/types/package";
import { useBookPackageMutation } from "@/features/packages/packageApi";

interface PackageCardProps {
  packageItem: TravelPackage;
}

export default function PackageCard({
  packageItem,
}: PackageCardProps) {
  const [
    bookPackage,
    { isLoading },
  ] = useBookPackageMutation();

  const handleBooking = async () => {
    try {
      await bookPackage(packageItem._id).unwrap();
    } catch (error) {
      console.error("Booking failed:", error);
    }
  };

  const isSoldOut =
    packageItem.availableSlots === 0;

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(15,23,42,0.12)]">
      <div className="absolute inset-0 bg-linear-to-br from-slate-50 via-white to-slate-100 opacity-70" />
      <div className="relative space-y-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              {packageItem.title}
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {packageItem.description}
            </p>
          </div>

          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              packageItem.availableSlots > 0
                ? "bg-emerald-50 text-emerald-700"
                : "bg-rose-50 text-rose-700"
            }`}
          >
            {packageItem.availableSlots > 0 ? "Available" : "Sold Out"}
          </span>
        </div>

        <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              From
            </p>
            <p className="text-lg font-bold text-slate-900">
              ${packageItem.price}
            </p>
          </div>

          <div className="text-right">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Slots
            </p>
            <p className="text-sm font-semibold text-slate-700">
              {packageItem.availableSlots} left
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleBooking}
          disabled={isSoldOut || isLoading}
          className="w-full cursor-pointer rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:opacity-70"
        >
          {isLoading
            ? "Booking..."
            : isSoldOut
              ? "Sold Out"
              : "Book Now"}
        </button>
      </div>
    </article>
  );
}