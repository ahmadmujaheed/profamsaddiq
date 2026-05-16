"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Search,
  Filter,
  FileText,
  ExternalLink,
  RefreshCcw,
  Sprout,
  Globe,
  Leaf,
  Microscope,
  ArrowRight,
  ArrowUpRight
} from "lucide-react";

// Animation configurations for a "premium" feel
const fadeIn = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.19, 1, 0.22, 1] }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

const publications = [
  {
    year: "2024",
    title: "Evaluation on Fertility Potentials of Some Soils in Gashaka Local Government of Taraba State, Nigeria",
    authors: "Musa S. A., Ibrahim A. Saddiq, A. M. and Modibbo A. M.",
    journal: "Savannah Journal of Science and Engineering Technology, 2(5):293-301",
    category: "Soil Fertility",
  },
  {
    year: "2022",
    title: "The Influence of Meteorological Conditions on the Growth of Pearl Millet in Jigawa State, Nigeria",
    authors: "Isa Magaji, Murabbi Aliyu Abel Adebayo, Abdullahi Saddiq, Abdulhamed Adamu",
    journal: "Agricultural & Meteorological Research",
    category: "Climate & Agriculture",
  },
  {
    year: "2022",
    title: "Fertility Capability Classification of Soils of Wukari, Taraba State, Nigeria",
    authors: "Waizah Yakub, A. M. Saddiq and A. Salem",
    journal: "FUW Journal of Agriculture and Life Sciences 1:163-178",
    category: "Soil Science",
  },
  {
    year: "2021",
    title: "Effects of Climate and Planting Date on Growth Parameters of Potato in Plateau State, Nigeria",
    authors: "Audu H. O., Adebayo A. A., Saddiq A. M., Emeje D. P. and Wache P. Z.",
    journal: "Global Journal of Geography and Environmental Sciences",
    category: "Climate & Agriculture",
  },
  {
    year: "2020",
    title: "Deforestation, Desert Encroachment, Climate Change and Agricultural Production in Sudano-Sahelian Nigeria",
    authors: "Azare I. M., Abdullahi M. S., Adebayo A. A., Dantata I. J. and Duala T.",
    journal: "Journal of Applied Science & Environmental Management",
    category: "Environmental Sustainability",
  },
  {
    year: "2019",
    title: "Evaluation and Classification of Soil Fertility Potentials of Gombi Area of Adamawa State",
    authors: "Johnson A., Saddiq A. M., Solomon R. I., Ibrahim A. and Waizah Y.",
    journal: "Nigerian Journal of Soil Science",
    category: "Soil Fertility",
  },
  {
    year: "2017",
    title: "Soil Fertility Management: A Tool for Sustainable Disease and Weed Control in Sub-Saharan Africa",
    authors: "A. M. Saddiq, A. Ibrahim, M. Y. Jada, A. M. Tahir and I. Umar",
    journal: "Recent Research in Science and Technology",
    category: "Sustainable Agriculture",
  },
];

