"use client";
// import { motion } from "framer-motion";
import { motion } from "motion/react"
import Link from "next/link";
import { Search } from "lucide-react";


const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Travel Packages",
    href: "/travel-packages",
  },
  {
    label: "Destinations",
    href: "/destinations",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 px-6 py-6 md:px-12 lg:px-[50px]">
      <nav className="mx-auto flex max-w-[1536px] items-center justify-between text-white">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Link
            href="/"
            className="
              text-[34px]
              font-light
              leading-none
              tracking-[-1.5px]
              md:text-[38px]
            "
          >
            haven
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            left-1/2
            hidden
            -translate-x-1/2
            items-center
            gap-14
            lg:flex
            xl:gap-[72px]
          "
        >
          {navItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              className={`
                relative
                whitespace-nowrap
                text-[16px]
                tracking-[-0.3px]
                transition-opacity
                duration-300
                hover:opacity-60
                ${
                  index === 0
                    ? "font-semibold"
                    : "font-normal"
                }
              `}
            >
              {item.label}

              {index === 0 && (
                <span
                  className="
                    absolute
                    -bottom-2
                    left-1/2
                    h-[1.5px]
                    w-0
                    -translate-x-1/2
                    bg-white
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              )}
            </Link>
          ))}
        </motion.div>

        {/* Search */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          type="button"
          aria-label="Search"
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            transition-transform
            duration-300
            hover:scale-110
          "
        >
          <Search
            size={27}
            strokeWidth={1.7}
          />
        </motion.button>
      </nav>
    </header>
  );
}