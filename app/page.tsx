"use client";

import { useEffect, useState } from "react";
import Home from "@/components/home/Home";
import Loader from "@/components/Loader";

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200); // match loader timing

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && <Home />}
    </>
  );
}