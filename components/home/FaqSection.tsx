"use client";

import { useState, useEffect } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = ({ items = [] }: { items: any[] }) => {

  const faqs = items.map((item) => ({
    id: item.id,
    question: item.title,
    answer: item.description,
    image: item.image,
  }));

  const [activeImage, setActiveImage] = useState("");
  const [activeId, setActiveId] = useState<string | number>("");

  useEffect(() => {
    if (faqs.length > 0 && !activeImage) {
      setActiveImage(faqs[0].image);
      setActiveId(faqs[0].id);
    }
  }, [faqs, activeImage]);

  if (faqs.length === 0) return null;

  return (
    <section className="py-16 bg-white">

      <div className="container mx-auto px-20">

        {/* Heading */}
        <div className="max-w-2xl mb-6">
          <h3 className="text-xl uppercase tracking-[3px] text-[#213e76] font-bold">
            frequently asked questions
          </h3>

          {/* <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-[#213e76] leading-tight">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Everything you need to know about AvPlat and private aviation.
          </p> */}
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-start">

          {/* Left Side */}
          <div className="w-full md:w-1/2">

            <Accordion
              type="single"
              collapsible
              defaultValue={`item-${faqs[0]?.id}`}
              className="w-full"
            >

              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={`item-${faq.id}`}
                  className="border-b border-gray-200"
                >

                  <AccordionTrigger
                    onClick={() => {
                      setActiveImage(faq.image);
                      setActiveId(faq.id);
                    }}
                    className="text-left hover:no-underline py-5"
                  >
                    <h3
                      className={`text-lg font-semibold transition ${
                        activeId === faq.id
                          ? "text-[#213e76]"
                          : "text-gray-500"
                      }`}
                    >
                      {faq.question}
                    </h3>
                  </AccordionTrigger>

                  <AccordionContent className="text-gray-600 leading-relaxed">
                    {faq.answer}

                    {/* Mobile Image */}
                    <div className="mt-5 md:hidden">
                      <img
                        src={faq.image}
                        alt={faq.question}
                        className="w-full h-[150px] object-cover rounded-2xl"
                      />
                    </div>

                  </AccordionContent>

                </AccordionItem>
              ))}

            </Accordion>
            <div className="mt-8">
  <a
    href="https://support.avplat.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 rounded-full bg-[#213e76] px-6 py-3 text-white font-medium transition hover:bg-[#162c55]"
  >
    View All FAQs
    <span>↗</span>
  </a>
</div>

          </div>

          {/* Right Side Image */}
          <div className="hidden md:block w-full md:w-1/2">

            <div className="overflow-hidden rounded-3xl">

              <img
                src={activeImage}
                alt="FAQ Preview"
                className="w-full h-[380px] object-cover transition duration-500"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default FaqSection;