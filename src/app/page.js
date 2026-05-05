"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BookOpen, 
  GraduationCap, 
  Mail, 
  FileText, 
  ExternalLink,
  Award,
  Users,
  Microscope,
  Cpu,
  Globe,
  ChevronRight
} from "lucide-react";

const profileSlides = [
  {
    id: 1,
    tag: "Department of Quantum Physics",
    title: "Exploring the Frontiers of Particle Entanglement",
    description: "Leading the Q-Lab research initiative in developing scalable quantum computing architectures.",
    image: "https://images.unsplash.com/photo-1633113088983-12fb3b2fe427?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    tag: "Recent Publication",
    title: "The Mechanics of Neutral Atoms",
    description: "Winner of the 2025 Excellence in Scientific Publishing Award.",
    image: "https://images.unsplash.com/photo-1532187875460-1454f777e575?auto=format&fit=crop&q=80",
  }
];

const page = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % profileSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[#fcfcfc] text-slate-900 selection:bg-[#C99B3B] selection:text-white">
      
      {/* --- SECTION 1: HERO SLIDER (100vh) --- */}
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
                className="text-4xl font-light leading-tight md:text-7xl"
              >
                {profileSlides[index].title}
              </motion.h1>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-6 max-w-lg text-lg text-slate-400"
              >
                {profileSlides[index].description}
              </motion.p>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-10 flex gap-4"
              >
                <button className="bg-[#C99B3B] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-[#b08732]">
                  View Research
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
                alt="Research"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-transparent" />
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-12 left-8 md:left-20 flex gap-2">
          {profileSlides.map((_, i) => (
            <button 
              key={i}
              onClick={() => setIndex(i)}
              className={`h-[2px] transition-all duration-500 ${index === i ? "w-16 bg-[#C99B3B]" : "w-8 bg-slate-700"}`} 
            />
          ))}
        </div>
      </section>

      {/* --- SECTION 2: IMPACT STATS --- */}
      <section className="grid grid-cols-2 border-b border-slate-200 md:grid-cols-4 bg-white">
        {[
          { label: "Citations", value: "4.2k+", icon: <FileText size={20}/> },
          { label: "PhD Students", value: "12", icon: <Users size={20}/> },
          { label: "Publications", value: "85", icon: <BookOpen size={20}/> },
          { label: "Awards", value: "09", icon: <Award size={20}/> },
        ].map((stat, i) => (
          <div key={i} className="flex flex-col items-center justify-center border-r border-slate-200 py-16 last:border-r-0">
            <span className="text-[#C99B3B] mb-2">{stat.icon}</span>
            <div className="text-4xl font-bold">{stat.value}</div>
            <div className="text-xs uppercase tracking-widest text-slate-400 font-semibold">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* --- SECTION 3: CORE RESEARCH PILLARS (The "Why") --- */}
      <section className="px-8 py-32 md:px-20 bg-[#f8f9fa]">
        <div className="mb-20 text-center">
          <h2 className="text-[#C99B3B] font-bold uppercase tracking-widest text-sm">Research Framework</h2>
          <h3 className="text-4xl md:text-5xl font-light mt-4">Core Focus Areas</h3>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Quantum Information",
              desc: "Developing noise-resilient algorithms for the next generation of supercomputers.",
              icon: <Cpu className="w-10 h-10 mb-6 text-[#C99B3B]" />
            },
            {
              title: "Experimental Physics",
              desc: "Hands-on laboratory research focusing on sub-atomic particle manipulation.",
              icon: <Microscope className="w-10 h-10 mb-6 text-[#C99B3B]" />
            },
            {
              title: "Global Collaboration",
              desc: "Partnering with institutions in 15+ countries to standardize quantum ethics.",
              icon: <Globe className="w-10 h-10 mb-6 text-[#C99B3B]" />
            }
          ].map((item, i) => (
            <motion.div 
              whileHover={{ y: -10 }}
              key={i} 
              className="bg-white p-10 shadow-sm border border-slate-100 rounded-2xl"
            >
              {item.icon}
              <h4 className="text-2xl font-semibold mb-4">{item.title}</h4>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SECTION 4: BIOGRAPHY & BACKGROUND --- */}
      <section className="px-8 py-32 md:px-20">
        <div className="flex flex-col gap-20 md:flex-row items-center">
          <div className="md:w-1/2 relative">
             <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#C99B3B]/10 rounded-full blur-3xl" />
             <img 
               src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80" 
               alt="Professor" 
               className="rounded-2xl shadow-2xl relative z-10 w-full object-cover aspect-[4/5]"
             />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#C99B3B]">The Academic Journey</h2>
            <p className="mt-6 text-4xl font-light leading-tight">
              A commitment to excellence in science and the mentorship of future leaders.
            </p>
            <p className="mt-8 text-lg text-slate-600 leading-relaxed">
              Dr. Alexis Vance has spent 20 years at the intersection of theory and practice. From her early work at MIT to 
              current international research, she has consistently pushed the boundaries of what is possible in Quantum 
              Informatics.
            </p>
            <div className="mt-12 space-y-6">
               <div className="flex items-start gap-4">
                  <div className="mt-1 bg-[#C99B3B] p-1 rounded-full"><ChevronRight size={14} className="text-white"/></div>
                  <p className="font-medium text-slate-800">Board Member, International Physics Union</p>
               </div>
               <div className="flex items-start gap-4">
                  <div className="mt-1 bg-[#C99B3B] p-1 rounded-full"><ChevronRight size={14} className="text-white"/></div>
                  <p className="font-medium text-slate-800">Advisor to National Science Foundation</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 5: PUBLICATIONS GRID --- */}
      <section className="bg-slate-950 px-8 py-32 text-white md:px-20">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#C99B3B]">Scholarly Output</h2>
            <h3 className="mt-4 text-4xl md:text-5xl font-light">Recent Peer-Reviewed Works</h3>
          </div>
          <button className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-[#C99B3B] hover:text-white transition-colors border-b border-[#C99B3B] pb-2">
            Download Full CV <ExternalLink size={16} />
          </button>
        </div>

        <div className="grid gap-6">
          {[
            { year: "2026", title: "Non-Linear Dynamics in Superconducting Circuits", journal: "Nature Physics", type: "Article" },
            { year: "2025", title: "Scalable Qubit Mapping Algorithms", journal: "IEEE Quantum Engineering", type: "Conference" },
            { year: "2024", title: "Environmental Decoherence in Vacuum", journal: "Journal of Modern Physics", type: "Article" },
            { year: "2023", title: "Theoretical Foundations of Quantum Logic", journal: "Oxford Press", type: "Book" },
          ].map((pub, i) => (
            <motion.div 
              whileHover={{ x: 15 }}
              key={i} 
              className="group flex flex-col md:flex-row md:items-center justify-between border-b border-slate-800 py-10 cursor-pointer"
            >
              <div className="flex gap-8 md:gap-20">
                <span className="text-[#C99B3B] font-mono text-lg">{pub.year}</span>
                <div>
                  <h4 className="text-xl md:text-2xl font-light transition-colors group-hover:text-[#C99B3B]">{pub.title}</h4>
                  <div className="flex gap-4 mt-2">
                    <p className="text-sm text-slate-500 uppercase tracking-widest">{pub.journal}</p>
                    <span className="text-xs px-2 py-0.5 rounded border border-slate-700 text-slate-400">{pub.type}</span>
                  </div>
                </div>
              </div>
              <FileText className="hidden md:block text-slate-800 group-hover:text-[#C99B3B] transition-colors" size={32} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SECTION 6: TEACHING PHILOSOPHY --- */}
      <section className="px-8 py-32 md:px-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <GraduationCap className="mx-auto text-[#C99B3B] mb-8" size={48} />
          <h2 className="text-3xl md:text-5xl font-light mb-8">"Education is not the filling of a pail, but the lighting of a fire."</h2>
          <p className="text-xl text-slate-500 leading-relaxed italic">
            — My goal as an educator is to foster a lab environment where curiosity outweighs the fear of failure. 
            We don't just solve equations; we build frameworks for thinking about the impossible.
          </p>
        </div>
      </section>

    </main>
  );
};

export default page;