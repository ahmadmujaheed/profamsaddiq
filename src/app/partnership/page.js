"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Handshake,
  Building2,
  Globe,
  Landmark,
  Sprout,
  ChevronDown,
  ArrowUpRight,
  Briefcase,
  Tractor,
  Leaf,
  Users,
  ShieldCheck,
  Microscope,
  Mail,
} from "lucide-react";

const partnershipAreas = [
  {
    title: "Soil Fertility & Land Assessment",
    description:
      "Professional consultancy in soil fertility evaluation, nutrient management systems, land suitability assessment, and sustainable soil productivity strategies.",
    icon: <Sprout size={28} />,
  },
  {
    title: "Agricultural Development Projects",
    description:
      "Technical collaboration on food security programs, agricultural sustainability initiatives, irrigation systems, and rural agricultural development projects.",
    icon: <Tractor size={28} />,
  },
  {
    title: "Climate-Smart Agriculture",
    description:
      "Research and advisory services focused on climate resilience, sustainable farming systems, desertification control, and environmentally responsible agriculture.",
    icon: <Leaf size={28} />,
  },
  {
    title: "Research & Institutional Collaboration",
    description:
      "Partnership opportunities for universities, research institutes, international organizations, and policy-oriented agricultural development initiatives.",
    icon: <Microscope size={28} />,
  },
];

const organizations = [
  {
    name: "World Bank",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8c/World_Bank_Group_logo.svg",
  },
  {
    name: "UNDP",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/UNDP_logo.svg",
  },
  {
    name: "Federal Ministry of Agriculture",
    logo: "https://upload.wikimedia.org/wikipedia/en/5/55/Seal_of_the_Federal_Ministry_of_Agriculture_and_Rural_Development.png",
  },
  {
    name: "NNPC",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/36/NNPC_logo.svg/1200px-NNPC_logo.svg.png",
  },
  {
    name: "Adamawa State Government",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/37/Flag_of_Nigeria.svg",
  },
  {
    name: "Savanna Sugar Company",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/65/Sugar_icon.png",
  },
  {
    name: "Kenana Engineering",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg",
  },
  {
    name: "Agricultural Development Programmes",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
];

const consultancyServices = [
  "Soil Survey & Land Evaluation",
  "Soil Fertility Assessment",
  "Agricultural Sustainability Consulting",
  "Food Security Strategy Support",
  "Fertilizer Management Systems",
  "Environmental Impact Assessment",
  "Irrigation & Water Management",
  "Climate-Smart Farming Advisory",
  "Agricultural Policy Support",
  "Field Research & Agricultural Surveys",
];

const page = () => {
  return (
    <div className="min-h-screen bg-[#FCFCFC] overflow-hidden">
      {/* HERO */}
      <section className="relative flex h-[70vh] items-center justify-center overflow-hidden bg-slate-950">
        <img
          src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80"
          alt="Agricultural Collaboration"
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
              Consultancy • Collaboration • Agricultural Development
            </span>

            <h1 className="mt-6 text-4xl font-bold text-white md:text-4xl">
              Partnerships & Consultancy
            </h1>

            <p className="mx-auto mt-8 max-w-4xl text-lg leading-relaxed text-slate-300 md:text-xl">
              Building collaborative agricultural solutions through research,
              consultancy, field expertise, and sustainable development
              initiatives focused on food security, soil health, and
              agricultural transformation.
            </p>

            <div className="mt-12 flex justify-center">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="border border-white/20 p-4 backdrop-blur-sm"
              >
                <ChevronDown className="text-white" size={24} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="relative z-20 -mt-12 px-8 md:px-20">
        <div className="border border-slate-100 bg-white p-10 md:p-16">
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
            <div className="order-first flex h-28 w-28 shrink-0 items-center justify-center bg-[#C99B3B]/10 md:order-last">
              <Handshake className="text-[#C99B3B]" size={42} />
            </div>

            <div className="max-w-4xl">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C99B3B]">
                International Agricultural Engagement
              </span>

              <h2 className="mt-5 text-4xl font-light leading-tight md:text-4xl text-black">
                Advancing Sustainable Agricultural Systems Through Strategic
                Collaboration
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-slate-500">
                Prof. A.M. Saddiq collaborates with government institutions,
                development organizations, agricultural agencies, research
                institutions, and sustainability programs to support practical
                agricultural innovation, soil management systems, climate
                resilience, and food security initiatives across Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-8 py-24 md:px-20">
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { value: "30+", label: "Years Professional Experience" },
            { value: "Multiple", label: "Government Collaborations" },
            { value: "National & International", label: "Development Engagements" },
            { value: "Research & Field-Based", label: "Agricultural Consultancy" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-slate-100 bg-white p-8 text-center"
            >
              <h3 className="font-bold text-[#C99B3B]">{item.value}</h3>
              <p className="mt-3 text-xs uppercase tracking-widest text-slate-400">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONSULTANCY AREAS */}
      <section className="bg-[#f8f9fa] px-8 py-32 md:px-20">
        <div className="mb-20 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C99B3B]">
            Consultancy Expertise
          </span>

          <h2 className="mt-4 text-4xl font-light md:text-4xl text-black">
            Areas of Professional Collaboration
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {partnershipAreas.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center bg-[#C99B3B]/10 text-[#C99B3B]">
                {item.icon}
              </div>

              <h3 className="text-2xl font-light text-black">{item.title}</h3>

              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ORGANIZATIONS */}
      <section className="px-8 py-32 md:px-20 bg-white">
        <div className="text-center mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C99B3B]">
            Strategic Collaborations
          </span>

          <h2 className="mt-4 text-4xl md:text-4xl font-light text-black">
            Institutions & Development Partners
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {organizations.map((org, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-[#f8f9fa] border border-slate-100 p-10 text-center"
            >
              <img
                src={org.logo}
                alt={org.name}
                className="h-16 object-contain grayscale"
              />

              <h3 className="mt-6 text-sm font-bold uppercase tracking-widest text-slate-500">
                {org.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-slate-950 px-8 py-32 text-white md:px-20">
        <div className="mb-20 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C99B3B]">
            Professional Services
          </span>

          <h2 className="mt-4 text-4xl font-light md:text-4xl">
            Consultancy & Advisory Services
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {consultancyServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-start gap-4">
                <ShieldCheck size={18} className="text-[#C99B3B]" />
                <p className="text-slate-300">{service}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-100 px-8 py-28 md:px-20">
        <div className="mx-auto max-w-5xl text-center">
          <Mail className="mx-auto mb-8 text-[#C99B3B]" size={42} />

          <h2 className="mt-6 text-4xl font-light text-black md:text-4xl">
            Open to Research, Consultancy & Agricultural Development
            Partnerships
          </h2>

          <a
            href="mailto:amuhammadsaddiq@mau.edu.ng"
            className="mt-12 inline-flex items-center gap-3 bg-slate-950 px-8 py-5 text-xs font-bold uppercase tracking-widest text-white"
          >
            Contact for Collaboration
            <ArrowUpRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default page;