// "use client";
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   BookOpen,
//   Search,
//   Filter,
//   FileText,
//   ExternalLink,
//   RefreshCcw, // Added for the "Return All" icon
//   ChevronDown
// } from "lucide-react";

// // Filtered Content focused on Agriculture, Soils, and Meteorology
// const agPublications = [
//   {
//     year: "2024",
//     title: "Evaluation on fertility potentials of some soil in Gashaka Local Government of Taraba State, Nigeria",
//     authors: "Musa S. A., Ibrahim A. Saddiq, A. M. and Modibbo A. M.",
//     journal: "Savannah Journal of Science and Engineering Technology, 2(5):293-301",
//     category: "Soil Fertility"
//   },
//   {
//     year: "2022",
//     title: "The Influence of Meteorological Conditions on the Growth of Pearl Millet (Pennisetum Glaucum L. R. BR ) in Jigawa State, Nigeria",
//     authors: "Isa Magaji, Murabbi Aliyu Abel Adebayo, Abdullahi Saddiq, Abdulhamed Adamu",
//     journal: "Meteorological Research Journal",
//     category: "Crop Science"
//   },
//   {
//     year: "2022",
//     title: "Fertility capability Classification of soils of wukari, Taraba State, Nigeria",
//     authors: "Waizah Yakub, A. M. Saddiq and A. Salem",
//     journal: "FUW Journal of Agriculture and Life Sciences 1:163-178",
//     category: "Soil Science"
//   },
//   {
//     year: "2021",
//     title: "Effects of Climate and Planting Date on Some Growth Parameters of Potato at Pankshin, Jos, Plateau State, Nigeria",
//     authors: "Audu H. O., Adebayo A. A. Sadiq, A. M., Emeje D. P. and Wache, P. Z.",
//     journal: "Global Journal of Geography and Environmental Sciences 3(2021)",
//     category: "Agro-Meteorology"
//   },
//   {
//     year: "2020",
//     title: "Deforestation, Desert Encroachment, Climate Change and Agricultural Production in Sudano-Sahelian Region of Nigeria",
//     authors: "Azare, I. M., Abdullahi M. S., Adebayo, A. A., Dantata, I. J. and Duala T.",
//     journal: "J. Appl. Sci. Environ. Management, 24(1):127-132",
//     category: "Climate & Ag"
//   },
//   {
//     year: "2019",
//     title: "Effects of Organic Amendments on some soil properties and growth of Red Scarlet Roselle (Hibiscus Safdariffa L.)",
//     authors: "Waizah Yakub, Solomon R. I., Kwaghe Emmanuel Kwada and Saddiq, A.",
//     journal: "Journal of Agricultural Production and Technology",
//     category: "Organic Farming"
//   },
//   {
//     year: "2017",
//     title: "Soil Fertility Management, A Tool for Sustainable Disease and Weed Control in Sub-saharan Africa: A Review",
//     authors: "A. M. Saddiq, A. Ibrahim, M. Y. Jada, A. M. Tahir and I. Umar",
//     journal: "Recent Research in Science and Technology Vol 9 (2017)",
//     category: "Sustainable Ag"
//   },
//   {
//     year: "2017",
//     title: "Integrated Nutrient Management on Soil Properties and Nutrient Uptake by Red Onion",
//     authors: "Emmanuel Kwada Kwaghe, Abdullahi Muhammad Saddiq, Rejoice Ibrahim Solomon and Salihu Ardo Musa",
//     journal: "Turkish Journal of Agriculture-Food Science and Technology, 5(5):471-475",
//     category: "Nutrient Management"
//   },
//   {
//     year: "2016",
//     title: "Effects of nitrogen fertilizer (Urea) on soil acidity indices under lowland rice (Oryza sativa L.) cultivation in Yola, Nigeria",
//     authors: "Alhassan, I., Saddiq, A. M., Singh, L. and Timon, F.",
//     journal: "Gashua Journal of Irrigation and Desertification 2 (2):72-78",
//     category: "Rice Production"
//   }
// ];

// const page = () => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredPubs = agPublications.filter(pub =>
//     pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     pub.category.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Function to return all publications
//   const returnAll = () => setSearchTerm("");

//   return (
//     <div className="min-h-screen bg-[#FCFCFC] pb-20">

