"use client";

import { motion } from "framer-motion";
import bgPattern from "../bg.svg";

export default function Experiences() {
  return (
    <section
      className="
        relative
        overflow-hidden
        px-6
        py-16
        text-white
        md:px-[10%]
        md:py-24
      "
      style={{
        backgroundColor: "#102b27",
        backgroundImage: `linear-gradient(rgba(16, 43, 39, 0.18), rgba(16, 43, 39, 0.18)), url(${bgPattern.src})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Decorative left quote */}

      {/* <div
        className="
          pointer-events-none
          absolute
          left-[-20px]
          top-[50px]
          hidden
          text-[230px]
          font-black
          leading-none
          text-white/20
          md:block
        "
      >
        “
      </div> */}

      {/* Decorative right quote */}
{/* 
      <div
        className="
          pointer-events-none
          absolute
          right-[-20px]
          top-[40px]
          hidden
          text-[230px]
          font-black
          leading-none
          text-white/20
          md:block
        "
      >
        ”
      </div> */}

      <div className="relative z-10 mx-auto max-w-[800px]">
        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-[19px] font-semibold md:text-left md:text-[22px]"
        >
          <span className="text-[#e96b3b]">
            Experiences
          </span>{" "}
          We Have Offered
        </motion.h2>

        {/* Testimonial */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            relative
            mx-auto
            mt-8
            max-w-[650px]
            rounded-[14px]
            bg-[#e4e7e5]
            p-5
            text-[#102b27]
            shadow-[0_20px_50px_rgba(0,0,0,0.15)]
            md:p-7
          "
        >
          <p className="text-[10px] font-bold leading-[1.05] md:text-[12px]">
            Our trip to Thailand organized through this
            travel website was simply unforgettable. The
            attention to detail and personalized itinerary
            allowed us to explore the best of Bangkok,
            immerse ourselves in the tranquility of Chiang
            Mai, and unwind on the stunning beaches of Phuket.
          </p>

          <p className="mt-5 text-[10px] font-bold leading-[1.05] md:text-[12px]">
            The accommodations were top-notch, the guides
            were knowledgeable, and the overall experience
            exceeded our expectations. We can't wait to book
            our next adventure with this exceptional travel
            service.
          </p>

          {/* Author */}

          <div
            className="
              mt-5
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-white
              px-3
              py-1.5
              text-[8px]
            "
          >
            <div className="h-4 w-4 rounded-full bg-[#102b27]" />
            Sarah and John
          </div>
        </motion.div>
      </div>
    </section>
  );
}