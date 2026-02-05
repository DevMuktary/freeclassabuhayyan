"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Loader2, Check } from "lucide-react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-[#001232] text-white selection:bg-[#FFB902] selection:text-[#001232]">
      
      {/* --- ELEGANT NAV --- */}
      <nav className="fixed top-0 w-full z-40 bg-[#001232]/90 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-sm font-semibold tracking-[0.2em] uppercase text-white/80">
            Abu Hayyan School
          </div>
          <button 
            onClick={openModal}
            className="text-xs font-medium tracking-widest uppercase text-[#FFB902] hover:text-white transition-colors"
          >
            Reserve Seat
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION (Minimalist & Aligned) --- */}
      <section className="pt-48 pb-32 px-6 max-w-5xl mx-auto border-l border-white/5 border-r h-full relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#FFB902] font-mono text-xs mb-6 tracking-widest">
              01 // MASTERCLASS
            </p>
            <h1 className="text-5xl md:text-7xl font-light leading-tight tracking-tight mb-8 text-white/90">
              Halal Digital <br />
              <span className="font-serif italic text-[#FFB902]">Hustles</span> From Home.
            </h1>
            <p className="text-lg text-gray-400 font-light max-w-xl leading-relaxed mb-12">
              A curated session on ten legitimate, high-value online business models. 
              Designed for those who seek financial independence without compromising their values.
            </p>

            <div className="flex items-center gap-6">
              <button 
                onClick={openModal}
                className="group flex items-center gap-3 bg-white text-[#001232] px-8 py-4 text-sm font-medium tracking-wide hover:bg-[#FFB902] transition-colors duration-300"
              >
                SECURE ACCESS
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- PRECISION GRID: CURRICULUM --- */}
      <section className="border-t border-white/10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2">
          
          {/* Left: Sticky Header */}
          <div className="p-6 md:p-12 md:border-r border-white/10 md:sticky md:top-20 md:h-fit">
            <h3 className="text-2xl font-light mb-2">The Curriculum</h3>
            <p className="text-gray-500 text-sm">One Day. Intensive. Practical.</p>
          </div>

          {/* Right: The List */}
          <div className="divide-y divide-white/10 border-l border-white/10 md:border-l-0">
            {[
              "Overview of the Modern Online Economy",
              "10 Zero-Capital Business Models",
              "Essential Tools & Tech Stack",
              "Client Acquisition Strategies",
              "Structuring for Halal Income",
              "Common Pitfalls & Solutions"
            ].map((item, i) => (
              <div key={i} className="group p-6 md:p-10 hover:bg-white/5 transition-colors cursor-default">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-[#FFB902]">0{i + 1}</span>
                  <span className="text-lg font-light text-gray-200 group-hover:text-white transition-colors">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TARGET AUDIENCE (Clean Typography) --- */}
      <section className="py-24 px-6 border-t border-white/10 bg-[#000f2b]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div className="max-w-md">
            <h3 className="text-xl font-light mb-6">Ideally Suited For</h3>
            <div className="flex flex-wrap gap-3">
              {["Students", "Remote Workers", "Stay-at-Home Individuals", "Complete Beginners"].map((tag, i) => (
                <span key={i} className="px-4 py-2 border border-white/10 text-sm text-gray-400 font-light hover:border-[#FFB902] hover:text-[#FFB902] transition-colors cursor-default">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="h-px w-full md:w-px md:h-20 bg-white/10"></div>

          <div className="max-w-xs">
            <h3 className="text-xl font-light mb-4">Prerequisites</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              No prior technical skills required. Just a willingness to learn and a device with internet access.
            </p>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 border-t border-white/10 text-center">
        <p className="text-xs text-gray-600 tracking-widest uppercase">
          © {new Date().getFullYear()} Abu Hayyan School of Skills & Deen
        </p>
      </footer>

      {/* --- REFINED MODAL --- */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-[#001232]/90 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#000f2b] w-full max-w-md border border-white/10 shadow-2xl relative"
            >
              <button onClick={closeModal} className="absolute top-6 right-6 text-gray-500 hover:text-white">
                <X className="w-5 h-5" />
              </button>

              <div className="p-10 md:p-12">
                {status === "success" ? (
                  <div className="text-center">
                    <div className="inline-flex mb-6 border border-green-500/30 text-green-500 rounded-full p-4">
                      <Check className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-light text-white mb-2">Registration Confirmed</h3>
                    <p className="text-sm text-gray-400 mb-8 font-light">
                      We have reserved your spot. Please join the group below for updates.
                    </p>
                    <a 
                      href="https://chat.whatsapp.com/Ek0pnOcQkuEHsOAqU8cnpM"
                      target="_blank"
                      className="block w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 text-sm font-bold tracking-wide transition-all text-center"
                    >
                      JOIN WHATSAPP GROUP
                    </a>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl font-light text-white mb-8">Enter Details</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-1">
                        <label className="text-xs text-[#FFB902] uppercase tracking-widest">Full Name</label>
                        <input 
                          required
                          type="text" 
                          className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-transparent focus:outline-none focus:border-[#FFB902] transition-colors"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      
                      <div className="space-y-1">
                        <label className="text-xs text-[#FFB902] uppercase tracking-widest">Email Address</label>
                        <input 
                          required
                          type="email" 
                          className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-transparent focus:outline-none focus:border-[#FFB902] transition-colors"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>

                      <button 
                        disabled={status === "loading"}
                        className="w-full bg-white text-[#001232] hover:bg-[#FFB902] py-4 text-sm font-bold tracking-widest uppercase transition-colors mt-8 flex items-center justify-center gap-2"
                      >
                        {status === "loading" ? <Loader2 className="animate-spin w-4 h-4" /> : "Confirm"}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
