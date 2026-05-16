"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Zap,
  History,
  Trophy,
  Users,
  ChevronDown,
  Sprout,
  Landmark,
  GraduationCap,
} from "lucide-react";

const page = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-[#FCFCFC] text-slate-900 overflow-hidden">
      {/* ====================================================== */}
      {/* HERO SECTION */}
      {/* ====================================================== */}
      <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#020617]">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80"
          alt="Agricultural Landscape"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-slate-900/50 to-[#020617]" />

        <div className="relative z-10 px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-sm font-bold uppercase tracking-[0.4em] text-[#D4A63F]">
              Sustainable Agriculture • Soil Health • Food Security
            </span>

            <h1 className="mt-6 text-5xl text-white md:text-5xl font-bold">
              About Prof. A.M. Saddiq
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
              Professor of Soil Chemistry and Fertility Management
              advancing sustainable agricultural systems, climate-smart
              farming, and practical soil science solutions for food
              security and rural development.
            </p>

            <div className="mt-12 flex justify-center">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="rounded-full border border-white/20 p-4 backdrop-blur-sm"
              >
                <ChevronDown className="text-white" size={24} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* HERO STORY */}
      {/* ====================================================== */}
      <section className="flex flex-col items-center gap-16 px-8 py-28 md:flex-row md:px-20 bg-[#FCFCFC]">
        {/* TEXT */}
        <motion.div {...fadeIn} className="md:w-1/2">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4A63F]">
            The Background
          </span>

          <h1 className="mt-4 text-5xl font-light leading-tight md:text-5xl">
            Driven by <br />
            <span className="text-[#D4A63F]">
              Sustainable Agricultural Transformation.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-600 text-justify">
            For more than three decades, Prof. Abdullahi Muhammad
            Saddiq has dedicated his career to advancing sustainable
            soil fertility systems, climate-smart agriculture, and
            practical farming solutions that improve crop productivity
            and food security across Nigeria and beyond.
          </p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 text-justify">
            His work bridges scientific research with real-world
            agricultural application, empowering farmers,
            institutions, and development initiatives through
            evidence-based soil management practices and sustainable
            agricultural innovation.
          </p>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative md:w-1/2"
        >
          <div className="absolute -inset-4 -z-10 translate-x-8 translate-y-8 border border-[#D4A63F]/20" />

          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80"
            alt="Professor of Soil Science"
            className="h-140 w-full object-cover"
          />
        </motion.div>
      </section>

      {/* ====================================================== */}
      {/* STATS GRID */}
      {/* ====================================================== */}
      <section className="relative overflow-hidden bg-[#020617] px-8 py-28 text-white md:px-20">
        <div className="relative z-10 grid grid-cols-1 gap-10 md:grid-cols-3">
          {[
            {
              icon: <History size={32} />,
              title: "30+ Years",
              desc:
                "Experience in soil science research, agricultural extension, and field-based agricultural development.",
            },

            {
              icon: <Globe size={32} />,
              title: "International Engagement",
              desc:
                "Participated in projects and agricultural field surveys involving World Bank, UNDP, and government institutions.",
            },

            {
              icon: <Trophy size={32} />,
              title: "50+ Publications",
              desc:
                "Research contributions in soil fertility, irrigation systems, climate-smart agriculture, and sustainable crop productivity.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="border border-white/10 bg-white/[0.04] p-10 backdrop-blur-sm transition-all hover:bg-white/10"
            >
              <div className="mb-6 text-[#D4A63F]">
                {item.icon}
              </div>

              <h3 className="mb-4 text-3xl font-semibold">
                {item.title}
              </h3>

              <p className="leading-relaxed text-slate-400">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ====================================================== */}
      {/* RESEARCH & IMPACT */}
      {/* ====================================================== */}
      <section className="bg-[#F5F5F2] px-8 py-32 md:px-20">
        <div className="mb-20 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4A63F]">
            Research & Development
          </span>

          <h2 className="mt-4 text-4xl font-light md:text-6xl">
            Core Areas of Contribution
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: (
                <Sprout className="mb-6 h-10 w-10 text-[#D4A63F]" />
              ),
              title: "Soil Fertility Management",
              desc:
                "Developing practical nutrient management systems that improve soil productivity, fertilizer efficiency, and sustainable crop yield.",
            },

            {
              icon: (
                <Globe className="mb-6 h-10 w-10 text-[#D4A63F]" />
              ),
              title: "Climate-Smart Agriculture",
              desc:
                "Advancing resilient agricultural systems capable of addressing climate variability, desertification, and environmental degradation.",
            },

            {
              icon: (
                <Landmark className="mb-6 h-10 w-10 text-[#D4A63F]" />
              ),
              title: "Agricultural Development",
              desc:
                "Contributing to agricultural surveys, land validation projects, irrigation systems, and food security initiatives with government and development institutions.",
            },
          ].map((item, i) => (
            <motion.div
              whileHover={{ y: -10 }}
              key={i}
              className="border border-slate-200/70 bg-white p-10 transition-all hover:border-[#D4A63F]/30 hover:shadow-xl"
            >
              {item.icon}

              <h3 className="mb-4 text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="leading-relaxed text-slate-600">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ====================================================== */}
      {/* TIMELINE */}
      {/* ====================================================== */}
      <section className="bg-[#FCFCFC] px-8 py-32 md:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-20 md:flex-row">
            {/* LEFT */}
            <div className="md:w-1/3">
              <h2 className="text-sm font-bold uppercase tracking-widest text-[#D4A63F]">
                Academic Journey
              </h2>

              <h3 className="mt-4 text-4xl font-light">
                Growth & Leadership
              </h3>
            </div>

            {/* RIGHT */}
            <div className="space-y-14 md:w-2/3">
              {[
                {
                  year: "1989 — 1990",
                  role: "National Youth Service",
                  org: "Odeda Farm Institute, Abeokuta, Ogun State",
                },

                {
                  year: "1990 — 2000",
                  role: "Agricultural & Civil Service Roles",
                  org: "Bauchi and Gombe State Agricultural Services",
                },

                {
                  year: "2000 — 2004",
                  role: "Lecturer II",
                  org: "Modibbo Adama University of Technology, Yola",
                },

                {
                  year: "2004 — 2010",
                  role: "Lecturer I",
                  org: "Modibbo Adama University of Technology, Yola",
                },

                {
                  year: "2010 — 2013",
                  role: "Senior Lecturer",
                  org: "Modibbo Adama University of Technology, Yola",
                },

                {
                  year: "2013 — 2016",
                  role: "Associate Professor",
                  org: "Modibbo Adama University of Technology, Yola",
                },

                {
                  year: "2016 — Present",
                  role:
                    "Professor of Soil Chemistry & Fertility Management",
                  org: "Modibbo Adama University, Yola",
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex gap-8"
                >
                  <div className="min-w-[140px] pt-1 font-mono text-[#D4A63F]">
                    {step.year}
                  </div>

                  <div>
                    <h4 className="text-2xl font-medium transition-colors group-hover:text-[#D4A63F]">
                      {step.role}
                    </h4>

                    <p className="mt-2 text-slate-500">
                      {step.org}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* LEADERSHIP & PROFESSIONAL MEMBERSHIP */}
      {/* ====================================================== */}
      <section className="bg-[#020617] px-8 py-32 text-white md:px-20">
        <div className="grid gap-16 md:grid-cols-2">
          {/* LEADERSHIP */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-white/10 bg-white/[0.04] p-12"
          >
            <div className="mb-6 text-[#D4A63F]">
              <Users size={40} />
            </div>

            <h2 className="mb-8 text-4xl font-light">
              Leadership & Administration
            </h2>

            <div className="space-y-5 text-slate-300">
              <p>• Dean, Student Affairs Division</p>
              <p>• Head, Department of Soil Science</p>
              <p>• Chairman, Anti-Corruption & Transparency Unit</p>
              <p>• Chairman, University Farm Reactivation Committee</p>
              <p>• Member, University Welfare Committee</p>
              <p>• Member, University Revenue Committee</p>
            </div>
          </motion.div>

          {/* MEMBERSHIP */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="border border-white/10 bg-white/[0.04] p-12"
          >
            <div className="mb-6 text-[#D4A63F]">
              <GraduationCap size={40} />
            </div>

            <h2 className="mb-8 text-4xl font-light">
              Professional Memberships
            </h2>

            <div className="space-y-5 text-slate-300">
              <p>• International Union of Soil Science (IUSS)</p>
              <p>• Soil Science Society of Nigeria (SSSN)</p>
              <p>• National Institute of Soil Science (NISS)</p>
              <p>• Agricultural Society of Nigeria</p>
              <p>
                • Contributor to National & International Soil Science
                Development
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* PHILOSOPHY */}
      {/* ====================================================== */}
      <section className="px-8 pb-32 pt-32 md:px-20 bg-[#FCFCFC]">
        <div className="flex flex-col items-center gap-16 bg-[#F7F3E8] p-12 md:flex-row md:p-18">
          {/* LEFT */}
          <div className="md:w-1/2">
            <div className="mb-8 h-1 w-16 rounded-full bg-[#D4A63F]" />

            <h2 className="text-3xl font-light leading-snug md:text-3xl text-justify">
              "Agricultural research must create practical solutions
              that improve soil health, increase food production, and
              positively impact farming communities."
            </h2>
          </div>

          {/* RIGHT */}
          <div className="space-y-6 text-lg leading-relaxed text-slate-600 md:w-1/2 text-justify">
            <p>
              Through teaching, field research, and community
              engagement, I encourage future agricultural scientists to
              think beyond theory and focus on practical solutions that
              improve crop yield, soil sustainability, and farmer
              livelihoods.
            </p>

            <p>
              My commitment is to promote sustainable and
              climate-resilient agricultural systems where modern soil
              management practices remain accessible, economically
              viable, and environmentally responsible for both
              smallholder and commercial farming systems.
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <div className="flex items-center gap-2 rounded-full border border-[#D4A63F]/10 bg-white shadow-sm px-4 py-2 text-xs font-bold uppercase tracking-widest">
                <Users
                  size={14}
                  className="text-[#D4A63F]"
                />
                Mentorship
              </div>

              <div className="flex items-center gap-2 rounded-full border border-[#D4A63F]/10 bg-white shadow-sm px-4 py-2 text-xs font-bold uppercase tracking-widest">
                <Zap size={14} className="text-[#D4A63F]" />
                Innovation
              </div>

              <div className="flex items-center gap-2 rounded-full border border-[#D4A63F]/10 bg-white shadow-sm px-4 py-2 text-xs font-bold uppercase tracking-widest">
                <Sprout
                  size={14}
                  className="text-[#D4A63F]"
                />
                Sustainability
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* CONTACT */}
      {/* ====================================================== */}
      <section className="border-t border-slate-200/70 bg-[#FCFCFC] px-8 py-24 text-center md:px-20">
        <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-slate-400">
          Research Collaboration & Partnership
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-slate-500">
          Open to collaboration in sustainable agriculture, soil
          fertility management, food security initiatives, agricultural
          development projects, and research partnerships.
        </p>

        <a
          href="mailto:amuhammadsaddiq@mau.edu.ng"
          className="mt-10 block text-3xl font-light transition-colors hover:text-[#D4A63F] md:text-5xl"
        >
          amuhammadsaddiq@mau.edu.ng
        </a>
      </section>
    </div>
  );
};

export default page;