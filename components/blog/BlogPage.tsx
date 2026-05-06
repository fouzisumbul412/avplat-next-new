"use client";

import { blogs } from "@/data/blogs";
import Link from "next/link";
import { motion } from "framer-motion";
import PageHero from "../PageHero";

const BlogPage = () => {
  return (
    <>
      <PageHero
               title="Insights & Articles"
               image="/images/blog.webp"
               overlayOpacity={0.7}
             />

    

      <section className="py-16 bg-cream">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {blogs.map((blog, i) => (
            <motion.div
              key={blog.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="bg-white rounded-2xl overflow-hidden border border-amber-50 shadow-sm hover:shadow-lg transition">

                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-52 object-cover"
                />

                <div className="p-5">
                  <span className="text-xs text-[#213e76]/70">
                    {blog.category} • {blog.date}
                  </span>

                  <h3 className="text-lg font-semibold text-[#213e76] mt-2">
                    {blog.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mt-2">
                    {blog.excerpt}
                  </p>

                  <Link
                    href={`/blog/${blog.slug}`}
                    className="inline-block mt-4 text-[#213e76] font-semibold hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </section>

    </>
  );
};

export default BlogPage;