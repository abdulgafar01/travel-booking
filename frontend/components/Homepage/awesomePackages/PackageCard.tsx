"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface PackageCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
}

export default function PackageCard({
  title,
  description,
  price,
  image,
}: PackageCardProps) {
  return (
    <motion.article
      whileHover={{ y: -3 }}
      className="
        flex items-center justify-center  h-115.5 w-full gap-3 rounded-[9px] bg-white p-2 text-[#102b27] md:p-3
      "
    >
      <div className="relative h-107.5 w-78 shrink-0 overflow-hidden rounded-[7px]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="108px"
          className="object-cover"
        />
      </div>

      <div className="flex w-71.5 h-86.25 flex-1 flex-col">
        <h3 className="text-[30px] font-medium leading-[1.05] ">
          {title}
        </h3>

        <p className="mt-2 text-[18px] leading-[1.35] text-gray-600">
          {description}
        </p>

        <div className="mt-auto">
          <p className="text-[16px] text-gray-500">
            Starting from
          </p>

          <p className="text-[24px] font-bold">
            {price}
          </p>

          <button
            type="button"
            className="
              mt-2 h-11 w-56
              rounded-lg cursor-pointer
              bg-[#e86a33] text-[18px]
              text-white
            "
          >
            Show Details
          </button>
        </div>
      </div>
    </motion.article>
  );
}