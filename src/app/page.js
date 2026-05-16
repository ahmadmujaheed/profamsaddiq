"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  GraduationCap,
  FileText,
  ExternalLink,
  Award,
  Users,
  Microscope,
  Globe,
  ChevronRight,
  Sprout,
  X,
  Eye,
  Lock
} from "lucide-react";

const profileSlides = [
  {
    id: 1,
    tag: "Professor of Soil Chemistry & Fertility Management",
    title: "Transforming African Agriculture Through Practical Soil Science",
    description:
      "Advancing sustainable soil fertility solutions, climate-smart agriculture, and profitable crop production systems for food security and farmer prosperity.",
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    tag: "Research • Food Security • Agricultural Innovation",
    title:
      "Building Sustainable Farming Systems for Higher Yield and Soil Health",
    description:
      "Leading impactful research in nutrient management, fertilizer efficiency, and regenerative agriculture with practical pagelications across Africa.",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80",
  },
];

const page = () => {
  const [index, setIndex] = useState(0);
  const [showCV, setShowCV] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % profileSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (showCV) {
        // Block Ctrl+S (Save), Ctrl+P (Print), Ctrl+C (Copy), Ctrl+U (Source)
        if (e.ctrlKey && (e.key === 's' || e.key === 'p' || e.key === 'c' || e.key === 'u')) {
          e.preventDefault();
        }
      }
    };

    const handleContextMenu = (e) => {
      if (showCV) e.preventDefault();
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("contextmenu", handleContextMenu);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("contextmenu", handleContextMenu);
    };
  }, [showCV]);

  return (
    <main className="min-h-screen bg-[#fcfcfc] text-slate-900 selection:bg-[#C99B3B] selection:text-white overflow-hidden">
      
      {}
      <section className="relative h-screen w-full overflow-hidden bg-slate-950">
        <AnimatePresence mode="wait">
          <motion.div
            key={profileSlides[index].id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="relative flex h-full flex-col md:flex-row"
          >
            <div className="relative z-10 flex h-full flex-1 flex-col justify-center bg-slate-950 px-8 text-white md:px-20">
              <motion.span
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#C99B3B]"
              >
                {profileSlides[index].tag}
              </motion.span>

              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="max-w-4xl text-2xl font-light leading-tight md:text-4xl"
              >
                {profileSlides[index].title}
              </motion.h1>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-400"
              >
                {profileSlides[index].description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-12 flex flex-wrap gap-4"
              >
                <button className="bg-[#C99B3B] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-[#b08732]">
                  View Research
                </button>

                <button 
                  onClick={() => setShowCV(true)}
                  className="border border-slate-700 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:border-[#C99B3B] hover:bg-[#C99B3B]"
                >
                  View CV
                </button>
              </motion.div>
            </div>

            <div className="relative h-1/2 flex-1 md:h-full">
              <motion.img
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
                src={profileSlides[index].image}
                className="h-full w-full object-cover opacity-80"
                alt="Agricultural Research"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent" />
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-12 left-8 flex gap-3 md:left-20">
          {profileSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-[2px] transition-all duration-500 ${
                index === i ? "w-16 bg-[#C99B3B]" : "w-8 bg-slate-700"
              }`}
            />
          ))}
        </div>
      </section>

      {}
      <section className="grid grid-cols-2 border-b border-slate-200 bg-white md:grid-cols-4">
        {[
          { label: "Research Publications", value: "85+", icon: <FileText size={20} /> },
          { label: "Farmers Impacted", value: "500+", icon: <Users size={20} /> },
          { label: "Years of Research", value: "20+", icon: <BookOpen size={20} /> },
          { label: "Field Projects", value: "15+", icon: <Award size={20} /> },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="flex flex-col items-center justify-center border-r border-slate-200 py-16 last:border-r-0"
          >
            <span className="mb-3 text-[#C99B3B]">{stat.icon}</span>
            <div className="text-4xl font-bold">{stat.value}</div>
            <div className="mt-2 text-center text-xs font-semibold uppercase tracking-widest text-slate-400">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </section>

      {}
      <section className="bg-[#f8f9fa] px-8 py-32 md:px-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#C99B3B]">
            Research Framework
          </h2>
          <h3 className="mt-4 text-4xl font-light md:text-5xl">
            Core Research Focus Areas
          </h3>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Soil Fertility Management",
              desc: "Developing sustainable nutrient management systems that improve soil health and maximize agricultural productivity.",
              icon: <Sprout className="mb-6 h-10 w-10 text-[#C99B3B]" />,
            },
            {
              title: "Climate-Smart Agriculture",
              desc: "Researching resilient farming strategies that help farmers adapt to climate variability while maintaining profitable yields.",
              icon: <Microscope className="mb-6 h-10 w-10 text-[#C99B3B]" />,
            },
            {
              title: "Food Security & Rural Development",
              desc: "Promoting practical agricultural solutions that support food sustainability, farmer income, and national agricultural growth.",
              icon: <Globe className="mb-6 h-10 w-10 text-[#C99B3B]" />,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -10 }}
              className="border border-slate-100 bg-white p-10 transition-all"
            >
              {item.icon}
              <h4 className="mb-4 text-2xl font-semibold">{item.title}</h4>
              <p className="leading-relaxed text-slate-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {}
      <section className="px-8 py-32 md:px-20">
        <div className="flex flex-col items-center gap-20 md:flex-row">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative md:w-1/2"
          >
            <div className="absolute -left-10 -top-10 h-40 w-40 bg-[#C99B3B]/10 blur-3xl" />
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80"
              alt="Professor of Soil Science"
              className="relative z-10 aspect-4/5 w-full object-cover"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2"
          >
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#C99B3B]">
              Sustainable Agriculture Leadership
            </h2>
            <p className="mt-6 text-4xl font-light leading-tight">
              Advancing practical soil science solutions for sustainable
              food production and agricultural transformation.
            </p>
            <p className="mt-8 text-lg leading-relaxed text-slate-600">
              Prof. A.M. Saddiq is a distinguished Professor of Soil
              Chemistry and Fertility Management dedicated to improving
              agricultural productivity through practical and
              research-driven soil management systems.
            </p>
            <div className="mt-12 space-y-6">
              {[
                "Consultant on sustainable soil fertility and agricultural productivity initiatives",
                "Advocate for food security, regenerative agriculture, and farmer-centered innovation"
              ].map((text, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + (idx * 0.1) }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 bg-[#C99B3B] p-1">
                    <ChevronRight size={14} className="text-white" />
                  </div>
                  <p className="font-medium text-slate-800">{text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {}
      <section className="bg-slate-950 px-8 py-32 text-white md:px-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#C99B3B]">
              Scholarly Contributions
            </h2>
            <h3 className="mt-4 text-4xl font-light md:text-5xl">
              Recent Research Publications
            </h3>
          </div>
          <button 
            onClick={() => setShowCV(true)}
            className="flex items-center gap-3 border-b border-[#C99B3B] pb-2 text-sm font-bold uppercase tracking-widest text-[#C99B3B] transition-colors hover:text-white"
          >
            Download Full CV <ExternalLink size={16} />
          </button>
        </motion.div>

        <div className="grid gap-6">
          {[
            { year: "2026", title: "Sustainable Fertility Management for Improved Maize Yield", journal: "AJAR", type: "Article" },
            { year: "2025", title: "Soil Nutrient Dynamics and Climate-Smart Farming", journal: "ISSR", type: "Research" },
            { year: "2024", title: "Integrated Fertilizer Strategies for Food Security", journal: "JSA", type: "Article" },
            { year: "2023", title: "Practical Soil Restoration Techniques", journal: "ADP", type: "Book" },
          ].map((pub, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ x: 15 }}
              className="group flex cursor-pointer flex-col justify-between border-b border-slate-800 py-10 md:flex-row md:items-center"
            >
              <div className="flex gap-8 md:gap-20">
                <span className="font-mono text-lg text-[#C99B3B]">{pub.year}</span>
                <div>
                  <h4 className="text-xl font-light transition-colors group-hover:text-[#C99B3B] md:text-2xl">{pub.title}</h4>
                  <div className="mt-2 flex gap-4">
                    <p className="text-sm uppercase tracking-widest text-slate-500">{pub.journal}</p>
                    <span className="border border-slate-700 px-2 py-0.5 text-xs text-slate-400">{pub.type}</span>
                  </div>
                </div>
              </div>
              <FileText className="hidden text-slate-800 transition-colors group-hover:text-[#C99B3B] md:block" size={32} />
            </motion.div>
          ))}
        </div>
      </section>

      {}
      <section className="bg-white px-8 py-32 md:px-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div
            initial={{ rotate: -15, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GraduationCap className="mx-auto mb-8 text-[#C99B3B]" size={48} />
          </motion.div>
          <h2 className="mb-8 text-3xl font-light md:text-3xl">
            "Healthy soils are the foundation of food security, economic stability, and sustainable agricultural development."
          </h2>
          <p className="text-xl italic leading-relaxed text-slate-500">
            — Prof. A.M. Saddiq
          </p>
        </motion.div>
      </section>

      {}
      <AnimatePresence>
        {showCV && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 p-4 md:p-10 backdrop-blur-md"
          >
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="relative h-full w-full max-w-5xl bg-white flex flex-col shadow-2xl overflow-hidden"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="bg-[#C99B3B] p-2">
                    <Lock size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900">Secure Curriculum Vitae</h4>
                    <p className="text-[10px] uppercase tracking-tighter text-slate-400 font-bold">Read-Only Mode Enabled</p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowCV(false)}
                  className="p-2 text-slate-400 transition-colors hover:text-[#C99B3B] hover:bg-slate-50"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Secure PDF Container */}
              <div className="relative flex-1 bg-slate-100">
                {/* Visual Blocking Overlays */}
                <div className="absolute inset-0 z-10 select-none pointer-events-none" />
                
                {/* PDF Viewer - Points to your specific file in /public */}
                <iframe
                  src="/CURRICULUM_VITAE_ABDULLAHI_MUHAMMAD_SADDIQ.pdf#toolbar=0&navpanes=0&scrollbar=0"
                  className="h-full w-full border-none"
                  title="Professor Saddiq CV Viewer"
                />

                {/* Footer restrictions note */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
                  <div className="flex items-center gap-2 bg-slate-900/80 px-4 py-2 text-white backdrop-blur-sm">
                    <Eye size={12} />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Viewing Prof. Saddiq's CV</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
};

export default page;