"use client";

import { motion } from "framer-motion";
import PackageCard from "./PackageCard";
import { packages } from "@/lib/data";

export default function TravelPackages() {
  return (
    <section className="bg-[#102b27] px-6 py-10 md:px-[4.5%] md:py-14">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="
          mx-auto max-w-342.5
           rounded-[15px] bg-[#ebe8e3] px-6 py-8
          text-[#102b27]
          md:px-10
          md:py-9
        "
      >
        {/* Heading */}

        <div className="text-center">
          <h2 className="text-[48px] font-bold">
            <span className="text-[#e96b3b]">
              Awesome
            </span>{" "}
            Travel Packages
          </h2>

          <p className="mx-auto mt-2 max-w-132.5 text-[7px] leading-[1.4] text-gray-500 md:text-[20px]">
            Each destination offers a unique experience,
            inviting travelers to create lifelong memories in
            these extraordinary locations.
          </p>
        </div>

        {/* Cards */}

        <div className="mx-auto mt-6 grid max-w-[1570px]  gap-3 md:grid-cols-2">
          {packages.map((item) => (
            <PackageCard
              key={item.id}
              {...item}
            />
          ))}
        </div>

        {/* Button */}

        <div className="mt-6 flex justify-center">
          <button
            type="button"
            className="
              h-11.25
               w-56
              rounded-lg cursor-pointer
              text-[18px]
              bg-[#e86a33]
            
              text-white
            "
          >
            View All Packages
          </button>
        </div>
      </motion.div>
    </section>
  );
}