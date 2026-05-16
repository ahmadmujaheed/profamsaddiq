"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Tractor,
  Globe,
  Sprout,
  Landmark,
  ChevronDown,
  ArrowUpRight,
  MapPin,
  Leaf,
  Building2,
  Users,
  Wheat,
} from "lucide-react";

const projects = [
  {
    year: "2022",
    title: "Soil Fertility Assessment of Selected Soils in Adamawa State",
    organization: "Federal Ministry of Agriculture & Rural Development",
    category: "Soil Fertility & Food Security",
    description:
      "Conducted extensive soil fertility evaluation and nutrient assessment to support sustainable agricultural productivity and evidence-based land management strategies in Adamawa State.",
    impact:
      "Supported agricultural planning and sustainable crop productivity initiatives.",
    icon: <Sprout size={28} />,
  },

  {
    year: "2019",
    title: "Land Validation for Proposed NNPC Cassava-Fuel Ethanol Project",
    organization: "Nigerian National Petroleum Corporation (NNPC)",
    category: "Land Resource Management",
    description:
      "Participated in land suitability validation and agricultural assessment for the proposed cassava-based biofuel ethanol project in Kebbi State.",
    impact:
      "Contributed to agricultural-industrial development and sustainable land resource utilization.",
    icon: <Landmark size={28} />,
  },

  {
    year: "2016",
    title: "Savanna Sugar Company Soil Survey Project",
    organization: "Savanna Sugar Company Extension, Numan",
    category: "Agricultural Land Survey",
    description:
      "Led soil survey activities and fertility evaluation for agricultural expansion and sustainable sugarcane production systems.",
    impact:
      "Enhanced land suitability assessment for large-scale agricultural production.",
    icon: <Wheat size={28} />,
  },

  {
    year: "2015",
    title: "Oguma Sugar Project, Kogi State",
    organization: "Kenana Engineering & Technical Services West Africa Ltd.",
    category: "Agricultural Development",
    description:
      "Participated in agricultural soil assessment and environmental evaluation for sugar production development initiatives.",
    impact:
      "Strengthened sustainable agricultural expansion planning and land utilization.",
    icon: <Leaf size={28} />,
  },

  {
    year: "2013 — 2014",
    title: "Zaria-Kala Kala Soil Survey Project",
    organization: "Kenana Engineering & Technical Services West Africa Ltd.",
    category: "Soil Survey & Classification",
    description:
      "Conducted detailed soil surveys and classification studies for agricultural suitability and environmental sustainability assessments.",
    impact:
      "Improved agricultural land planning and crop suitability analysis.",
    icon: <Globe size={28} />,
  },

  {
    year: "1990 — 2012",
    title: "Field Surveys for Governmental & Development Organizations",
    organization: "World Bank, LEEMP & UNDP",
    category: "Development & Rural Agriculture",
    description:
      "Participated in multiple agricultural field surveys, rural development assessments, and environmental studies across Nigeria.",
    impact:
      "Contributed to community-focused agricultural development and sustainability programs.",
    icon: <Building2 size={28} />,
  },

  {
    year: "2005",
    title: "Agricultural Consultancy Services",
    organization: "Adamawa State Government",
    category: "Agricultural Consultancy",
    description:
      "Provided expert consultation in soil fertility management, agricultural land utilization, and sustainable farming systems.",
    impact:
      "Supported agricultural policy implementation and rural development initiatives.",
    icon: <Users size={28} />,
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
      {/* HERO SECTION */}
      {/* ====================================================== */}
      <section className="relative flex h-[85vh] items-center justify-center overflow-hidden bg-black">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80"
          alt="Agricultural Field"
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
              Field Impact • Agricultural Development • Sustainability
            </span>

            <h1 className="mt-8 text-5xl font-semibold leading-tight text-white md:text-7xl">
              Projects & Field Impact
            </h1>

            <p className="mx-auto mt-8 max-w-4xl text-base leading-relaxed text-slate-300 md:text-xl">
              Practical agricultural initiatives, soil surveys, land resource
              assessments, and sustainability-focused projects contributing to
              food security, rural development, and agricultural transformation
              across Nigeria.
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
      {/* INTRO SECTION */}
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
              <Tractor className="text-[#C99B3B]" size={36} />
            </div>

            <div className="max-w-4xl">
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C99B3B]">
                Practical Agricultural Leadership
              </span>

              <h2 className="mt-6 text-4xl font-light leading-tight md:text-6xl">
                Bridging Research with Real-World Agricultural Application
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-slate-600">
                Prof. A.M. Saddiq’s field projects extend beyond academic
                research into practical agricultural development, land resource
                management, irrigation systems, food security initiatives, and
                sustainability programs involving government agencies,
                international development organizations, and agricultural
                industries.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ====================================================== */}
      {/* IMPACT STATS */}
      {/* ====================================================== */}
      <section className="px-6 py-24 md:px-20">
        <div className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-4">
          {[
            {
              value: "30+",
              label: "Years Field Experience",
            },

            {
              value: "7+",
              label: "Major Agricultural Projects",
            },

            {
              value: "Multiple",
              label: "Government Collaborations",
            },

            {
              value: "International",
              label: "Development Engagements",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="bg-white p-10 text-center transition-all duration-300"
            >
              <h3 className="text-4xl font-semibold text-[#C99B3B]">
                {item.value}
              </h3>

              <p className="mt-4 text-[11px] uppercase tracking-[0.25em] text-slate-500">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ====================================================== */}
      {/* PROJECTS */}
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
            Major Projects & Initiatives
          </span>

          <h2 className="mt-5 text-4xl font-light md:text-6xl">
            Agricultural Development Portfolio
          </h2>
        </motion.div>

        <div className="space-y-px overflow-hidden border border-slate-200 bg-slate-200">
          {projects.map((project, i) => (
            <motion.article
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -2 }}
              className="group bg-white p-8 transition-all duration-500 md:p-14"
            >
              <div className="flex flex-col gap-10 md:flex-row md:justify-between">
                {/* LEFT */}
                <div className="flex-1">
                  <div className="mb-6 flex flex-wrap items-center gap-4">
                    <span className="font-mono text-sm font-semibold text-[#C99B3B]">
                      {project.year}
                    </span>

                    <span className="h-1 w-1 bg-slate-300"></span>

                    <span className="border border-[#C99B3B]/20 bg-[#C99B3B]/5 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C99B3B]">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="max-w-4xl text-3xl font-light leading-tight text-slate-800 transition-colors duration-300 group-hover:text-[#C99B3B] md:text-4xl">
                    {project.title}
                  </h3>

                  <div className="mt-6 flex items-center gap-3 text-slate-500">
                    <Building2 size={17} className="text-[#C99B3B]" />

                    <span className="font-medium">
                      {project.organization}
                    </span>
                  </div>

                  <p className="mt-8 max-w-4xl text-lg leading-relaxed text-slate-600">
                    {project.description}
                  </p>

                  <div className="mt-10 border border-slate-200 bg-[#fafafa] p-6">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 text-[#C99B3B]">
                        <Leaf size={20} />
                      </div>

                      <div>
                        <h4 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-500">
                          Project Impact
                        </h4>

                        <p className="mt-3 leading-relaxed text-slate-600">
                          {project.impact}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="flex md:justify-end">
                  <motion.div
                    whileHover={{ rotate: 6, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="flex h-20 w-20 items-center justify-center border border-slate-200 bg-[#fafafa] text-[#C99B3B] transition-all duration-300 group-hover:border-[#C99B3B]/20 group-hover:bg-[#C99B3B] group-hover:text-white"
                  >
                    {project.icon}
                  </motion.div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ====================================================== */}
      {/* DEVELOPMENT SECTION */}
      {/* ====================================================== */}
      <section className="bg-slate-950 px-6 py-32 text-white md:px-20">
        <div className="grid gap-20 md:grid-cols-2">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C99B3B]">
              Development Focus
            </span>

            <h2 className="mt-6 text-4xl font-light leading-tight md:text-6xl">
              Sustainable Agriculture for Food Security & Rural Development
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8 text-lg leading-relaxed text-slate-400"
          >
            <p>
              Through field-based agricultural projects, soil assessments, and
              development-focused initiatives, Prof. A.M. Saddiq has contributed
              to sustainable farming systems that support agricultural
              productivity, environmental resilience, and rural economic
              development.
            </p>

            <p>
              His work integrates scientific research with practical
              implementation strategies for soil management, irrigation systems,
              fertilizer efficiency, and climate adaptation in both smallholder
              and commercial farming environments.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {[
                "Food Security",
                "Soil Sustainability",
                "Climate Resilience",
                "Rural Development",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -2 }}
                  className="border border-white/10 bg-white/5 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.25em]"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* COLLABORATION */}
      {/* ====================================================== */}
      <section className="px-6 py-28 md:px-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border border-[#C99B3B]/10 bg-[#fcf7ec] p-10 md:p-24"
        >
          <div className="mx-auto max-w-5xl text-center">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
            >
              <MapPin
                className="mx-auto mb-8 text-[#C99B3B]"
                size={40}
              />
            </motion.div>

            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C99B3B]">
              Collaboration & Partnerships
            </span>

            <h2 className="mt-6 text-4xl font-light leading-tight text-black md:text-6xl">
              Open to Agricultural Development Partnerships & Sustainability
              Initiatives
            </h2>

            <p className="mx-auto mt-10 max-w-4xl text-lg leading-relaxed text-slate-600">
              Prof. A.M. Saddiq welcomes collaboration with agricultural
              institutions, government agencies, development organizations,
              sustainability initiatives, research bodies, and food security
              programs focused on practical agricultural transformation and
              rural development.
            </p>

            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="mt-12 inline-flex items-center gap-3 bg-slate-950 px-8 py-5 text-xs font-semibold uppercase tracking-[0.25em] text-white transition-all duration-300 hover:bg-[#C99B3B]"
            >
              Collaborate on a Project
              <ArrowUpRight size={16} />
            </motion.button>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default page;