//       {/* --- HERO IMAGE SECTION --- */}
//       <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden bg-slate-900">
//         <img
//           src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80"
//           alt="Agriculture Field"
//           className="absolute inset-0 w-full h-full object-cover opacity-60"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-[#FCFCFC] via-transparent to-black/40" />

//         <div className="relative z-10 text-center px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <span className="text-[#C99B3B] font-bold uppercase tracking-[0.4em] text-xs md:text-sm">
//               Academic Archive
//             </span>
//             <h1 className="text-5xl md:text-8xl font-light mt-4 text-white">Publications</h1>
//             <div className="mt-8 flex justify-center">
//                <ChevronDown className="text-white animate-bounce" size={32} />
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* --- CONTENT HEADER --- */}
//       <header className="px-8 md:px-20 -mt-12 relative z-20 mb-16">
//         <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 max-w-5xl">
//            <p className="text-xl text-slate-500 leading-relaxed max-w-3xl">
//             A comprehensive archive of research focusing on soil fertility,
//             sustainable agriculture, and the impact of climate change on Nigerian crop production.
//           </p>
//         </div>
//       </header>

//       <div className="px-8 md:px-20 flex flex-col lg:flex-row gap-16">

//         {/* --- SIDEBAR CONTROLS --- */}
//         <aside className="lg:w-1/4 h-fit lg:sticky lg:top-12 space-y-8">

//           {/* Search Box */}
//           <div className="relative">
//             <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
//             <input
//               type="text"
//               placeholder="Search research..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:border-[#C99B3B] transition-colors shadow-sm"
//             />
//           </div>

//           {/* Action Button: Return All */}
//           <button
//             onClick={returnAll}
//             className="w-full flex items-center justify-center gap-3 py-4 bg-slate-900 text-white rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-[#C99B3B] transition-all shadow-lg active:scale-95"
//           >
//             <RefreshCcw size={16} />
//             Return All Publications
//           </button>

//           <div>
//             <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
//               <Filter size={14}/> Categories
//             </h3>
//             <div className="flex flex-wrap gap-2">
//               {["Soil Fertility", "Crop Science", "Climate & Ag", "Organic Farming"].map((cat) => (
//                 <button
//                   key={cat}
//                   onClick={() => setSearchTerm(cat)}
//                   className={`px-4 py-2 rounded-full text-xs font-medium transition-all border ${
//                     searchTerm === cat
//                     ? "bg-[#C99B3B] text-white border-[#C99B3B]"
//                     : "bg-white text-slate-600 border-slate-200 hover:border-[#C99B3B]"
//                   }`}
//                 >
//                   {cat}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
//             <BookOpen className="text-[#C99B3B] mb-4" />
//             <h4 className="font-bold text-slate-900">Google Scholar</h4>
//             <p className="text-xs text-slate-400 mt-2">View full citation metrics and recent h-index updates.</p>
//             <button className="mt-4 flex items-center gap-2 text-[#C99B3B] text-xs font-bold uppercase tracking-widest">
//               Visit Profile <ExternalLink size={12}/>
//             </button>
//           </div>
//         </aside>

//         {/* --- MAIN LIST --- */}
//         <section className="lg:w-3/4">
//           <div className="space-y-6">
//             {filteredPubs.map((pub, i) => (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.05 }}
//                 key={i}
//                 className="group relative bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#C99B3B]/30 transition-all cursor-default"
//               >
//                 <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
//                   <div className="space-y-4 flex-1">
//                     <div className="flex items-center gap-3">
//                       <span className="text-[#C99B3B] font-mono text-sm font-bold">{pub.year}</span>
//                       <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
//                       <span className="text-[10px] font-bold uppercase tracking-widest text-[#C99B3B] px-3 py-1 bg-[#C99B3B]/5 rounded-full border border-[#C99B3B]/10">
//                         {pub.category}
//                       </span>
//                     </div>

//                     <h2 className="text-xl md:text-2xl font-medium text-slate-800 group-hover:text-[#C99B3B] transition-colors leading-tight">
//                       {pub.title}
//                     </h2>

//                     <p className="text-sm text-slate-500 font-medium">
//                       {pub.authors}
//                     </p>

//                     <div className="flex items-center gap-2 text-xs text-slate-400 italic">
//                       <FileText size={14} className="text-[#C99B3B]" />
//                       {pub.journal}
//                     </div>
//                   </div>

