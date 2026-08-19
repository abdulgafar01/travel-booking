"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";

const Hero = () => {
    const heroRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });

    const backgroundY = useTransform(
        scrollYProgress,
        [0, 1],
        ["0%", "12%"]
    );

    const titleY = useTransform(
        scrollYProgress,
        [0, 1],
        ["0%", "25%"]
    );

    return (
        <section
            ref={heroRef}
            className="relative overflow-hidden min-h-screen bg-cover bg-center text-white"
            style={{
                backgroundImage:
                    "url('images/hero-background.jpg')",
            }}
        >
            {/* Top atmospheric darkness */}
            <div
                className="absolute inset-x-0 top-0 z-2 h-[45%] bg-linear-to-b
          from-black/60
          via-black/20
          to-transparent
        "
            />

            {/* =========================================
                      REUSABLE NAVBAR
                  ========================================= */}

            <Navbar />

            {/* =========================================
          BACKGROUND
            ========================================= */}

            <motion.div
                style={{ y: backgroundY }}
                className="absolute inset-x-0 bottom-0 z-5 flex justify-center bg-transparent"
            >
                <div className="w-full">
                    <Image
                        src="/images/desert-hero.svg"
                        alt="Desert landscape"
                        priority
                        width={1600}
                        height={700}
                        className="h-auto w-full object-contain"
                    />
                </div>
            </motion.div>

            {/* =========================================
                      EXPLORE TYPOGRAPHY
                  ========================================= */}

            <motion.div
                style={{ y: titleY }}
                initial={{
                    opacity: 0,
                    scale: 0.96,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.2,
                    delay: 0.2,
                    ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute left-1/2 md:top-[19%] z-4 w-full flex justify-center items-center -translate-x-1/2
                      select-none
                      text-center
                    "
            >
                <h1 className="whitespace-nowrap font-crushed text-8xl md:text-[350px] font-normal tracking-[-0.5px] text-white/95"
                >
                    EXPLORE
                </h1>
            </motion.div>


    {/* =========================================
          BOTTOM CONTENT
      ========================================= */}

      <div
        className=" absolute bottom-[16%] left-0 right-0 z-20 px-8 md:px-16 lg:px-[8%]
        "
      >
        <div className="relative  mx-auto max-w-350">

          {/* LEFT MESSAGE */}

          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute
              bottom-0
              left-0
              max-w-82.5
            "
          >
            <p
              className="
                text-[18px]
                font-semibold
                leading-[1.05]
                tracking-[-0.5px]
                md:text-[19px]
                md:block hidden
              "
            >
              We create experience, we
              <br />
              create memories, we care about
              <br />
              YOU.
            </p>
          </motion.div>

          {/* CENTER BUTTON */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex justify-center"
          >
            <motion.a
              href="/travel-packages"
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="flex h-15.25 w-60 items-center justify-center rounded-[9px] bg-white text-[20px] font-normal  text-[#f15a29] shadow-[0_10px_35px_rgba(0,0,0,0.15)] transition-shadow duration-300
                hover:shadow-[0_15px_45px_rgba(0,0,0,0.25)]
              "
            >
              Start Your Tour
            </motion.a>
          </motion.div>

          {/* RIGHT DESTINATION */}

          <motion.div
            initial={{
              opacity: 0,
              x: 25,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.95,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute
              -bottom-6
              right-0
              hidden
              items-center
              gap-4
              lg:flex
            "
          >
            {/* Image */}

             <div
              className="
                relative
                h-27.5
                w-42
                overflow-hidden
                rounded-[12px]
                border
                border-white/70
                shadow-[0_8px_25px_rgba(0,0,0,0.2)]
              "
            >
              <Image
                src="/images/highlands.jpg"
                alt="Highlands of Netherland"
                fill
                sizes="168px"
                className="object-cover"
              />
            </div> 

            {/* Destination text */}

         <div className="w-37.5 ">
              <p className="mb-2 text-[14px] font-semibold">
                Destinations
              </p>

              <p
                className="
                  text-[20px]
                  font-semibold
                  leading-[1.05]
                "
              >
                Highlands of
                <br />
                Netherland
              </p>
            </div> 
          </motion.div>
        </div>
      </div>

      {/* Vignette */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-40
          shadow-[inset_0_0_120px_rgba(0,0,0,0.18)]
        "
      />

        </section>
    );
};

export default Hero;