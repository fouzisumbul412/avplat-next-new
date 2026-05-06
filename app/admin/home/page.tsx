"use client";

import React, { useState, useEffect } from "react";
import useSWR from "swr";
import { toast } from "react-hot-toast";
import { Save, Loader2, HelpCircle, Layers, Briefcase, Zap } from "lucide-react";
import HomeHeroEditor from "@/components/admin/home/HomeHeroEditor";
import HomeSectionEditor, { SectionItem } from "@/components/admin/home/HomeSectionEditor";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function AdminHomePage() {
  const [isSaving, setIsSaving] = useState(false);
  const [pageData, setPageData] = useState({ titleBlack: "", titleBlue: "", description: "", appStoreUrl: "", playStoreUrl: "" });
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoPreview, setVideoPreview] = useState<string | null>(null);

  const [faqs, setFaqs] = useState<SectionItem[]>([]);
  const [carousel, setCarousel] = useState<SectionItem[]>([]);
  const [services, setServices] = useState<SectionItem[]>([]);
  const [rewired, setRewired] = useState<SectionItem[]>([]);

  const { data, isLoading, mutate } = useSWR("/api/home", fetcher, { revalidateOnFocus: false });

  useEffect(() => {
    if (data?.success && data?.data) {
      const content = data.data;
      setPageData({
        titleBlack: content.titleBlack || "",
        titleBlue: content.titleBlue || "",
        description: content.description || "",
        appStoreUrl: content.appStoreUrl || "",
        playStoreUrl: content.playStoreUrl || "",
      });
      if (content.videoUrl) setVideoPreview(content.videoUrl);

      const sections = content.sections || {};
      setFaqs(sections.FAQ || []);
      setCarousel(sections.CAROUSEL || []);
      setServices(sections.SERVICES || []);
      setRewired(sections.REWIRED || []);
    }
  }, [data]);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const formData = new FormData();
      Object.entries(pageData).forEach(([key, value]) => formData.append(key, value));
      if (videoFile) formData.append("video", videoFile);

      const allItems = [
        ...faqs.map(i => ({ ...i, section: "FAQ" })),
        ...carousel.map(i => ({ ...i, section: "CAROUSEL" })),
        ...services.map(i => ({ ...i, section: "SERVICES" })),
        ...rewired.map(i => ({ ...i, section: "REWIRED" }))
      ];

      formData.append("items", JSON.stringify(allItems.map(i => ({ id: i.id, section: i.section, title: i.title, description: i.description, link: i.link || "", image: i.image }))));
      allItems.forEach((item, index) => { if (item.imageFile) formData.append(`image_${index}`, item.imageFile); });

      const res = await fetch("/api/admin/home", { method: "POST", body: formData });
      if ((await res.json()).success) {
        toast.success("All sections updated!");
        mutate();
      }
    } catch (e) { toast.error("Save failed."); } finally { setIsSaving(false); }
  };

  if (isLoading) {
      return (
        <div className="flex h-[80vh] items-center justify-center">
          <Loader2 className="animate-spin text-[#213e76]" size={40} />
        </div>
      );
    }

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-12 pb-32">
      <div className="sticky top-0 z-40 bg-slate-50/80 backdrop-blur-xl py-4 border-b flex items-center justify-between">
        <h1 className="text-2xl font-black text-slate-900 uppercase">Home CMS</h1>
        <button onClick={handleSave} disabled={isSaving} className="bg-[#213e76] text-white px-8 py-3 rounded-full font-bold flex items-center gap-2">
          {isSaving ? <Loader2 className="animate-spin" /> : <Save size={20} />} Save Changes
        </button>
      </div>

      <HomeHeroEditor pageData={pageData} handleChange={(e) => setPageData(p => ({ ...p, [e.target.name]: e.target.value }))} videoPreview={videoPreview} handleVideoChange={(e) => {
        const file = e.target.files?.[0];
        if (file) { setVideoFile(file); setVideoPreview(URL.createObjectURL(file)); }
      }} />

      <HomeSectionEditor title="3D Walkthrough" icon={<Layers size={20}/>} items={carousel} setItems={setCarousel} labels={{ title: "Step Title", desc: "Long Desc", link: "Phone Title" }} viewMode="carousel" />
      
      <HomeSectionEditor title="Flight Ops (Rewired)" icon={<Zap size={20}/>} items={rewired} setItems={setRewired} labels={{ title: "Step Name", desc: "Short Detail" }} viewMode="list" />
      
      <HomeSectionEditor title="Services Cards" icon={<Briefcase size={20}/>} items={services} setItems={setServices} labels={{ title: "Card Title", desc: "Body Text", link: "Button URL" }} viewMode="carousel" />

      <HomeSectionEditor title="FAQs Accordion" icon={<HelpCircle size={20}/>} items={faqs} setItems={setFaqs} labels={{ title: "Question", desc: "Answer" }} viewMode="accordion" />
    </div>
  );
}