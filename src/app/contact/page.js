"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  ArrowUpRight,
  Building2,
  GraduationCap,
  Users,
  Sprout,
  Landmark,
  Globe,
} from "lucide-react";

const contactCards = [
  {
    icon: <Mail size={24} />,
    title: "Email Address",
    value: "amuhammadsaddiq@mau.edu.ng",
    sub: "Primary Academic Contact",
  },
  {
    icon: <Phone size={24} />,
    title: "Telephone",
    value: "+234 805 359 3616",
    sub: "Professional Enquiries",
  },
  {
    icon: <Building2 size={24} />,
    title: "Institution",
    value: "Modibbo Adama University",
    sub: "Department of Soil Science",
  },
  {
    icon: <MapPin size={24} />,
    title: "Location",
    value: "Yola, Adamawa State",
    sub: "Research & Academic Hub",
  },
];

const collaborationAreas = [
  "Soil Fertility Management",
  "Food Security Initiatives",
  "Climate-Smart Agriculture",
  "Development Projects",
  "Research Collaboration",
  "Land Resource Assessment",
  "Sustainability",
  "Agricultural Consultancy",
];

const page = () => {
  return (
    <div className="min-h-screen bg-[#FCFCFC] overflow-x-hidden font-sans">
      {/* HERO SECTION */}
      <section className="relative flex h-[70vh] items-center justify-center overflow-hidden bg-slate-950">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80"
          alt="Agricultural Research"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FCFCFC] via-transparent to-black/60" />

        <div className="relative z-10 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#C99B3B]">
              Research • Collaboration • Innovation
            </span>
            <h1 className="mt-6 text-5xl font-bold text-white md:text-5xl">
              Contact & Collaboration
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-slate-300">
              Partnering for food security, climate resilience, and sustainable
              agricultural transformation.
            </p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="mt-12 flex justify-center"
            >
              <div className="rounded-full border border-white/20 p-4 backdrop-blur-sm">
                <ChevronDown className="text-white" size={24} />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* INTRO SECTION - FIXED ICON LOGIC */}
      <section className="relative z-20 -mt-16 px-6 md:px-20">
        <div className="border border-slate-100 bg-white p-8 md:p-16">
          <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between">
            <div className="order-last md:order-first md:max-w-3xl text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C99B3B]">
                Global Agricultural Engagement
              </span>
              <h2 className="mt-4 text-3xl font-light leading-tight md:text-5xl text-slate-900">
                Building Sustainable Solutions Through Partnership
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-500">
                Prof. A.M. Saddiq welcomes collaboration with research
                institutions, government agencies, and agricultural industries
                focused on practical environmental resilience.
              </p>
            </div>
            <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full bg-[#C99B3B]/10 md:h-40 md:w-40">
              <Users className="text-[#C99B3B]" size={48} />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT & FORM SECTION */}
      <section className="bg-slate-950 px-6 py-24 mt-20 text-white md:px-20 lg:py-32">
        <div className="mb-16 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C99B3B]">
            Connect With Us
          </span>
          <h2 className="mt-4 text-4xl font-light md:text-5xl">
            Let’s Start a Conversation
          </h2>
        </div>

        <div className="grid gap-16 lg:grid-cols-2">
          {/* INFO CARDS */}
          <div className="grid gap-6 sm:grid-cols-2">
            {contactCards.map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 transition-colors hover:border-[#C99B3B]/40"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#C99B3B] text-white">
                  {card.icon}
                </div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#C99B3B]">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm font-medium">{card.value}</p>
                <p className="mt-1 text-sm text-slate-400">{card.sub}</p>
              </motion.div>
            ))}
          </div>

          {/* FORM */}
          <motion.form
            className="space-y-6 p-0 md:p-4" // Removed padding/bg for a cleaner integration
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[#C99B3B]">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-white/20 bg-transparent px-5 py-4 text-white outline-none transition-all placeholder:text-slate-500 focus:border-[#C99B3B] focus:ring-1 focus:ring-[#C99B3B]/50"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[#C99B3B]">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full rounded-xl border border-white/20 bg-transparent px-5 py-4 text-white outline-none transition-all placeholder:text-slate-500 focus:border-[#C99B3B] focus:ring-1 focus:ring-[#C99B3B]/50"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-[#C99B3B]">
                Subject
              </label>
              <input
                type="text"
                className="w-full rounded-xl border border-white/20 bg-transparent px-5 py-4 text-white outline-none transition-all placeholder:text-slate-500 focus:border-[#C99B3B] focus:ring-1 focus:ring-[#C99B3B]/50"
                placeholder="Research Inquiry"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-[#C99B3B]">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full rounded-xl border border-white/20 bg-transparent px-5 py-4 text-white outline-none transition-all placeholder:text-slate-500 focus:border-[#C99B3B] focus:ring-1 focus:ring-[#C99B3B]/50"
                placeholder="How can we help?"
              ></textarea>
            </div>

            <button className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#C99B3B] py-5 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-[#b78a2d] active:scale-95">
              Send Message
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </button>
          </motion.form>
        </div>
      </section>

      {/* COLLABORATION AREAS */}
      <section className="px-6 py-24 md:px-20">
        <div className="mb-16 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C99B3B]">
            Expertise
          </span>
          <h2 className="mt-4 text-4xl font-light md:text-5xl text-slate-900">
            Consultancy Interests
          </h2>
        </div>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
          {collaborationAreas.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02, borderColor: "#C99B3B" }}
              className="flex flex-col items-center justify-center rounded-2xl bg-white p-6 text-center shadow-sm transition-all"
            >
              <div className="mb-4 text-[#C99B3B]/40">
                {i % 4 === 0 && <Sprout size={20} />}
                {i % 4 === 1 && <Globe size={20} />}
                {i % 4 === 2 && <Landmark size={20} />}
                {i % 4 === 3 && <GraduationCap size={20} />}
              </div>
              <span className="text-[11px] font-bold uppercase tracking-tighter text-slate-700 md:text-xs">
                {item}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-24 md:px-20">
        <div className="rounded-[40px] bg-[#fcf7ec] p-10 text-center md:p-20">
          <Mail className="mx-auto mb-6 text-[#C99B3B]" size={40} />
          <h2 className="mx-auto max-w-3xl text-3xl font-light leading-tight md:text-5xl text-slate-900">
            Advancing Sustainable Agriculture Together
          </h2>
          <a
            href="mailto:amuhammadsaddiq@mau.edu.ng"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-slate-950 px-10 py-5 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-[#C99B3B]"
          >
            Get in touch <ArrowUpRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default page;
