"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  MapPin, 
  Globe, 
  Zap, 
  History, 
  Trophy, 
  Users,
  ChevronDown 
} from "lucide-react";

const page = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      
      {/* --- SECTION 0: HERO IMAGE --- */}
      <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden bg-slate-900">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80" 
          alt="Sustainable Agriculture Landscape" 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-white" />
        
        <div className="relative z-10 text-center px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-[#C99B3B] font-bold uppercase tracking-[0.4em] text-sm">Legacy of Excellence</span>
            <h1 className="text-5xl md:text-8xl font-light mt-4 text-white">Academic Profile</h1>
            <div className="mt-12 flex justify-center">
               <motion.div 
                 animate={{ y: [0, 10, 0] }} 
                 transition={{ repeat: Infinity, duration: 2 }}
                 className="p-4 rounded-full border border-white/20 backdrop-blur-sm"
               >
                 <ChevronDown className="text-white" size={24} />
               </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 1: HERO STORY --- */}
      <section className="px-8 md:px-20 py-24 flex flex-col md:flex-row gap-16 items-center">
        <motion.div {...fadeIn} className="md:w-1/2">
          <span className="text-[#C99B3B] font-bold uppercase tracking-[0.3em] text-xs">The Background</span>
          <h1 className="text-5xl md:text-7xl font-light mt-4 leading-tight">
            Driven by <br /> <span className="italic text-[#C99B3B]">Curiosity.</span>
          </h1>
          <p className="mt-8 text-xl text-slate-500 leading-relaxed max-w-lg">
            For over two decades, my work has focused on the delicate balance between 
            soil health and sustainable food systems. I believe that the future of 
            agriculture lies in understanding the unseen dynamics of our earth.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="md:w-1/2 relative"
        >
          <div className="absolute -inset-4 border border-[#C99B3B]/20 rounded-2xl -z-10 translate-x-8 translate-y-8" />
          <img 
            src="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80" 
            alt="Professor Alexis Vance" 
            className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
          />
        </motion.div>
      </section>

      {/* --- SECTION 2: THE STATS GRID --- */}
      <section className="bg-slate-950 py-24 px-8 md:px-20 text-white overflow-hidden relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          {[
            { icon: <History />, title: "20+ Years", desc: "Dedicated to academic research and field studies across Nigeria." },
            { icon: <Globe />, title: "International", desc: "Collaborations with over 15 global agricultural institutions." },
            { icon: <Trophy />, title: "09 Awards", desc: "Recognized for excellence in soil fertility management." },
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-10 border border-white/10 rounded-3xl bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div className="text-[#C99B3B] mb-6">{item.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SECTION 3: THE TIMELINE --- */}
      <section className="px-8 md:px-20 py-32">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-20">
            <div className="md:w-1/3">
              <h2 className="text-sm font-bold uppercase tracking-widest text-[#C99B3B]">Academic Journey</h2>
              <h3 className="text-4xl font-light mt-4">Growth & Evolution</h3>
            </div>
            
            <div className="md:w-2/3 space-y-12">
              {[
                { year: "2015 — Present", role: "Professor of Soil Science", org: "Federal University of Wukari" },
                { year: "2010 — 2015", role: "Senior Researcher", org: "Agricultural Research Institute" },
                { year: "2005 — 2010", role: "PhD in Agronomy", org: "University of Ibadan" },
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="flex gap-8 group"
                >
                  <div className="text-[#C99B3B] font-mono pt-1">{step.year}</div>
                  <div>
                    <h4 className="text-2xl font-medium group-hover:text-[#C99B3B] transition-colors">{step.role}</h4>
                    <p className="text-slate-500 mt-2">{step.org}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: THE PHILOSOPHY --- */}
      <section className="px-8 md:px-20 pb-32">
        <div className="bg-[#fcf7ec] rounded-[40px] p-12 md:p-24 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
             <div className="bg-[#C99B3B] w-16 h-1 rounded-full mb-8" />
             <h2 className="text-3xl md:text-5xl font-light leading-snug">
               "My philosophy is simple: Science is only as valuable as the <span className="italic text-[#C99B3B]">impact</span> it has on the community it serves."
             </h2>
          </div>
          <div className="md:w-1/2 space-y-6 text-lg text-slate-600">
            <p>
              In the classroom, I encourage my students to think beyond the textbook. We focus 
              on real-world applications—how the pH of a soil in Taraba State affects the 
              livelihood of a local farmer.
            </p>
            <p>
              I am committed to fostering an environment where innovation meets tradition, 
              ensuring that modern agricultural techniques are accessible and sustainable 
              for all.
            </p>
            <div className="pt-6 flex gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 text-xs font-bold uppercase tracking-widest">
                <Users size={14} className="text-[#C99B3B]"/> Mentorship
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 text-xs font-bold uppercase tracking-widest">
                <Zap size={14} className="text-[#C99B3B]"/> Innovation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 5: QUICK CONTACT --- */}
      <section className="border-t border-slate-100 py-20 px-8 md:px-20 text-center">
        <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-slate-400">Want to collaborate?</h2>
        <a 
          href="mailto:contact@professor.edu" 
          className="text-3xl md:text-5xl font-light mt-6 block hover:text-[#C99B3B] transition-colors"
        >
          hello@professor-alexis.edu
        </a>
      </section>

    </div>
  );
};

export default page;