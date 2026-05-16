"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Users,
  ChevronDown,
  Sprout,
  Landmark,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  X,
  FileText,
  ChevronRight
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  viewport: { once: true },
};

const page = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans text-slate-900 selection:bg-[#C99B3B] selection:text-white">
      
      {}
      <section className="relative flex h-[90vh] w-full items-center justify-center overflow-hidden bg-slate-950">
        <motion.img
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80"
          alt="Lush green agricultural landscape representing soil fertility"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-white" />

        <div className="relative z-10 px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="mb-6 inline-block text-xs font-bold uppercase tracking-[0.5em] text-[#C99B3B]">
              Scientific Excellence • Practical Solutions
            </span>

            <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-white md:text-7xl">
              About Prof. Abdullahi Muhammad Saddiq
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
              Pioneering sustainable soil chemistry and fertility management for 
              future-proof agriculture across West Africa and beyond.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-6 md:flex-row">
              <button className="bg-[#C99B3B] px-10 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-[#b08732] hover:shadow-2xl active:scale-95">
                Explore Research
              </button>
              <div className="flex animate-bounce flex-col items-center gap-2 text-white/50">
                <ChevronDown size={24} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {}
      <section className="mx-auto max-w-7xl px-8 py-32 md:px-12">
        <div className="flex flex-col items-center gap-20 lg:flex-row">
          <motion.div 
            {...fadeIn}
            className="lg:w-1/2"
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="h-[1px] w-12 bg-[#C99B3B]" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C99B3B]">
                The Vision
              </span>
            </div>

            <h2 className="text-4xl font-light leading-tight text-slate-900 md:text-5xl">
              Bridging the gap between <br />
              <span className="font-bold text-[#C99B3B]">Laboratory & Field.</span>
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-600">
              <p>
                With over 30 years of dedicated academic and field experience, 
                Prof. Saddiq has focused on identifying local soil constraints 
                and developing site-specific fertility management protocols.
              </p>
              <p>
                His work transcends academic boundaries, collaborating with 
                international bodies like the World Bank and UNDP to translate 
                complex soil chemistry into actionable strategies for rural 
                smallholder farmers.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-8 border-t border-slate-100 pt-10">
              <div>
                <h4 className="text-3xl font-bold text-[#C99B3B]">50+</h4>
                <p className="text-sm font-medium text-slate-400">Research Publications</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-[#C99B3B]">1k+</h4>
                <p className="text-sm font-medium text-slate-400">Students Mentored</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative lg:w-1/2"
          >
            <div className="absolute -inset-4 -z-10 translate-x-6 translate-y-6 border-2 border-[#C99B3B]/10" />
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80"
              alt="Close-up of healthy soil being examined"
              className="h-[600px] w-full object-cover shadow-2xl"
              loading="lazy"
            />
            <div className="absolute bottom-8 right-8 bg-white p-8 shadow-xl">
              <p className="text-xs font-bold uppercase tracking-widest text-[#C99B3B]">Specialization</p>
              <p className="mt-2 text-xl font-medium italic">Soil Chemistry Expert</p>
            </div>
          </motion.div>
        </div>
      </section>

      {}
      <section className="bg-slate-50 px-8 py-32 md:px-20">
        <div className="mx-auto max-w-7xl">
          <motion.div {...fadeIn} className="mb-20 text-center">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[#C99B3B]">Commitments</h2>
            <h3 className="mt-4 text-4xl font-light md:text-5xl text-slate-900">Research & Impact Areas</h3>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid gap-8 md:grid-cols-3"
          >
            {[
              {
                icon: <Sprout className="h-8 w-8" />,
                title: "Soil Fertility",
                desc: "Optimizing nutrient availability through balanced organic and inorganic fertilizer management systems.",
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: "Sustainability",
                desc: "Implementing climate-smart practices that restore soil health and prevent environmental degradation.",
              },
              {
                icon: <Landmark className="h-8 w-8" />,
                title: "Policy Development",
                desc: "Advising government bodies on land validation and sustainable irrigation infrastructure for national security.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                whileHover={{ y: -10 }}
                className="group border border-slate-200 bg-white p-12 transition-all hover:border-[#C99B3B] hover:shadow-xl"
              >
                <div className="mb-6 inline-block rounded-full bg-slate-50 p-4 text-[#C99B3B] transition-colors group-hover:bg-[#C99B3B] group-hover:text-white">
                  {item.icon}
                </div>
                <h3 className="mb-4 text-2xl font-semibold">{item.title}</h3>
                <p className="leading-relaxed text-slate-500">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {}
      <section className="px-8 py-32 md:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-20 md:flex-row">
            <motion.div {...fadeIn} className="md:w-1/3">
              <h2 className="text-sm font-bold uppercase tracking-widest text-[#C99B3B]">Milestones</h2>
              <h3 className="mt-4 text-4xl font-light">Academic & Professional Journey</h3>
              <p className="mt-6 text-slate-500">Over three decades of evolution from service roles to senior professorship.</p>
            </motion.div>

            <div className="relative space-y-12 md:w-2/3">
              <div className="absolute left-0 top-0 h-full w-[1px] bg-slate-100" />
              {[
                { year: "2016 — Present", role: "Professor of Soil Chemistry", org: "Modibbo Adama University, Yola" },
                { year: "2013 — 2016", role: "Associate Professor", org: "MAUTECH, Yola" },
                { year: "2000 — 2013", role: "Lecturer Track", org: "Academic Advancement & Research" },
                { year: "1990 — 2000", role: "Civil Service", org: "Agricultural Development Services" },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative flex gap-8 pl-8"
                >
                  <div className="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-[#C99B3B] transition-all group-hover:scale-150" />
                  <div className="min-w-[120px] font-mono text-sm text-[#C99B3B]">{step.year}</div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 group-hover:text-[#C99B3B] transition-colors">{step.role}</h4>
                    <p className="text-slate-500">{step.org}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="bg-slate-950 px-8 py-32 text-center text-white md:px-20">
        <motion.div {...fadeIn} className="mx-auto max-w-4xl">
          <GraduationCap size={48} className="mx-auto mb-8 text-[#C99B3B]" />
          <h2 className="text-3xl font-light leading-tight md:text-5xl">
            "We do not inherit the earth from our ancestors; <br />
            <span className="font-bold text-[#C99B3B]">we borrow it from our children."</span>
          </h2>
          <p className="mt-10 text-xl text-slate-400">— Chief Seattle (Principles of Stewardship)</p>
          <div className="mt-16 flex flex-wrap justify-center gap-6">
            <button className="bg-[#C99B3B] px-10 py-4 font-bold uppercase tracking-widest text-white transition-all hover:bg-[#b08732]">
              Partner with the Lab
            </button>
            <button className="border border-white/20 px-10 py-4 font-bold uppercase tracking-widest transition-all hover:bg-white hover:text-slate-950">
              Research Archive
            </button>
          </div>
        </motion.div>
      </section>

      {}
    </div>
  );
};

export default page;