//                   <button className="flex items-center justify-center w-12 h-12 rounded-2xl border border-slate-100 group-hover:bg-[#C99B3B] group-hover:text-white transition-all text-slate-300 shadow-sm">
//                     <ExternalLink size={18} />
//                   </button>
//                 </div>
//               </motion.div>
//             ))}

//             {filteredPubs.length === 0 && (
//               <div className="py-20 text-center border-2 border-dashed border-slate-200 rounded-3xl">
//                 <p className="text-slate-400">No publications found matching your criteria.</p>
//                 <button
//                   onClick={returnAll}
//                   className="mt-4 text-[#C99B3B] font-bold uppercase text-xs tracking-widest underline"
//                 >
//                   Clear all filters
//                 </button>
//               </div>
//             )}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default page;
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Search,
  Filter,
  FileText,
  ExternalLink,
  RefreshCcw,
  ChevronDown,
  Sprout,
  Globe,
  Leaf,
  Microscope,
} from "lucide-react";

const publications = [
  {
    year: "2024",
    title:
      "Evaluation on Fertility Potentials of Some Soils in Gashaka Local Government of Taraba State, Nigeria",
    authors: "Musa S. A., Ibrahim A. Saddiq, A. M. and Modibbo A. M.",
    journal:
      "Savannah Journal of Science and Engineering Technology, 2(5):293-301",
    category: "Soil Fertility",
  },

  {
    year: "2022",
    title:
      "The Influence of Meteorological Conditions on the Growth of Pearl Millet in Jigawa State, Nigeria",
    authors:
      "Isa Magaji, Murabbi Aliyu Abel Adebayo, Abdullahi Saddiq, Abdulhamed Adamu",
    journal: "Agricultural & Meteorological Research",
    category: "Climate & Agriculture",
  },

  {
    year: "2022",
    title:
      "Fertility Capability Classification of Soils of Wukari, Taraba State, Nigeria",
    authors: "Waizah Yakub, A. M. Saddiq and A. Salem",
    journal: "FUW Journal of Agriculture and Life Sciences 1:163-178",
    category: "Soil Science",
  },

  {
    year: "2021",
    title:
      "Effects of Climate and Planting Date on Growth Parameters of Potato in Plateau State, Nigeria",
    authors:
      "Audu H. O., Adebayo A. A., Saddiq A. M., Emeje D. P. and Wache P. Z.",
    journal: "Global Journal of Geography and Environmental Sciences",
    category: "Climate & Agriculture",
  },

  {
    year: "2020",
    title:
      "Deforestation, Desert Encroachment, Climate Change and Agricultural Production in Sudano-Sahelian Nigeria",
    authors:
      "Azare I. M., Abdullahi M. S., Adebayo A. A., Dantata I. J. and Duala T.",
    journal: "Journal of Applied Science & Environmental Management",
    category: "Environmental Sustainability",
  },

  {
    year: "2019",
    title:
      "Evaluation and Classification of Soil Fertility Potentials of Gombi Area of Adamawa State",
    authors:
      "Johnson A., Saddiq A. M., Solomon R. I., Ibrahim A. and Waizah Y.",
    journal: "Nigerian Journal of Soil Science",
    category: "Soil Fertility",
  },

  {
    year: "2019",
    title:
      "Developments in Increasing Nutrient Use Efficiency for Applied Nitrogen and Phosphorus",
    authors: "Solomon R. I. and A. M. Saddiq",
    journal: "FUW Trends in Science and Technology Journal",
    category: "Nutrient Management",
  },

  {
    year: "2017",
    title:
      "Soil Fertility Management: A Tool for Sustainable Disease and Weed Control in Sub-Saharan Africa",
    authors: "A. M. Saddiq, A. Ibrahim, M. Y. Jada, A. M. Tahir and I. Umar",
    journal: "Recent Research in Science and Technology",
    category: "Sustainable Agriculture",
  },

  {
    year: "2017",
    title:
      "Integrated Nutrient Management on Soil Properties and Nutrient Uptake by Red Onion",
    authors:
      "Emmanuel Kwada Kwaghe, Abdullahi Muhammad Saddiq, Rejoice Ibrahim Solomon and Salihu Ardo Musa",
    journal: "Turkish Journal of Agriculture-Food Science and Technology",
    category: "Nutrient Management",
  },

  {
    year: "2016",
    title:
      "Effects of Nitrogen Fertilizer on Soil Acidity Indices under Lowland Rice Cultivation in Yola, Nigeria",
    authors: "Alhassan I., Saddiq A. M., Singh L. and Timon F.",
    journal: "Gashua Journal of Irrigation and Desertification",
    category: "Rice Production",
  },
];

