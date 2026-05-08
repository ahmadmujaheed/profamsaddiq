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
    title:
      "Sustainable Soil Fertility Management & Food Security",
    category: "Keynote Presentation",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?auto=format&fit=crop&q=80",
  },

  {
    title:
      "Climate-Smart Agriculture for Sustainable Crop Production",
    category: "Research Seminar",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80",
  },

  {
    title:
      "Agricultural Development & Soil Sustainability in Africa",
    category: "Public Lecture",
    year: "2022",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80",
  },
];

const highlights = [
  {
    icon: <Globe size={26} />,
    title: "Food Security Advocacy",
  },

  {
    icon: <Sprout size={26} />,
    title: "Field-Based Agricultural Research",
  },

  {
    icon: <Users size={26} />,
    title: "Farmer & Community Engagement",
  },

  {
    icon: <Landmark size={26} />,
    title: "Institutional Collaboration",
  },
];

const page = () => {
  return (
    <div className="min-h-screen bg-[#FCFCFC] overflow-hidden">
      {/* ====================================================== */}
      {/* HERO SECTION */}
      {/* ====================================================== */}
      <section className="relative flex h-[75vh] items-center justify-center overflow-hidden bg-slate-950">
        <img
          src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80"
          alt="Agricultural Activities"
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
              Conferences • Field Activities • Research Engagements
            </span>

            <h1 className="mt-6 text-5xl font-light text-white md:text-8xl">
              Media & Field Activities
            </h1>

            <p className="mx-auto mt-8 max-w-4xl text-lg leading-relaxed text-slate-300 md:text-xl">
              Documenting agricultural fieldwork, research activities,
              academic conferences, sustainability initiatives,
              institutional engagement, and practical contributions to
              food security and sustainable agriculture.
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
                Research, Outreach & Development
              </span>

              <h2 className="mt-5 text-4xl font-light leading-tight md:text-6xl">
                Visual Documentation of Agricultural Research &
                Sustainability Impact
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-slate-500">
                A curated collection of field activities, conference
                participation, agricultural development initiatives,
                institutional collaborations, public lectures, and
                sustainability-focused engagements showcasing practical
                contributions to soil science, food security, and
                agricultural transformation.
              </p>
            </div>

            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[#C99B3B]/10">
              <Camera
                className="text-[#C99B3B]"
                size={42}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* HIGHLIGHTS */}
      {/* ====================================================== */}
      <section className="px-8 py-28 md:px-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -8 }}
              className="rounded-[32px] border border-slate-100 bg-white p-8 text-center shadow-sm transition-all hover:border-[#C99B3B]/20 hover:shadow-xl"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C99B3B]/10 text-[#C99B3B]">
                {item.icon}
              </div>

              <h3 className="text-xl font-medium leading-snug">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ====================================================== */}
      {/* FEATURED SECTION */}
      {/* ====================================================== */}
      <section className="px-8 pb-32 md:px-20">
        <div className="overflow-hidden rounded-[40px] bg-slate-950">
          <div className="grid md:grid-cols-2">
            {/* IMAGE */}
            <div className="relative min-h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80"
                alt="Featured Field Activity"
                className="absolute inset-0 h-full w-full object-cover opacity-70"
              />

              <div className="absolute inset-0 bg-black/30" />

              <div className="absolute bottom-10 left-10 right-10">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md">
                  <MapPin size={14} />
                  Agricultural Field Research
                </div>
              </div>
            </div>

            {/* CONTENT */}
            <div className="flex flex-col justify-center p-14 text-white md:p-20">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C99B3B]">
                Featured Activity
              </span>

              <h2 className="mt-6 text-4xl font-light leading-tight">
                Advancing Sustainable Agricultural Solutions Through
                Field-Based Research
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-slate-400">
                Prof. A.M. Saddiq’s field engagements combine
                scientific research with practical agricultural
                implementation, focusing on soil fertility management,
                climate-smart agriculture, food security, irrigation
                systems, and sustainable farming practices.
              </p>

              <div className="mt-10 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C99B3B]/10 text-[#C99B3B]">
                  <Leaf size={24} />
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400">
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
      {/* IMAGE GALLERY */}
      {/* ====================================================== */}
      <section className="px-8 pb-32 md:px-20">
        <div className="mb-20 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C99B3B]">
            Gallery
          </span>

          <h2 className="mt-4 text-4xl font-light md:text-6xl">
            Conferences, Research & Field Activities
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {galleryImages.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-[32px] border border-slate-100 bg-white shadow-sm transition-all hover:border-[#C99B3B]/20 hover:shadow-2xl"
            >
              {/* IMAGE */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/20 transition-all group-hover:bg-black/10" />
              </div>

              {/* CONTENT */}
              <div className="p-8">
                <span className="rounded-full border border-[#C99B3B]/10 bg-[#C99B3B]/5 px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-[#C99B3B]">
                  {item.category}
                </span>

                <h3 className="mt-5 text-2xl font-light leading-snug transition-colors group-hover:text-[#C99B3B]">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ====================================================== */}
      {/* VIDEOS SECTION */}
      {/* ====================================================== */}
      <section className="bg-slate-950 px-8 py-32 text-white md:px-20">
        <div className="mb-20 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C99B3B]">
            Academic Presentations
          </span>

          <h2 className="mt-4 text-4xl font-light md:text-6xl">
            Video Lectures & Conference Sessions
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {videos.map((video, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10"
            >
              {/* IMAGE */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={video.image}
                  alt={video.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/40" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-md transition-all hover:scale-110 hover:bg-[#C99B3B]">
                    <Play
                      className="ml-1 text-white"
                      size={28}
                      fill="white"
                    />
                  </button>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-8">
                <div className="mb-5 flex items-center gap-3">
                  <span className="font-mono text-sm font-bold text-[#C99B3B]">
                    {video.year}
                  </span>

                  <span className="h-1 w-1 rounded-full bg-slate-500"></span>

                  <span className="rounded-full border border-[#C99B3B]/20 bg-[#C99B3B]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#C99B3B]">
                    {video.category}
                  </span>
                </div>

                <h3 className="text-2xl font-light leading-snug transition-colors group-hover:text-[#C99B3B]">
                  {video.title}
                </h3>

                <button className="mt-8 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#C99B3B]">
                  Watch Presentation
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ====================================================== */}
      {/* PHILOSOPHY SECTION */}
      {/* ====================================================== */}
      <section className="px-8 py-32 md:px-20">
        <div className="rounded-[40px] bg-[#fcf7ec] p-14 md:p-24">
          <div className="grid gap-20 md:grid-cols-2">
            {/* LEFT */}
            <div>
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C99B3B]/10 text-[#C99B3B]">
                <GraduationCap size={30} />
              </div>

              <h2 className="text-4xl font-light leading-tight md:text-6xl">
                “Agricultural research becomes more impactful when
                knowledge is shared through engagement, collaboration,
                and practical field application.”
              </h2>
            </div>

            {/* RIGHT */}
            <div className="space-y-8 text-lg leading-relaxed text-slate-600">
              <p>
                Through conferences, workshops, institutional
                activities, and field-based agricultural engagements,
                Prof. A.M. Saddiq continues to promote practical
                approaches to soil sustainability, food security,
                agricultural innovation, and environmental resilience.
              </p>

              <p>
                His work emphasizes the importance of connecting
                scientific knowledge with community impact, sustainable
                farming systems, and evidence-based agricultural
                development strategies.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                {[
                  "Food Security",
                  "Research Outreach",
                  "Sustainability",
                  "Agricultural Innovation",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-full border border-slate-200 bg-white px-5 py-3 text-xs font-bold uppercase tracking-widest"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* FINAL CTA */}
      {/* ====================================================== */}
      <section className="px-8 pb-32 md:px-20">
        <div className="rounded-[40px] bg-slate-950 p-14 text-center text-white md:p-24">
          <Mic
            className="mx-auto mb-8 text-[#C99B3B]"
            size={42}
          />

          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C99B3B]">
            Conferences & Institutional Engagements
          </span>

          <h2 className="mx-auto mt-6 max-w-5xl text-4xl font-light leading-tight md:text-6xl">
            Available for Academic Conferences, Agricultural Dialogue &
            Sustainability Initiatives
          </h2>

          <p className="mx-auto mt-10 max-w-4xl text-lg leading-relaxed text-slate-400">
            Open to keynote presentations, institutional seminars,
            agricultural development forums, sustainability programs,
            food security dialogue, and collaborative research
            engagements.
          </p>

          <button className="mt-12 inline-flex items-center gap-3 rounded-full bg-[#C99B3B] px-8 py-5 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-[#b8892f]">
            Invite for Speaking Engagement
            <ArrowUpRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default page;