const categories = [
  "All",
  "Soil Fertility",
  "Climate & Agriculture",
  "Soil Science",
  "Sustainable Agriculture",
  "Environmental Sustainability",
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPublications = publications.filter((pub) => {
    const matchesSearch =
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.authors.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      activeCategory === "All" || pub.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  const resetFilters = () => {
    setSearchTerm("");
    setActiveCategory("All");
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#C99B3B] selection:text-white">
      
      {}
      <section className="relative flex h-[60vh] w-full items-center justify-center overflow-hidden bg-slate-950">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1.5 }}
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80"
          alt="Agricultural Research background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-white" />

        <div className="relative z-10 px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-[#C99B3B]">
              Scientific Archive • Discovery
            </span>
            <h1 className="mt-6 text-5xl font-bold tracking-tight text-white md:text-8xl">
              Research
            </h1>
            <p className="mx-auto mt-8 max-w-xl text-sm font-medium uppercase tracking-widest text-slate-300">
              Identifying soil constraints through chemical analysis and field inquiry.
            </p>
          </motion.div>
        </div>
      </section>

      {}
      <section className="relative z-20 -mt-px px-8 md:px-20">
        <div className="grid border border-slate-200 bg-white md:grid-cols-4">
          {[
            { label: "Publications", value: "80+", icon: <FileText size={18} /> },
            { label: "Years in Field", value: "30+", icon: <Microscope size={18} /> },
            { label: "Citations", value: "1.2k+", icon: <Globe size={18} /> },
            { label: "Active Projects", value: "25+", icon: <Sprout size={18} /> },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center border-b border-slate-100 p-10 last:border-b-0 md:border-b-0 md:border-r"
            >
              <div className="mb-4 text-[#C99B3B]">{stat.icon}</div>
              <div className="text-3xl font-bold text-slate-950">{stat.value}</div>
              <div className="mt-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {}
      <div className="mx-auto max-w-7xl px-8 pt-32 md:px-20">
        <div className="mb-16 flex flex-col justify-between gap-8 border-l-4 border-[#C99B3B] pl-8 md:flex-row md:items-end">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[#C99B3B]">The Archive</h2>
            <h3 className="mt-4 text-4xl font-light text-slate-900 md:text-5xl">Directory of <span className="font-bold">Scholarly Works</span></h3>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-slate-500">
            A comprehensive list of peer-reviewed articles, technical reports, and 
            scientific studies focused on West African soil dynamics.
          </p>
        </div>

        {}
        <div className="flex flex-col gap-16 lg:flex-row lg:items-start">
          
          {/* Sidebar */}
          <aside className="space-y-12 lg:sticky lg:top-10 lg:w-1/4">
            <div className="space-y-6">
              <div className="group relative border border-slate-200 focus-within:border-slate-950">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-slate-950" size={16} />
                <input
                  type="text"
                  placeholder="SEARCH ARCHIVE..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white py-5 pl-12 pr-4 text-[10px] font-bold uppercase tracking-widest focus:outline-none"
                />
              </div>
              <button
                onClick={resetFilters}
                className="flex w-full items-center justify-center gap-3 border border-slate-950 bg-slate-950 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#C99B3B] hover:border-[#C99B3B]"
              >
                <RefreshCcw size={12} /> Reset Filters
              </button>
            </div>

            <div className="space-y-6">
              <h3 className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                <Filter size={12} /> Category Filter
              </h3>
              <div className="flex flex-col gap-px bg-slate-100 border border-slate-100">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 py-4 text-left text-[10px] font-bold uppercase tracking-widest transition-all ${
                      activeCategory === cat
                        ? "bg-[#C99B3B] text-white"
                        : "bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-950"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="border border-slate-100 p-8">
              <Leaf className="mb-6 text-[#C99B3B]" size={20} />
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em]">Scientific Impact</h4>
              <p className="mt-4 text-xs leading-relaxed text-slate-500">
                Access real-time citation tracking and H-index metrics via Google Scholar.
              </p>
              <a href="#" className="mt-8 group flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#C99B3B]">
                Scholar Profile <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </aside>

          {}
          <section className="lg:w-3/4">
            <AnimatePresence mode="popLayout">
              <div className="flex flex-col border-t border-slate-100">
                {filteredPublications.map((pub, i) => (
                  <motion.div
                    key={pub.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ delay: i * 0.05 }}
                    className="group border-b border-slate-100 py-12 transition-colors hover:bg-slate-50 px-4"
                  >
                    <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
                      <div className="flex-1 space-y-6">
                        <div className="flex items-center gap-5">
                          <span className="text-xs font-bold text-[#C99B3B]">
                            [{pub.year}]
                          </span>
                          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 bg-slate-100 px-3 py-1">
                            {pub.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold leading-tight text-slate-900 group-hover:text-[#C99B3B] transition-colors md:text-2xl lg:max-w-3xl">
                          {pub.title}
                        </h3>
                        <p className="text-sm font-medium tracking-wide text-slate-500">
                          {pub.authors}
                        </p>
                        <div className="flex items-center gap-3 text-[10px] italic text-slate-400">
                          <BookOpen size={12} className="text-[#C99B3B]" /> {pub.journal}
                        </div>
                      </div>
                      <button className="flex h-14 w-14 shrink-0 items-center justify-center border border-slate-200 text-slate-300 transition-all group-hover:border-[#C99B3B] group-hover:bg-[#C99B3B] group-hover:text-white">
                        <ExternalLink size={18} />
                      </button>
                    </div>
                  </motion.div>
                ))}

                {filteredPublications.length === 0 && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="border border-dashed border-slate-200 py-32 text-center"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">No records found matching your query.</p>
                    <button onClick={resetFilters} className="mt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[#C99B3B] hover:underline underline-offset-8">
                      Clear all search parameters
                    </button>
                  </motion.div>
                )}
              </div>
            </AnimatePresence>
          </section>
        </div>
      </div>

      {}
      <section className="mt-32 bg-slate-950 px-8 py-32 text-white md:px-20">
        <motion.div 
          {...fadeIn}
          className="mx-auto max-w-5xl text-center"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-[#C99B3B]">
            Vision & Academic Integrity
          </span>
          <h2 className="mt-12 text-3xl font-light italic leading-snug md:text-5xl lg:text-6xl">
            "We study the soil not as a commodity, but as a biological legacy 
            that demands our scientific stewardship."
          </h2>
          <div className="mt-16 flex flex-col items-center justify-center gap-10 md:flex-row">
            <div className="h-px w-20 bg-[#C99B3B]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400">
              Prof. Abdullahi Muhammad Saddiq
            </span>
            <div className="h-px w-20 bg-[#C99B3B]" />
          </div>
        </motion.div>
      </section>

    </div>
  );
}