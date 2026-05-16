"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Camera,
  Play,
  ChevronDown,
  ArrowUpRight,
  Globe,
  Sprout,
  Users,
  Landmark,
  Mic,
  MapPin,
  GraduationCap,
  Leaf,
} from "lucide-react";

const galleryImages = [
  {
    title: "Agricultural Field Assessment",
    category: "Field Research",
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80",
  },

  {
    title: "Soil Fertility Survey Activities",
    category: "Soil Science",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80",
  },

  {
    title: "Conference & Academic Engagement",
    category: "Conference",
    image:
      "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?auto=format&fit=crop&q=80",
  },

  {
    title: "Climate-Smart Farming Systems",
    category: "Sustainability",
    image:
      "https://images.unsplash.com/photo-1492496913980-501348b61469?auto=format&fit=crop&q=80",
  },

  {
    title: "Agricultural Land Survey",
    category: "Field Project",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80",
  },

  {
    title: "Research & Development Activities",
    category: "Academic Research",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80",
  },
];

const videos = [
  {
    title: "Sustainable Soil Fertility Management & Food Security",
    category: "Keynote Presentation",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?auto=format&fit=crop&q=80",
  },

  {
    title: "Climate-Smart Agriculture for Sustainable Crop Production",
    category: "Research Seminar",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80",
  },

  {
    title: "Agricultural Development & Soil Sustainability in Africa",
    category: "Public Lecture",
    year: "2022",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80",
  },
];

