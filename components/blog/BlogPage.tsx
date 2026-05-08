"use client";

import { useState } from "react";
import useSWR from "swr";
import Link from "next/link";
import { motion } from "framer-motion";
import PageHero from "../PageHero";
import { Loader2 } from "lucide-react";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const BlogPage = () => {

  const [page, setPage] = useState(1);
  const limit = 9;

  const { data: response, isLoading } = useSWR(
    `/api/blog?page=${page}&limit=${limit}`,
    fetcher,
    { revalidateOnFocus: false }
  );

  const blogs = response?.data || [];
  const pagination = response?.pagination;

  return (
    <>
      <PageHero
        title="Insights & Articles"
        image="/images/blog.webp"
        overlayOpacity={0.7}
      />

      <section className="py-16 bg-cream">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="animate-spin text-[#213e76]" size={40} />
            </div>
          ) : blogs.length === 0 ? (
            <div className="text-center py-20 text-slate-500 text-lg">
              No articles found.
            </div>
          ) : (
            <>
              {/* Blog Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog: any, i: number) => (
                  <motion.div
                    key={blog.slug}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-white rounded-2xl overflow-hidden border border-amber-50 shadow-sm hover:shadow-lg transition h-full flex flex-col">
                      
                      <img
                        src={blog.thumbnail} 
                        alt={blog.title}
                        className="w-full h-52 object-cover"
                      />

                      <div className="p-5 flex flex-col flex-grow">
                        <span className="text-xs text-[#213e76]/70">
                          {blog.category} •{" "}
                          {new Date(blog.createdAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric"
                          })}
                        </span>

                        <h3 className="text-lg font-semibold text-[#213e76] mt-2">
                          {blog.title}
                        </h3>

                        <p className="text-sm text-muted-foreground mt-2 flex-grow">
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

              {/* Pagination Controls */}
              {pagination && pagination.totalPages > 1 && (
                <div className="flex justify-center items-center gap-6 mt-16">
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="px-5 py-2 rounded-full border border-[#213e76] text-[#213e76] hover:bg-[#213e76] hover:text-white transition disabled:opacity-40 disabled:cursor-not-allowed font-medium text-sm"
                  >
                    Previous
                  </button>
                  
                  <span className="text-sm text-[#213e76] font-semibold">
                    Page {page} of {pagination.totalPages}
                  </span>
                  
                  <button
                    onClick={() => setPage((p) => Math.min(pagination.totalPages, p + 1))}
                    disabled={page === pagination.totalPages}
                    className="px-5 py-2 rounded-full border border-[#213e76] text-[#213e76] hover:bg-[#213e76] hover:text-white transition disabled:opacity-40 disabled:cursor-not-allowed font-medium text-sm"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}

        </div>
      </section>
    </>
  );
};

export default BlogPage;