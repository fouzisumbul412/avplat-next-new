"use client";

import { blogs, Blog } from "@/data/blogs";
import PageHero from "../PageHero";

type Props = {
  slug: string;
};

const BlogDetail = ({ slug }: Props) => {

  const blog: Blog | undefined = blogs.find(
    (b) => b.slug === slug
  );

  if (!blog) {
    return <div className="p-10">Blog not found</div>;
  }

  return (
    <>
      <PageHero
        title={blog.title}
        image={blog.image}
        overlayOpacity={0.7}
      />

      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto text-charcoal leading-relaxed">

          {blog.content.split("\n").map((line, i) => {

            if (line.startsWith("##")) {
              return (
                <h2
                  key={i}
                  className="text-xl text-[#213e76] mt-6 font-semibold"
                >
                  {line.replace("##", "")}
                </h2>
              );
            }

            return (
              <p key={i} className="mt-3">
                {line}
              </p>
            );
          })}

        </div>
      </section>
    </>
  );
};

export default BlogDetail;