const highlights = [
  {
    icon: <Globe size={24} />,
    title: "Food Security Advocacy",
  },

  {
    icon: <Sprout size={24} />,
    title: "Field-Based Agricultural Research",
  },

  {
    icon: <Users size={24} />,
    title: "Farmer & Community Engagement",
  },

  {
    icon: <Landmark size={24} />,
    title: "Institutional Collaboration",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: (i = 1) => ({
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const page = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FCFCFC] text-slate-900">
      {/* ====================================================== */}
      {/* HERO */}
      {/* ====================================================== */}
      <section className="relative flex h-[85vh] items-center justify-center overflow-hidden bg-black">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80"
          alt="Agricultural Activities"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#FCFCFC]" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center md:px-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.4em] text-[#C99B3B] md:text-xs">
              Conferences • Field Activities • Research Engagements
            </span>

            <h1 className="mt-8 text-5xl font-semibold leading-tight text-white md:text-6xl">
              Media & Field Activities
            </h1>

            <p className="mx-auto mt-8 max-w-4xl text-base leading-relaxed text-slate-300 md:text-lg">
              Documenting agricultural fieldwork, research activities, academic
              conferences, sustainability initiatives, institutional engagement,
              and practical contributions to food security and sustainable
              agriculture.
            </p>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              }}
              className="mt-16 flex justify-center"
            >
              <div className="flex h-14 w-14 items-center justify-center border border-white/10 bg-white/5 backdrop-blur-md">
                <ChevronDown className="text-white" size={20} />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* INTRO */}
      {/* ====================================================== */}
      <section className="relative z-20 -mt-16 px-6 md:px-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border border-slate-200 bg-white p-8 md:p-16"
        >
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
            <div className="order-first flex h-24 w-24 shrink-0 items-center justify-center border border-[#C99B3B]/20 bg-[#C99B3B]/5 md:order-last">
              <Camera className="text-[#C99B3B]" size={34} />
            </div>

            <div className="max-w-4xl">
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C99B3B]">
                Research, Outreach & Development
              </span>

              <h2 className="mt-6 text-3xl font-light leading-tight md:text-5xl">
                Visual Documentation of Agricultural Research & Sustainability
                Impact
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-slate-600">
                A curated collection of field activities, conference
                participation, agricultural development initiatives,
                institutional collaborations, public lectures, and
                sustainability-focused engagements showcasing practical
                contributions to soil science, food security, and agricultural
                transformation.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ====================================================== */}
      {/* HIGHLIGHTS */}
      {/* ====================================================== */}
      <section className="px-6 py-28 md:px-20">
        <div className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="group cursor-pointer bg-white p-10 text-center transition-all duration-300"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center border border-[#C99B3B]/20 bg-[#C99B3B]/5 text-[#C99B3B] transition-all duration-300 group-hover:bg-[#C99B3B] group-hover:text-white">
                {item.icon}
              </div>

              <h3 className="text-lg font-medium leading-snug text-slate-800">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ====================================================== */}
      {/* FEATURED */}
      {/* ====================================================== */}
      <section className="px-6 pb-32 md:px-20">
        <div className="overflow-hidden border border-slate-200 bg-slate-950">
          <div className="grid md:grid-cols-2">
            <div className="relative min-h-[500px] overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8 }}
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80"
                alt="Featured Field Activity"
                className="absolute inset-0 h-full w-full object-cover opacity-70"
              />

              <div className="absolute inset-0 bg-black/40" />

              <div className="absolute bottom-10 left-10 right-10">
                <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-md">
                  <MapPin size={14} />
                  Agricultural Field Research
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center p-10 text-white md:p-20">
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C99B3B]">
                Featured Activity
              </span>

              <h2 className="mt-6 text-3xl font-light leading-tight md:text-4xl">
                Advancing Sustainable Agricultural Solutions Through Field-Based
                Research
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-slate-400">
                Prof. A.M. Saddiq’s field engagements combine scientific
                research with practical agricultural implementation, focusing on
                soil fertility management, climate-smart agriculture, food
                security, irrigation systems, and sustainable farming practices.
              </p>

              <div className="mt-10 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center border border-[#C99B3B]/20 bg-[#C99B3B]/5 text-[#C99B3B]">
                  <Leaf size={22} />
                </div>

                <div>
                  <h4 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-500">
                    Focus Area
                  </h4>

                  <p className="mt-2 text-lg">
                    Sustainable Agriculture & Food Security
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* GALLERY */}
      {/* ====================================================== */}
      <section className="px-6 pb-32 md:px-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C99B3B]">
            Gallery
          </span>

          <h2 className="mt-5 text-3xl font-light md:text-5xl">
            Conferences, Research & Field Activities
          </h2>
        </motion.div>

        <div className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-2 xl:grid-cols-3">
          {galleryImages.map((item, i) => (
            <motion.article
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="group cursor-pointer overflow-hidden bg-white"
            >
              <div className="relative h-80 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.8 }}
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-black/20 transition-all duration-500 group-hover:bg-black/10" />
              </div>

              <div className="p-8">
                <span className="border border-[#C99B3B]/20 bg-[#C99B3B]/5 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C99B3B]">
                  {item.category}
                </span>

                <h3 className="mt-5 text-xl font-light leading-snug text-slate-800 transition-colors duration-300 group-hover:text-[#C99B3B] md:text-2xl">
                  {item.title}
                </h3>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ====================================================== */}
      {/* VIDEOS */}
      {/* ====================================================== */}
      <section className="bg-slate-950 px-6 py-32 text-white md:px-20">
        <div className="mb-20 text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C99B3B]">
            Academic Presentations
          </span>

          <h2 className="mt-5 text-3xl font-light md:text-5xl">
            Video Lectures & Conference Sessions
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-3">
          {videos.map((video, i) => (
            <motion.article
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="group overflow-hidden bg-slate-950"
            >
              <div className="relative h-72 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.8 }}
                  src={video.image}
                  alt={video.title}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-black/40" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.96 }}
                    className="flex h-20 w-20 items-center justify-center border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:bg-[#C99B3B]"
                  >
                    <Play
                      className="ml-1 text-white"
                      size={26}
                      fill="white"
                    />
                  </motion.button>
                </div>
              </div>

              <div className="p-8">
                <div className="mb-5 flex items-center gap-3">
                  <span className="font-mono text-sm font-semibold text-[#C99B3B]">
                    {video.year}
                  </span>

                  <span className="h-1 w-1 bg-slate-500"></span>

                  <span className="border border-[#C99B3B]/20 bg-[#C99B3B]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C99B3B]">
                    {video.category}
                  </span>
                </div>

                <h3 className="text-2xl font-light leading-snug transition-colors duration-300 group-hover:text-[#C99B3B]">
                  {video.title}
                </h3>

                <button className="mt-8 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C99B3B]">
                  Watch Presentation
                  <ArrowUpRight size={15} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ====================================================== */}
      {/* PHILOSOPHY */}
      {/* ====================================================== */}
      <section className="px-6 py-32 md:px-20">
        <div className="border border-[#C99B3B]/10 bg-[#fcf7ec] p-10 md:p-24">
          <div className="grid gap-20 md:grid-cols-2">
            <div>
              <div className="mb-8 flex h-16 w-16 items-center justify-center border border-[#C99B3B]/20 bg-[#C99B3B]/5 text-[#C99B3B]">
                <GraduationCap size={28} />
              </div>

              <h2 className="text-3xl font-light leading-tight text-black md:text-4xl">
                “Agricultural research becomes more impactful when knowledge is
                shared through engagement, collaboration, and practical field
                application.”
              </h2>
            </div>

            <div className="space-y-8 text-lg leading-relaxed text-slate-600">
              <p>
                Through conferences, workshops, institutional activities, and
                field-based agricultural engagements, Prof. A.M. Saddiq
                continues to promote practical approaches to soil
                sustainability, food security, agricultural innovation, and
                environmental resilience.
              </p>

              <p>
                His work emphasizes the importance of connecting scientific
                knowledge with community impact, sustainable farming systems,
                and evidence-based agricultural development strategies.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {[
                  "Food Security",
                  "Research Outreach",
                  "Sustainability",
                  "Agricultural Innovation",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -2 }}
                    className="border border-slate-200 bg-white px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.25em]"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* CTA */}
      {/* ====================================================== */}
      <section className="px-6 pb-32 md:px-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border border-white/10 bg-slate-950 p-10 text-center text-white md:p-24"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            }}
          >
            <Mic className="mx-auto mb-8 text-[#C99B3B]" size={40} />
          </motion.div>

          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C99B3B]">
            Conferences & Institutional Engagements
          </span>

          <h2 className="mx-auto mt-6 max-w-5xl text-3xl font-light leading-tight md:text-5xl">
            Available for Academic Conferences, Agricultural Dialogue &
            Sustainability Initiatives
          </h2>

          <p className="mx-auto mt-10 max-w-4xl text-lg leading-relaxed text-slate-400">
            Open to keynote presentations, institutional seminars, agricultural
            development forums, sustainability programs, food security dialogue,
            and collaborative research engagements.
          </p>

          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="mt-12 inline-flex items-center gap-3 bg-[#C99B3B] px-8 py-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-white transition-all duration-300 hover:bg-[#b8892f]"
          >
            Invite for Speaking Engagement
            <ArrowUpRight size={15} />
          </motion.button>
        </motion.div>
      </section>
    </main>
  );
};

export default page;