const categories = [
  "All",
  "Soil Fertility",
  "Climate & Agriculture",
  "Nutrient Management",
  "Sustainable Agriculture",
  "Environmental Sustainability",
  "Rice Production",
];

const page = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPublications = publications.filter((pub) => {
    const matchesSearch =
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      activeCategory === "All" || pub.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  const resetFilters = () => {
    setSearchTerm("");
    setActiveCategory("All");
  };

  return (
    /* REMOVED overflow-hidden FROM THE LINE BELOW */
    <div className="min-h-screen bg-[#FCFCFC] pb-20">
      {/* ====================================================== */}
      {/* HERO SECTION */}
      {/* ====================================================== */}
      <section className="relative flex h-[65vh] w-full items-center justify-center overflow-hidden bg-slate-950">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80"
          alt="Agricultural Research"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#FCFCFC] via-transparent to-black/40" />

        <div className="relative z-10 px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#C99B3B] md:text-sm">
              Research • Innovation • Food Security
            </span>

            <h1 className="mt-6 text-5xl font-bold text-white md:text-5xl">
              Research & Publications
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
              A comprehensive body of research focused on soil fertility,
              sustainable agriculture, climate-smart farming, nutrient
              management, and agricultural productivity across Africa.
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
      {/* INTRO HEADER */}
      {/* ====================================================== */}
      <header className="relative z-20 -mt-12 mb-20 px-8 md:px-20">
        <div className="border border-slate-100 bg-white p-8 md:p-14">
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-between md:gap-10">
            {/* ICON: Moved to top on mobile using order-first, then reset to default on md */}
            <div className="order-first flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-[#C99B3B]/10 md:order-last">
              <BookOpen className="text-[#C99B3B]" size={42} />
            </div>

            {/* TEXT: Centralized on mobile, left-aligned on md */}
            <div className="text-center md:max-w-3xl md:text-left">
              <h2 className="text-3xl font-light text-black md:text-5xl">
                Advancing Practical Agricultural Science
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-slate-500">
                Prof. A.M. Saddiq’s research contributions span soil chemistry,
                fertilizer management, crop productivity, climate-smart
                agriculture, irrigation systems, environmental sustainability,
                and food security initiatives with practical application for
                farmers and agricultural development programs.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* ====================================================== */}
      {/* RESEARCH STATS */}
      {/* ====================================================== */}
      <section className="mb-24 px-8 md:px-20">
        <div className="grid gap-6 md:grid-cols-4">
          {[
            {
              value: "50+",
              label: "Research Publications",
              icon: <FileText size={22} />,
            },

            {
              value: "30+",
              label: "Years of Research",
              icon: <Microscope size={22} />,
            },

            {
              value: "10+",
              label: "PhD Supervisions",
              icon: <BookOpen size={22} />,
            },

            {
              value: "Multiple",
              label: "International Collaborations",
              icon: <Globe size={22} />,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-slate-100 bg-white p-8"
            >
              <div className="flex justify-center items-center">
                <div className="mb-4 text-[#C99B3B] bg-black flex justify-center items-center rounded-full w-10 h-10">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-lg font-bold text-center text-black">
                {item.value}
              </h3>

              <p className="mt-2 text-sm uppercase text-center text-slate-600">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ====================================================== */}
      {/* MAIN CONTENT */}
      {/* ====================================================== */}
      {/* ADDED lg:items-start BELOW TO ALLOW SIDEBAR TO HAVE STARTING HEIGHT */}
      <div className="flex flex-col gap-16 px-8 md:px-20 lg:flex-row lg:items-start">
        {/* ====================================================== */}
        {/* SIDEBAR (Sticky) */}
        {/* ====================================================== */}
        <aside className="space-y-8 lg:w-1/4 lg:sticky  md:py-10 lg:top-12 h-fit">
          {/* SEARCH */}
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />

            <input
              type="text"
              placeholder="Search publications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-4 transition-colors focus:border-[#C99B3B] focus:outline-none"
            />
          </div>

          {/* RESET BUTTON */}
          <button
            onClick={resetFilters}
            className="flex w-full items-center justify-center gap-3 rounded-2xl bg-slate-950 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-lg transition-all hover:bg-[#C99B3B]"
          >
            <RefreshCcw size={16} />
            Return All Publications
          </button>

          {/* CATEGORIES */}
          <div>
            <h3 className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
              <Filter size={14} />
              Research Categories
            </h3>

            <div className="flex flex-wrap gap-3">
              {categories.map((cat, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full border px-4 py-2 text-xs font-medium transition-all cursor-pointer ${
                    activeCategory === cat
                      ? "border-[#C99B3B] bg-[#C99B3B] text-white"
                      : "border-slate-200 bg-white text-slate-600 hover:border-[#C99B3B]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* SCHOLAR CARD */}
          <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
            <Leaf className="mb-5 text-[#C99B3B]" size={32} />

            <h4 className="text-xl font-semibold text-black">
              Academic Profile
            </h4>

            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              Explore Prof. Saddiq’s scholarly contributions in soil science,
              climate-smart agriculture, nutrient management, irrigation
              systems, and environmental sustainability.
            </p>

            <button className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C99B3B]">
              Google Scholar
              <ExternalLink size={12} />
            </button>
          </div>
        </aside>

        {/* ====================================================== */}
        {/* PUBLICATIONS LIST (Scrollable) */}
        {/* ====================================================== */}
        <section className="lg:w-3/4">
          <div className="space-y-8">
            {filteredPublications.map((pub, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative cursor-pointer rounded-2xl border border-slate-100 bg-white p-8 transition-all hover:border-[#C99B3B]/30 hover:shadow-sm"
              >
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
                  {/* LEFT */}
                  <div className="flex-1 space-y-5">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-sm font-bold text-[#C99B3B]">
                        {pub.year}
                      </span>

                      <span className="h-1 w-1 rounded-full bg-slate-300"></span>

                      <span className="rounded-full border border-[#C99B3B]/10 bg-[#C99B3B]/5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#C99B3B]">
                        {pub.category}
                      </span>
                    </div>

                    <h2 className="text-2xl font-medium leading-tight text-slate-800 transition-colors group-hover:text-[#C99B3B]">
                      {pub.title}
                    </h2>

                    <p className="text-sm font-medium text-slate-500">
                      {pub.authors}
                    </p>

                    <div className="flex items-center gap-2 text-sm italic text-slate-400">
                      <FileText size={15} className="text-[#C99B3B]" />
                      {pub.journal}
                    </div>
                  </div>

                  {/* RIGHT */}
                  <button className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-100 text-slate-300 shadow-sm transition-all group-hover:bg-[#C99B3B] group-hover:text-white">
                    <ExternalLink size={20} />
                  </button>
                </div>
              </motion.div>
            ))}

            {/* EMPTY STATE */}
            {filteredPublications.length === 0 && (
              <div className="rounded-[32px] border-2 border-dashed border-slate-200 py-24 text-center">
                <p className="text-slate-400">
                  No publications found matching your criteria.
                </p>

                <button
                  onClick={resetFilters}
                  className="mt-5 text-xs font-bold uppercase tracking-widest text-[#C99B3B] underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* ====================================================== */}
      {/* RESEARCH PHILOSOPHY */}
      {/* ====================================================== */}
      <section className="px-8 pb-20 pt-32 md:px-20">
        <div className="rounded-lg bg-slate-950 p-14 text-white md:p-24">
          <div className="max-w-5xl">
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#C99B3B]">
              Research Philosophy
            </span>

            <h2 className="mt-6 text-4xl font-light leading-tight md:text-4xl">
              "Scientific research becomes truly meaningful when it creates
              practical solutions for sustainable agriculture, food security,
              and farmer prosperity."
            </h2>

            <p className="mt-10 max-w-3xl text-lg leading-relaxed text-slate-400">
              Prof. A.M. Saddiq’s body of work reflects a long-standing
              commitment to bridging scientific discovery with real-world
              agricultural application through soil fertility management,
              sustainable nutrient systems, climate-smart farming practices, and
              environmentally responsible agricultural development.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
