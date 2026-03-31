"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { featureData } from "@/app/types/featuredata";
import FeatureSkeleton from "@/app/Skeleton/Features";

const Features = () => {
  const [features, setFeatures] = useState<featureData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setFeatures(data.FeatureData);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <section id="features" className="py-24 lg:py-40 bg-white">
      <div className="container mx-auto px-6">
        {/* Simplified Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-5xl lg:text-7xl font-bold text-[#01111E] leading-[1.1] tracking-tighter">
              Global reach. <br />
              <span className="text-black/20">Local rules.</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-xl text-black/50 leading-relaxed">
              Scale your messaging across borders without the compliance
              headache. Real-time sender ID validation built-in.
            </p>
          </div>
        </div>

        {/* The "Minimalist" Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-black/[0.08]">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="p-12 border-r border-b border-black/[0.08]"
                >
                  <FeatureSkeleton />
                </div>
              ))
            : features.map((item, i) => (
                <div
                  key={i}
                  className="group relative p-12 border-r border-b border-black/[0.08] transition-colors duration-500 hover:bg-slate-50/50"
                >
                  {/* Subtle Gradient Hover Backdrop */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="relative z-10">
                    <div className="mb-10 inline-block">
                      <Image
                        src={item.imgSrc}
                        alt={item.heading}
                        width={48}
                        height={48}
                        className="opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 grayscale group-hover:grayscale-0"
                      />
                    </div>

                    <h3 className="text-2xl font-bold text-[#01111E] mb-4">
                      {item.heading}
                    </h3>

                    <p className="text-black/40 text-lg leading-relaxed group-hover:text-black/70 transition-colors duration-500">
                      {item.paragraph}
                    </p>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
