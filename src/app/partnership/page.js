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
      {/* ====================================================== */}
      {/* HERO SECTION */}
      {/* ====================================================== */}
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

            <h1 className="mt-6 text-5xl font-bold text-white md:text-5xl">
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
                className="rounded-full border border-white/20 p-4 backdrop-blur-sm"
              >
                <ChevronDown className="text-white" size={24} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* INTRO SECTION */}
      {/* ====================================================== */}
      <section className="relative z-20 -mt-12 px-8 md:px-20">
        <div className="border border-slate-100 bg-white p-10 md:p-16">
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
            <div className="order-first flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-[#C99B3B]/10 md:order-last">
              <Handshake className="text-[#C99B3B]" size={42} />
            </div>
            <div className="max-w-4xl">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C99B3B]">
                International Agricultural Engagement
              </span>

              <h2 className="mt-5 text-4xl font-light leading-tight md:text-6xl text-black">
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

      {/* ====================================================== */}
      {/* PARTNERSHIP STATS */}
      {/* ====================================================== */}
      <section className="px-8 py-24 md:px-20">
        <div className="grid gap-6 md:grid-cols-4">
          {[
            {
              value: "30+",
              label: "Years Professional Experience",
            },

            {
              value: "Multiple",
              label: "Government Collaborations",
            },

            {
              value: "National & International",
              label: "Development Engagements",
            },

            {
              value: "Research & Field-Based",
              label: "Agricultural Consultancy",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-slate-100 bg-white p-8 text-center"
            >
              <h3 className="font-bold text-[#C99B3B]">
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
      {/* CONSULTANCY AREAS */}
      {/* ====================================================== */}
      <section className="bg-[#f8f9fa] px-8 py-32 md:px-20">
        <div className="mb-20 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C99B3B]">
            Consultancy Expertise
          </span>

          <h2 className="mt-4 text-4xl font-light md:text-6xl text-black">
            Areas of Professional Collaboration
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {partnershipAreas.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 shadow-sm transition-all hover:shadow-sm"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C99B3B]/10 text-[#C99B3B]">
                {item.icon}
              </div>

              <h3 className="text-3xl font-light text-black">{item.title}</h3>

              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                {item.description}
               </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ====================================================== */}
      {/* ORGANIZATIONS */}
      {/* ====================================================== */}
      {/* ====================================================== */}
      {/* PARTNERS LOGOS */}
      {/* ====================================================== */}
      <section className="px-8 py-32 md:px-20 bg-white">
        <div className="text-center mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C99B3B]">
            Strategic Collaborations
          </span>

          <h2 className="mt-4 text-4xl md:text-6xl font-light text-black">
            Institutions & Development Partners
          </h2>

          <p className="max-w-3xl mx-auto mt-8 text-lg text-slate-500 leading-relaxed">
            Collaborative engagements with government institutions,
            international development organizations, agricultural agencies, and
            sustainability-focused programs supporting food security and
            agricultural transformation.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {organizations.map((org, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -8 }}
              className="group bg-[#f8f9fa] border border-slate-100 rounded-3xl p-10 flex flex-col items-center justify-center text-center hover:border-[#C99B3B]/20 transition-all"
            >
              <div className="h-20 flex items-center justify-center">
                <img
                  src={org.logo}
                  alt={org.name}
                  className="h-16 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>

              <h3 className="mt-6 text-sm font-bold uppercase tracking-widest text-slate-500">
                {org.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ====================================================== */}
      {/* SERVICES SECTION */}
      {/* ====================================================== */}
      <section className="bg-slate-950 px-8 py-32 text-white md:px-20">
        <div className="mb-20 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C99B3B]">
            Professional Services
          </span>

          <h2 className="mt-4 text-4xl font-light md:text-6xl">
            Consultancy & Advisory Services
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {consultancyServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/10"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 text-[#C99B3B]">
                  <ShieldCheck size={18} />
                </div>

                <p className="leading-relaxed text-slate-300">{service}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ====================================================== */}
      {/* DEVELOPMENT PHILOSOPHY */}
      {/* ====================================================== */}
      <section className="px-8 py-32 md:px-20">
        <div className=" bg-[#fcf7ec] p-14 md:p-24">
          <div className="grid gap-16 md:grid-cols-2">
            {/* LEFT */}
            <div>
              <div className="mb-8 h-1 w-16 rounded-full bg-[#C99B3B]" />

              <h2 className="text-4xl font-light leading-tight md:text-4xl text-black">
                “Partnerships become impactful when scientific research creates
                sustainable agricultural solutions that directly benefit
                communities and food systems.”
              </h2>
            </div>

            {/* RIGHT */}
            <div className="space-y-4 text-lg leading-relaxed text-slate-600">
              <p>
                Prof. A.M. Saddiq believes that effective agricultural
                development requires collaboration between research
                institutions, policymakers, development agencies, agricultural
                industries, and farming communities.
              </p>

              <p>
                His consultancy approach combines scientific expertise, field
                experience, environmental sustainability, and practical
                implementation strategies to support long-term agricultural
                transformation and food security initiatives.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                {[
                  "Food Security",
                  "Sustainability",
                  "Agricultural Innovation",
                  "Climate Resilience",
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
      {/* CONTACT CTA */}
      {/* ====================================================== */}
      <section className="border-t border-slate-100 px-8 py-28 md:px-20">
        <div className="mx-auto max-w-5xl text-center">
          <Mail className="mx-auto mb-8 text-[#C99B3B]" size={42} />

          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C99B3B]">
            Partnership Opportunities
          </span>

          <h2 className="mt-6 text-4xl font-light leading-tight md:text-6xl text-black">
            Open to Research, Consultancy & Agricultural Development
            Partnerships
          </h2>

          <p className="mx-auto mt-10 max-w-4xl text-lg leading-relaxed text-slate-500">
            Available for collaborative agricultural projects, sustainability
            initiatives, consultancy engagements, institutional partnerships,
            and food security programs focused on practical agricultural
            transformation.
          </p>

          <a
            href="mailto:amuhammadsaddiq@mau.edu.ng"
            className="mt-12 inline-flex items-center gap-3 rounded-full bg-slate-950 px-8 py-5 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-[#C99B3B]"
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
