"use client";

import { motion } from "framer-motion";
import BlogCard from "./BlogCard";
import { blogPosts } from "@/lib/data";

export default function TravelBlog() {
  return (
    <section
      id="blog"
      className="bg-[#102b27] px-6 py-14 text-white md:px-14 md:py-20"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Header */}

        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-[17px] font-bold md:text-[48px]">
              <span className="text-[#e96b3b]">
                Travel Blog
              </span>{" "}
              Created For You
            </h2>

            <p className="mt-2 max-w-190 text-2xl leading-[1.45] text-white/75 md:text-[20px]">
              We share our experiences, tips and travel
              stories to inspire and guide our readers in
              their own journey and adventures. From hidden
              gems to popular destinations, we showcase the
              beauty and diversity of the world.
            </p>
          </div>

          <button
            type="button"
            className="
              hidden
               h-11 w-56
              rounded-lg 
              cursor-pointer
              bg-[#e86a33] 
              text-[18px]
              text-white
              shrink-0
              
              md:block
            "
          >
            View All Blogs
          </button>
        </div>

        {/* Cards */}

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.1,
              }}
            >
              <BlogCard {...post} />
            </motion.div>
          ))}
        </div>

        {/* Mobile button */}

        <div className="mt-6 flex justify-center md:hidden">
          <button className="h-[27px] w-[85px] rounded bg-[#e96b3b] text-[7px]">
            View All Blogs
          </button>
        </div>
      </div>
    </section>
  );
}