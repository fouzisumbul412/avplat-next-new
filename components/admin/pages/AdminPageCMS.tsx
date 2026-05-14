"use client";

import React, { useState, useEffect } from "react";
import useSWR from "swr";
import { toast } from "react-hot-toast";
import { Save, Loader2 } from "lucide-react";
import HeroEditor from "./HeroEditor";
import StatsEditor from "./StatsEditor";
import FeaturesEditor from "./FeaturesEditor";
import { MAX_FILE_SIZE } from "@/lib/constants";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface AdminPageCMSProps {
  slug: string;
  headerTitle: string;
  headerDesc: string;
  defaultHero: any;
  defaultStats: any[];
  defaultFeatures: any[];
}

export default function AdminPageCMS({
  slug,
  headerTitle,
  headerDesc,
  defaultHero,
  defaultStats,
  defaultFeatures
}: AdminPageCMSProps) {
  const [isSaving, setIsSaving] = useState(false);
  
  const [heroData, setHeroData] = useState(defaultHero);
  const [stats, setStats] = useState<any[]>(defaultStats);
  const [features, setFeatures] = useState<any[]>(defaultFeatures);
  
  const [heroImageFile, setHeroImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(defaultHero.heroImage);

  const { data, isLoading, mutate } = useSWR(`/api/pages/${slug}`, fetcher, {
    revalidateOnFocus: false,
  });

  useEffect(() => {
    if (data?.success && data?.data) {
      const p = data.data;
      setHeroData({
        pageTitle: p.pageTitle,
        badgeText: p.badgeText,
        heroTitle: p.heroTitle,
        heroDescription: p.heroDescription,
        heroImage: p.heroImage,
      });
      setStats(p.stats || []);
      setFeatures(p.features || []);
      if (p.heroImage) setImagePreview(p.heroImage);
    }
  }, [data]);

  const handleHeroChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setHeroData((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > MAX_FILE_SIZE){
        toast.error(`Image size must be less than ${MAX_FILE_SIZE / 1024 / 1024}MB.`);
        return;
      }
      setHeroImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const formData = new FormData();
      formData.append("pageTitle", heroData.pageTitle);
      formData.append("badgeText", heroData.badgeText || "");
      formData.append("heroTitle", heroData.heroTitle);
      formData.append("heroDescription", heroData.heroDescription);
      
      formData.append("stats", JSON.stringify(stats));

      const featuresPayload = features.map(f => {
        const { newThumbnailFile, ...rest } = f;
        return rest; 
      });
      formData.append("features", JSON.stringify(featuresPayload));

      features.forEach((feature, index) => {
        if (feature.newThumbnailFile) {
          formData.append(`featureThumbnail_${index}`, feature.newThumbnailFile);
        }
      });

      if (heroImageFile) {
        formData.append("heroImage", heroImageFile);
      }

      const res = await fetch(`/api/admin/pages/${slug}`, {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      if (result.success) {
        toast.success(`${headerTitle} updated successfully!`);
        setHeroImageFile(null);
      
        setFeatures(prev => prev.map(f => ({ ...f, newThumbnailFile: undefined })));
        
        mutate();
      } else {
        toast.error(result.message || "Failed to update page.");
      }
    } catch {
      toast.error("An error occurred during save.");
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex h-[80vh] items-center justify-center">
        <Loader2 className="animate-spin text-[#213e76]" size={40} />
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-8 pb-24">
      <div className="sticky top-0 z-30 bg-slate-50/80 backdrop-blur-xl pb-4 pt-6 border-b border-slate-200/60 flex items-center justify-between -mx-6 px-6 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">{headerTitle}</h1>
          <p className="text-slate-500 text-sm mt-1">{headerDesc}</p>
        </div>
        <button 
          onClick={handleSave} 
          disabled={isSaving} 
          className="flex items-center gap-2 bg-[#213e76] hover:bg-black text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-[0_4px_14px_rgba(33,62,118,0.25)] disabled:opacity-60"
        >
          {isSaving ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
          {isSaving ? "Saving..." : "Save Changes"}
        </button>
      </div>

      <div className="space-y-10">
        <HeroEditor data={heroData} onChange={handleHeroChange} onImageChange={handleImageChange} imagePreview={imagePreview} />
        <StatsEditor stats={stats} setStats={setStats} />
        <FeaturesEditor features={features} setFeatures={setFeatures} />
      </div>
    </div>
  );
}