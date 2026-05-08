"use client";

import React, { useState, useEffect } from "react";
import useSWR from "swr";
import { toast } from "react-hot-toast";
import { Save, Loader2 } from "lucide-react";
import { MAX_FILE_SIZE } from "@/lib/constants";
import CarouselEditor from "@/components/admin/about/CarouselEditor";
import { AboutHeroEditor } from "@/components/admin/about/AboutHeroEditor";
import { AboutBlueCardEditor } from "@/components/admin/about/AboutBlueCardEditor";
import { AboutMainStoryEditor } from "@/components/admin/about/AboutMainStoryEditor";
import { AboutMissionVisionEditor } from "@/components/admin/about/AboutMissionVisionEditor";
import { AboutPillarsEditor } from "@/components/admin/about/AboutPillarsEditor";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function AdminAboutPage() {
  const [isSaving, setIsSaving] = useState(false);
  
  const [pageData, setPageData] = useState({
    heroTitle: "",
    blueCardTitle: "",
    blueCardText: "",
    mainEyebrow: "",
    mainTitle: "",
    mainText: "",
    mainHighlight: "",
    missionTitle: "",
    missionText: "",
    visionTitle: "",
    visionText: "",
    serveEyebrow: "",
    serveTitle: "",
    serveText: "",
  });

  const [blueCardValues, setBlueCardValues] = useState<string[]>([]);
  const [pillars, setPillars] = useState<any[]>([]);
  const [heroImageFile, setHeroImageFile] = useState<File | null>(null);
  const [heroImagePreview, setHeroImagePreview] = useState<string | null>(null);
  const [teamSection, setTeamSection] = useState({
    title: "",
    subtitle: "",
    items: [] as any[]
  });

  const { data, isLoading, mutate } = useSWR("/api/about", fetcher, { revalidateOnFocus: false });

  useEffect(() => {
    if (data?.success && data?.data) {
      const content = data.data;
      
      setPageData({
        heroTitle: content.heroTitle || "",
        blueCardTitle: content.blueCardTitle || "",
        blueCardText: content.blueCardText || "",
        mainEyebrow: content.mainEyebrow || "",
        mainTitle: content.mainTitle || "",
        mainText: content.mainText || "",
        mainHighlight: content.mainHighlight || "",
        missionTitle: content.missionTitle || "",
        missionText: content.missionText || "",
        visionTitle: content.visionTitle || "",
        visionText: content.visionText || "",
        serveEyebrow: content.serveEyebrow || "",
        serveTitle: content.serveTitle || "",
        serveText: content.serveText || "",
      });
      
      setBlueCardValues(content.blueCardValues || []);
      setPillars(content.pillars || []);
      if (content.heroImage) setHeroImagePreview(content.heroImage);

      setTeamSection({
        title: content.teamTitle || "",
        subtitle: content.teamDescription || "",
        items: (content.teamMembers || []).map((tm: any) => ({
          id: tm.id,
          title: tm.name,
          subtitle: tm.role,
          image: tm.image
        }))
      });
    }
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPageData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > MAX_FILE_SIZE) return toast.error(`Image must be less than ${MAX_FILE_SIZE / 1024 / 1024}MB`);
      setHeroImageFile(file);
      setHeroImagePreview(URL.createObjectURL(file));
    }
  };

  const updateTeamSection = (index: number, field: string, value: any) => {
    setTeamSection(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const formData = new FormData();
      
      Object.entries(pageData).forEach(([key, value]) => formData.append(key, value as string));
      
      formData.append("blueCardValues", JSON.stringify(blueCardValues));
      formData.append("pillars", JSON.stringify(pillars.map(p => ({
        id: p.id, title: p.title, description: p.description, icon: p.icon
      }))));

      if (heroImageFile) formData.append("heroImage", heroImageFile);

      formData.append("teamTitle", teamSection.title);
      formData.append("teamDescription", teamSection.subtitle);
      
      const teamMembersForApi = teamSection.items.map(item => ({
        id: item.id,
        name: item.title,
        role: item.subtitle,
        image: item.image
      }));
      formData.append("teamMembers", JSON.stringify(teamMembersForApi));

      teamSection.items.forEach((item, index) => {
        if (item.newImageFile) {
          formData.append(`teamImage_${index}`, item.newImageFile);
        }
      });

      const res = await fetch("/api/admin/about", { method: "POST", body: formData });
      const result = await res.json();
      
      if (result.success) {
        toast.success("About page updated successfully!");
        setHeroImageFile(null);
        mutate();
      } else {
        toast.error(result.message || "Failed to save.");
      }
    } catch {
      toast.error("An error occurred during save.");
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return <div className="flex h-[80vh] items-center justify-center"><Loader2 className="animate-spin text-[#213e76]" size={40} /></div>;
  }

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-10 pb-32">
      {/* HEADER */}
      <div className="sticky top-0 z-40 bg-slate-50/80 backdrop-blur-xl py-4 border-b border-slate-200 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-slate-900 uppercase">About Page CMS</h1>
          <p className="text-slate-500 text-sm mt-1 font-medium">Manage the company story, mission, team, and pillars.</p>
        </div>
        <button onClick={handleSave} disabled={isSaving} className="bg-[#213e76] text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-black transition-colors disabled:opacity-50">
          {isSaving ? <Loader2 className="animate-spin" size={20} /> : <Save size={20} />} Save Changes
        </button>
      </div>

      <AboutHeroEditor pageData={pageData} handleChange={handleChange} heroImagePreview={heroImagePreview} handleImageChange={handleImageChange} />
      
      <AboutBlueCardEditor pageData={pageData} handleChange={handleChange} blueCardValues={blueCardValues} setBlueCardValues={setBlueCardValues} />
      
      <AboutMainStoryEditor pageData={pageData} handleChange={handleChange} />
      
      <AboutMissionVisionEditor pageData={pageData} handleChange={handleChange} />

      <CarouselEditor
        sIndex={0}
        section={teamSection}
        updateSection={updateTeamSection}
        config={{
          sectionFields: ['title', 'subtitle'],
          itemFields: ['title', 'subtitle', 'image']
        }}
      />
      
      <AboutPillarsEditor pageData={pageData} handleChange={handleChange} pillars={pillars} setPillars={setPillars} />
    </div>
  );
}