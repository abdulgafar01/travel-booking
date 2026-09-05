"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface BlogCardProps {
  title: string;
  date: string;
  author: string;
  image: string;
  description: string;
}

export default function BlogCard({
  title,
  date,
  author,
  image,
  description,
}: BlogCardProps) {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      className="w-full"
    >
      <div className="relative h-125 overflow-hidden rounded-[8px] max-w-[390]">
        <Image
          src={image}
          alt={title}
          fill
          // sizes="33vw"
          className="object-cover transition-transform duration-700 hover:scale-105"
        />

        {/* Author */}

        <div
          className="
            absolute
            bottom-2
            left-2
            flex
            items-center
            gap-1
            rounded-full
            bg-black/40
            px-2
            py-1
            text-[6px]
            text-white
            backdrop-blur-sm
          "
        >
          <div className="h-3 w-3 rounded-full bg-white/80" />
          {author}
        </div>
      </div>

      <p className="mt-2 text-[6px] text-white/60">
        {date}
      </p>

      <h3 className="mt-1 text-[11px] font-semibold text-white">
        {title}
      </h3>

      <p className="mt-1 text-[7px] leading-[1.4] text-white/75">
        {description}
      </p>

      <button
        type="button"
        className="
          mt-3
          h-[25px]
          w-[72px]
          rounded-[4px]
          border
          border-white/70
          text-[7px]
          text-white
          transition-colors
          hover:bg-white
          hover:text-[#102b27]
        "
      >
        Read More
      </button>
    </motion.article>
  );
}