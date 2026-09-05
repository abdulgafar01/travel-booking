"use client";

import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export interface Destination {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({
  destination,
}: DestinationCardProps) {
  return (
    <motion.article
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative h-43 w-34 shrink-0 overflow-hidden cursor-pointer
        rounded-md
        bg-neutral-900
        md:h-130
        md:w-102
      "
    >
      {/* Image */}

      <Image
        src={destination.image}
        alt={destination.name}
        fill
        sizes="180px"
        className="
          object-cover
          transition-transform
          duration-700
          ease-out
          hover:scale-105
        "
      />

      {/* Dark gradient */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/85
          via-black/20
          to-transparent
        "
      />

      {/* Content */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          z-10
          p-3
          sm:p-4
        "
      >
        <h3
          className="
            text-[14px]
            font-semibold
            leading-[1]
            text-white
            md:text-[38px]
          "
        >
          {destination.name}
        </h3>

        <p
          className="
            mt-1
            max-w-61.75
            text-[7px]
            leading-[1.15]
            text-white/90
            md:text-[20px]
          "
        >
          {destination.description}
        </p>
      </div>

      {/* Card arrow */}

      <button
        type="button"
        aria-label={`Explore ${destination.name}`}
        className="
          absolute bottom-10 right-10 cursor-pointer z-20 flex items-center justify-center
          rounded-full
          bg-black/40
          text-white
          transition-colors
          hover:bg-[#ed6b3d]
        "
      >
        <ArrowRight
          size={37}
          strokeWidth={1.5}
        />
      </button>
    </motion.article>
  );
}