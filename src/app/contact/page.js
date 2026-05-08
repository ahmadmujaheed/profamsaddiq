"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  ChevronDown,
  ArrowUpRight,
  Building2,
  GraduationCap,
  Users,
  Sprout,
  Landmark,
} from "lucide-react";

const contactCards = [
  {
    icon: <Mail size={28} />,
    title: "Email Address",
    value: "amuhammadsaddiq@mau.edu.ng",
    sub: "Primary Academic Contact",
  },

  {
    icon: <Phone size={28} />,
    title: "Telephone",
    value: "+234 805 359 3616",
    sub: "Professional Enquiries",
  },

  {
    icon: <Building2 size={28} />,
    title: "Institution",
    value: "Modibbo Adama University, Yola",
    sub: "Department of Soil Science",
  },

  {
    icon: <MapPin size={28} />,
    title: "Location",
    value: "Yola, Adamawa State, Nigeria",
    sub: "Research & Academic Activities",
  },
];

const collaborationAreas = [
  "Soil Fertility Management",
  "Food Security Initiatives",
  "Climate-Smart Agriculture",
  "Agricultural Development Projects",
  "Research Collaboration",
  "Land Resource Assessment",
  "Environmental Sustainability",
  "Agricultural Consultancy",
];

const page = () => {
  return (
    <div className="min-h-screen bg-[#FCFCFC] overflow-hidden">
      {/* ====================================================== */}
      {/* HERO SECTION */}
      {/* ====================================================== */}
      <section className="relative flex h-[70vh] items-center justify-center overflow-hidden bg-slate-950">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80"
          alt="Agricultural Research"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#FCFCFC] via-transparent to-black/50" />

        <div className="relative z-10 px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#C99B3B] md:text-sm">
              Research • Collaboration • Agricultural Development
            </span>

            <h1 className="mt-6 text-5xl font-light text-white md:text-8xl">
              Contact & Collaboration
            </h1>

            <p className="mx-auto mt-8 max-w-4xl text-lg leading-relaxed text-slate-300 md:text-xl">
              Open to research collaboration, consultancy,
              sustainability initiatives, food security programs,
              agricultural development partnerships, and institutional
              engagement.
            </p>

            <div className="mt-10 flex justify-center">
              <ChevronDown
                className="animate-bounce text-white"
                size={32}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* INTRO SECTION */}
      {/* ====================================================== */}
      <section className="relative z-20 -mt-12 px-8 md:px-20">
        <div className="rounded-[36px] border border-slate-100 bg-white p-10 shadow-2xl md:p-16">
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
            <div className="max-w-4xl">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C99B3B]">
                Global Agricultural Engagement
              </span>

              <h2 className="mt-5 text-4xl font-light leading-tight md:text-6xl">
                Building Sustainable Agricultural Solutions Through
                Partnership & Innovation
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-slate-500">
                Prof. A.M. Saddiq welcomes collaboration with research
                institutions, development organizations, government
                agencies, agricultural industries, sustainability
                initiatives, and food security programs focused on
                practical agricultural transformation and environmental
                resilience.
              </p>
            </div>

            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[#C99B3B]/10">
              <Users
                className="text-[#C99B3B]"
                size={42}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* CONTACT GRID */}
      {/* ====================================================== */}
      <section className="px-8 py-28 md:px-20">
        <div className="grid gap-8 md:grid-cols-2">
          {contactCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="rounded-[32px] border border-slate-100 bg-white p-10 shadow-sm transition-all hover:border-[#C99B3B]/20 hover:shadow-xl"
            >
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C99B3B]/10 text-[#C99B3B]">
                {card.icon}
              </div>

              <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-slate-400">
                {card.title}
              </h3>

              <h2 className="mt-5 text-2xl font-light leading-snug md:text-3xl">
                {card.value}
              </h2>

              <p className="mt-4 text-slate-500">
                {card.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ====================================================== */}
      {/* CONTACT FORM + DETAILS */}
      {/* ====================================================== */}
      <section className="bg-slate-950 px-8 py-32 text-white md:px-20">
        <div className="grid gap-20 md:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C99B3B]">
              Send a Message
            </span>

            <h2 className="mt-6 text-4xl font-light leading-tight md:text-6xl">
              Let’s Collaborate on Sustainable Agricultural Solutions
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-400">
              Interested in research collaboration, agricultural
              consultancy, sustainability initiatives, food security
              programs, or institutional partnerships? Send a message
              to begin the conversation.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              {[
                "Research Partnerships",
                "Agricultural Consultancy",
                "Food Security",
                "Climate Resilience",
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-xs font-bold uppercase tracking-widest"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* NAME */}
            <div>
              <label className="mb-3 block text-xs font-bold uppercase tracking-widest text-slate-400">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-white outline-none transition-all placeholder:text-slate-500 focus:border-[#C99B3B]"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="mb-3 block text-xs font-bold uppercase tracking-widest text-slate-400">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-white outline-none transition-all placeholder:text-slate-500 focus:border-[#C99B3B]"
              />
            </div>

            {/* SUBJECT */}
            <div>
              <label className="mb-3 block text-xs font-bold uppercase tracking-widest text-slate-400">
                Subject
              </label>

              <input
                type="text"
                placeholder="Research collaboration, consultancy, etc."
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-white outline-none transition-all placeholder:text-slate-500 focus:border-[#C99B3B]"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="mb-3 block text-xs font-bold uppercase tracking-widest text-slate-400">
                Message
              </label>

              <textarea
                rows={6}
                placeholder="Write your message here..."
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-white outline-none transition-all placeholder:text-slate-500 focus:border-[#C99B3B]"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="inline-flex items-center gap-3 rounded-full bg-[#C99B3B] px-8 py-5 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-[#b78a2d]"
            >
              Send Message
              <ArrowUpRight size={16} />
            </button>
          </motion.form>
        </div>
      </section>

      {/* ====================================================== */}
      {/* COLLABORATION AREAS */}
      {/* ====================================================== */}
      <section className="px-8 py-32 md:px-20">
        <div className="mb-20 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C99B3B]">
            Areas of Collaboration
          </span>

          <h2 className="mt-4 text-4xl font-light md:text-6xl">
            Research & Consultancy Interests
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {collaborationAreas.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:border-[#C99B3B]/20 hover:shadow-xl"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C99B3B]/10 text-[#C99B3B]">
                {i % 4 === 0 && <Sprout size={24} />}
                {i % 4 === 1 && <Globe size={24} />}
                {i % 4 === 2 && <Landmark size={24} />}
                {i % 4 === 3 && <GraduationCap size={24} />}
              </div>

              <h3 className="text-xl font-medium leading-snug">
                {item}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ====================================================== */}
      {/* FINAL CTA */}
      {/* ====================================================== */}
      <section className="px-8 pb-32 md:px-20">
        <div className="rounded-[40px] bg-[#fcf7ec] p-14 text-center md:p-24">
          <Mail
            className="mx-auto mb-8 text-[#C99B3B]"
            size={42}
          />

          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C99B3B]">
            Research & Institutional Collaboration
          </span>

          <h2 className="mx-auto mt-6 max-w-5xl text-4xl font-light leading-tight md:text-6xl">
            Advancing Sustainable Agriculture Through Research,
            Innovation & Partnership
          </h2>

          <p className="mx-auto mt-10 max-w-4xl text-lg leading-relaxed text-slate-600">
            Prof. A.M. Saddiq remains committed to collaborative
            agricultural development, sustainable food systems, soil
            fertility management, and research-driven solutions that
            positively impact farming communities and environmental
            sustainability.
          </p>

          <a
            href="mailto:amuhammadsaddiq@mau.edu.ng"
            className="mt-12 inline-flex items-center gap-3 rounded-full bg-slate-950 px-8 py-5 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-[#C99B3B]"
          >
            amuhammadsaddiq@mau.edu.ng
            <ArrowUpRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default page;