"use client";

import useSWR from "swr";
import PageHero from "../PageHero";
import { Loader2 } from "lucide-react";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type Props = {
  slug: string;
};

const BlogDetail = ({ slug }: Props) => {
  const { data: response, isLoading } = useSWR(`/api/blog/${slug}`, fetcher, {
    revalidateOnFocus: false,
  });

  if (isLoading) {
    return (
      <div className="flex w-full min-h-[50vh] items-center justify-center py-32 bg-white">
        <Loader2 className="animate-spin text-[#213e76]" size={40} />
      </div>
    );
  }

  const blog = response?.data;

  if (!blog) {
    return <div className="p-10 text-center text-lg text-slate-500">Blog not found</div>;
  }

  return (
    <>
      <PageHero
        title={blog.title}
        image={blog.thumbnail}
        overlayOpacity={0.7}
      />

      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto text-charcoal leading-relaxed px-4 md:px-8">
          
          <div 
            className="prose prose-lg max-w-none prose-headings:text-[#213e76] prose-headings:font-semibold prose-a:text-[#1868A5] prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: blog.content }} 
          />

        </div>
      </section>
    </>
  );
};

export default BlogDetail;