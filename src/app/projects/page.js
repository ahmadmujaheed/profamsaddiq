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
    organization:
      "Federal Ministry of Agriculture & Rural Development",
    category: "Soil Fertility & Food Security",
    description:
      "Conducted extensive soil fertility evaluation and nutrient assessment to support sustainable agricultural productivity and evidence-based land management strategies in Adamawa State.",
    impact:
      "Supported agricultural planning and sustainable crop productivity initiatives.",
    icon: <Sprout size={28} />,
  },

  {
    year: "2019",
    title:
      "Land Validation for Proposed NNPC Cassava-Fuel Ethanol Project",
    organization:
      "Nigerian National Petroleum Corporation (NNPC)",
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
    organization:
      "Kenana Engineering & Technical Services West Africa Ltd.",
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
    organization:
      "Kenana Engineering & Technical Services West Africa Ltd.",
    category: "Soil Survey & Classification",
    description:
      "Conducted detailed soil surveys and classification studies for agricultural suitability and environmental sustainability assessments.",
    impact:
      "Improved agricultural land planning and crop suitability analysis.",
    icon: <Globe size={28} />,
  },

  {
    year: "1990 — 2012",
    title:
      "Field Surveys for Governmental & Development Organizations",
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

const page = () => {
  return (
    <div className="min-h-screen bg-[#FCFCFC] overflow-hidden">
      {/* ====================================================== */}
      {/* HERO SECTION */}
      {/* ====================================================== */}
      <section className="relative flex h-[70vh] items-center justify-center overflow-hidden bg-slate-950">
        <img
          src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80"
          alt="Agricultural Field"
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
              Field Impact • Agricultural Development • Sustainability
            </span>

            <h1 className="mt-6 text-5xl font-light text-white md:text-8xl">
              Projects & Field Impact
            </h1>

            <p className="mx-auto mt-8 max-w-4xl text-lg leading-relaxed text-slate-300 md:text-xl">
              Practical agricultural initiatives, soil surveys, land
              resource assessments, and sustainability-focused projects
              contributing to food security, rural development, and
              agricultural transformation across Nigeria.
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
                Practical Agricultural Leadership
              </span>

              <h2 className="mt-5 text-4xl font-light leading-tight md:text-6xl">
                Bridging Research with Real-World Agricultural
                Application
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-slate-500">
                Prof. A.M. Saddiq’s field projects extend beyond
                academic research into practical agricultural
                development, land resource management, irrigation
                systems, food security initiatives, and sustainability
                programs involving government agencies, international
                development organizations, and agricultural industries.
              </p>
            </div>

            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[#C99B3B]/10">
              <Tractor
                className="text-[#C99B3B]"
                size={42}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* IMPACT STATS */}
      {/* ====================================================== */}
      <section className="px-8 py-24 md:px-20">
        <div className="grid gap-6 md:grid-cols-4">
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-sm"
            >
              <h3 className="text-4xl font-bold text-[#C99B3B]">
                {item.value}
              </h3>

              <p className="mt-3 text-xs uppercase tracking-widest text-slate-400">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ====================================================== */}
      {/* PROJECTS LIST */}
      {/* ====================================================== */}
      <section className="px-8 pb-32 md:px-20">
        <div className="mb-20 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C99B3B]">
            Major Projects & Initiatives
          </span>

          <h2 className="mt-4 text-4xl font-light md:text-6xl">
            Agricultural Development Portfolio
          </h2>
        </div>

        <div className="space-y-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-[36px] border border-slate-100 bg-white p-10 shadow-sm transition-all hover:border-[#C99B3B]/20 hover:shadow-xl md:p-14"
            >
              <div className="flex flex-col gap-10 md:flex-row md:justify-between">
                {/* LEFT */}
                <div className="flex-1">
                  {/* TOP */}
                  <div className="mb-6 flex flex-wrap items-center gap-4">
                    <span className="font-mono text-sm font-bold text-[#C99B3B]">
                      {project.year}
                    </span>

                    <span className="h-1 w-1 rounded-full bg-slate-300"></span>

                    <span className="rounded-full border border-[#C99B3B]/10 bg-[#C99B3B]/5 px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-[#C99B3B]">
                      {project.category}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-3xl font-light leading-tight transition-colors group-hover:text-[#C99B3B]">
                    {project.title}
                  </h3>

                  {/* ORG */}
                  <div className="mt-5 flex items-center gap-3 text-slate-500">
                    <Building2
                      size={18}
                      className="text-[#C99B3B]"
                    />

                    <span className="font-medium">
                      {project.organization}
                    </span>
                  </div>

                  {/* DESCRIPTION */}
                  <p className="mt-8 max-w-4xl text-lg leading-relaxed text-slate-600">
                    {project.description}
                  </p>

                  {/* IMPACT */}
                  <div className="mt-10 rounded-2xl border border-slate-100 bg-[#f8f9fa] p-6">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 text-[#C99B3B]">
                        <Leaf size={22} />
                      </div>

                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400">
                          Project Impact
                        </h4>

                        <p className="mt-3 text-slate-600">
                          {project.impact}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT ICON */}
                <div className="flex md:justify-end">
                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-slate-100 bg-[#f8f9fa] text-[#C99B3B] transition-all group-hover:bg-[#C99B3B] group-hover:text-white">
                    {project.icon}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ====================================================== */}
      {/* DEVELOPMENT SECTION */}
      {/* ====================================================== */}
      <section className="bg-slate-950 px-8 py-32 text-white md:px-20">
        <div className="grid gap-16 md:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C99B3B]">
              Development Focus
            </span>

            <h2 className="mt-6 text-4xl font-light leading-tight md:text-6xl">
              Sustainable Agriculture for Food Security & Rural
              Development
            </h2>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 text-lg leading-relaxed text-slate-400"
          >
            <p>
              Through field-based agricultural projects, soil
              assessments, and development-focused initiatives, Prof.
              A.M. Saddiq has contributed to sustainable farming
              systems that support agricultural productivity,
              environmental resilience, and rural economic
              development.
            </p>

            <p>
              His work integrates scientific research with practical
              implementation strategies for soil management,
              irrigation systems, fertilizer efficiency, and climate
              adaptation in both smallholder and commercial farming
              environments.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              {[
                "Food Security",
                "Soil Sustainability",
                "Climate Resilience",
                "Rural Development",
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
        </div>
      </section>

      {/* ====================================================== */}
      {/* COLLABORATION SECTION */}
      {/* ====================================================== */}
      <section className="px-8 py-28 md:px-20">
        <div className="rounded-[40px] bg-[#fcf7ec] p-14 md:p-24">
          <div className="mx-auto max-w-5xl text-center">
            <MapPin
              className="mx-auto mb-8 text-[#C99B3B]"
              size={42}
            />

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C99B3B]">
              Collaboration & Partnerships
            </span>

            <h2 className="mt-6 text-4xl font-light leading-tight md:text-6xl">
              Open to Agricultural Development Partnerships &
              Sustainability Initiatives
            </h2>

            <p className="mx-auto mt-10 max-w-4xl text-lg leading-relaxed text-slate-600">
              Prof. A.M. Saddiq welcomes collaboration with
              agricultural institutions, government agencies,
              development organizations, sustainability initiatives,
              research bodies, and food security programs focused on
              practical agricultural transformation and rural
              development.
            </p>

            <button className="mt-12 inline-flex items-center gap-3 rounded-full bg-slate-950 px-8 py-5 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-[#C99B3B]">
              Collaborate on a Project
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;