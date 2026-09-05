"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WorldSection() {
  return (
    <section
      className="
        relative
        h-120
        overflow-hidden
        bg-[#102b27]
        md:h-140
      "
    >
      <Image
        src="/images/ocean.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-linear-to-b from-[#102b27] via-black/10 to-[#102b27]" />

      {/* Heading */}

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="
          absolute
          left-0
          right-0
          top-[45%]
          text-center
          text-[27px]
          font-bold
          tracking-[-1px]
          text-white
          md:text-[80px]
        "
      >
        Travel the World & the 7 Seas
      </motion.h2>
    </section>
  );
}