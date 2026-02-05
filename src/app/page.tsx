"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Loader2, Check, Star, TrendingUp, Users, Play, Shield } from "lucide-react";

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

  // Animation Variants
  const containerVars = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  
  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <main className="min-h-screen bg-[#001232] text-white selection:bg-[#FFB902] selection:text-[#001232] relative overflow-hidden font-sans">
      
      {/* --- AMBIENT GLOW BACKGROUND --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#FFB902] opacity-[0.08] blur-[150px] pointer-events-none rounded-full"></div>

      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-40 bg-[#001232]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-[#FFB902] to-[#B38000] rounded-lg flex items-center justify-center text-[#001232] font-bold text-lg">
              A
            </div>
            <span className="font-semibold tracking-wide text-sm text-gray-200 uppercase">
              Abu Hayyan School
            </span>
          </div>
          <button 
            onClick={openModal}
            className="text-xs font-bold tracking-widest uppercase px-6 py-2.5 rounded-full border border-white/10 hover:border-[#FFB902] hover:text-[#FFB902] transition-all duration-300"
          >
            Reserve Seat
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-44 pb-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          
          <motion.div 
            initial="hidden"
            animate="show"
            variants={containerVars}
          >
            <motion.div variants={itemVars} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-medium tracking-wider text-gray-300 uppercase">Live One-Day Masterclass</span>
            </motion.div>

            <motion.h1 variants={itemVars} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
              Halal Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB902] via-[#ffe082] to-[#FFB902] drop-shadow-[0_0_15px_rgba(255,185,2,0.3)]">
                Hustles From Home
              </span>
            </motion.h1>

            <motion.p variants={itemVars} className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              10 legitimate, scalable online business models. <br className="hidden md:block"/>
              Master the skills to earn independently without stepping out.
            </motion.p>

            <motion.div variants={itemVars} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={openModal}
                className="group relative w-full sm:w-auto px-10 py-5 bg-[#FFB902] text-[#001232] rounded-full font-bold text-lg shadow-[0_0_30px_-10px_rgba(255,185,2,0.6)] hover:shadow-[0_0_50px_-10px_rgba(255,185,2,0.8)] transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-500 skew-x-12 -translate-x-full"></div>
                <span className="relative flex items-center justify-center gap-2">
                  Register for Free <ArrowRight className="w-5 h-5" />
                </span>
              </button>
              
              <button className="w-full sm:w-auto px-10 py-5 rounded-full border border-white/10 hover:bg-white/5 text-gray-300 font-medium transition-all">
                View Curriculum
              </button>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* --- STATS / FEATURES BAR --- */}
      <div className="border-y border-white/5 bg-[#000d24]/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
          {[
            { label: "Business Models", value: "10" },
            { label: "Registration Cost", value: "FREE" },
            { label: "Location", value: "ONLINE" },
            { label: "Prerequisites", value: "NONE" },
          ].map((stat, i) => (
            <div key={i} className="py-8 text-center group hover:bg-white/[0.02] transition-colors">
              <div className="text-2xl font-bold text-white mb-1 group-hover:text-[#FFB902] transition-colors">{stat.value}</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* --- THE VALUE PROPOSITION (Grid) --- */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What You Will Gain</h2>
              <p className="text-gray-400 max-w-md">We cut through the noise. This is a practical, direct-to-point masterclass on generating online income.</p>
            </div>
            <div className="h-px bg-white/10 flex-1 ml-12 mb-4 hidden md:block"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: TrendingUp, 
                title: "The Economy", 
                desc: "Understand exactly how money moves online and where the opportunities are in 2026." 
              },
              { 
                icon: Shield, 
                title: "The Structure", 
                desc: "Learn how to set up your digital presence professionally to attract high-paying clients." 
              },
              { 
                icon: Users, 
                title: "The Clients", 
                desc: "Proven strategies to find and close your first customer without spending money on ads." 
              }
            ].map((card, i) => (
              <div key={i} className="bg-[#001840]/30 border border-white/5 p-10 rounded-3xl hover:border-[#FFB902]/30 hover:bg-[#001840]/60 transition-all duration-300 group">
                <div className="w-14 h-14 bg-[#FFB902]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#FFB902] transition-colors duration-300">
                  <card.icon className="w-7 h-7 text-[#FFB902] group-hover:text-[#001232] transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CURRICULUM ACCORDION STYLE --- */}
      <section className="py-24 bg-gradient-to-b from-[#000d24] to-[#001232]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-center text-3xl font-bold mb-16">Masterclass Curriculum</h2>
          
          <div className="space-y-4">
            {[
              "1. Overview of the Online Economy",
              "2. The 10 Business Models Breakdown",
              "3. Required Skills & Tools (Zero Capital)",
              "4. Identifying Your Niche",
              "5. Client Acquisition Strategies",
              "6. Common Beginner Mistakes",
              "7. Live Q&A Session"
            ].map((item, i) => (
              <div key={i} className="group flex items-center p-6 bg-[#001232] border border-white/5 rounded-2xl hover:border-[#FFB902]/50 transition-all cursor-default shadow-lg">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-sm font-mono text-gray-500 mr-6 group-hover:border-[#FFB902] group-hover:text-[#FFB902] transition-colors">
                  0{i + 1}
                </div>
                <span className="text-lg text-gray-300 group-hover:text-white transition-colors font-medium">{item}</span>
                <Check className="ml-auto w-5 h-5 text-[#FFB902] opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 px-6 border-t border-white/5 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-[#FFB902]/10 rounded-xl mb-4">
            <span className="text-[#FFB902] font-bold text-xl">A</span>
          </div>
          <p className="text-sm text-gray-400">Abu Hayyan School of Skills & Deen</p>
        </div>
        <p className="text-xs text-gray-600">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </footer>

      {/* --- PREMIUM MODAL --- */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-[#000510]/80 backdrop-blur-md"
            onClick={closeModal}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md bg-[#001232] rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden"
            >
              {/* Modal Header Decoration */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#FFB902] via-[#ffe082] to-[#FFB902]"></div>

              <button 
                onClick={closeModal}
                className="absolute top-5 right-5 p-2 bg-white/5 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="p-10">
                {status === "success" ? (
                  <div className="text-center py-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/20">
                      <Check className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Spot Secured!</h3>
                    <p className="text-gray-400 mb-8 text-sm leading-relaxed">
                      Alhamdulillah. You are registered. <br/>
                      <span className="text-white font-semibold">Join the WhatsApp group below</span> to receive the class link.
                    </p>
                    <a 
                      href="https://chat.whatsapp.com/Ek0pnOcQkuEHsOAqU8cnpM"
                      target="_blank"
                      className="block w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 rounded-xl font-bold transition-all transform hover:scale-[1.02] shadow-lg shadow-green-500/20 flex items-center justify-center gap-2"
                    >
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.001.572 2.135.882 3.297.882 3.181 0 5.768-2.587 5.768-5.766-.001-3.182-2.587-5.765-5.259-5.765z"/></svg>
                      Join WhatsApp Group
                    </a>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-white mb-1">Secure Your Seat</h3>
                      <p className="text-gray-400 text-sm">Fill in your details to get started.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Full Name</label>
                        <input 
                          required
                          type="text" 
                          className="w-full bg-[#000d24] border border-white/10 rounded-xl p-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#FFB902] focus:ring-1 focus:ring-[#FFB902] transition-all"
                          placeholder="e.g. Ibrahim Musa"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Email Address</label>
                        <input 
                          required
                          type="email" 
                          className="w-full bg-[#000d24] border border-white/10 rounded-xl p-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#FFB902] focus:ring-1 focus:ring-[#FFB902] transition-all"
                          placeholder="name@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>

                      <button 
                        disabled={status === "loading"}
                        className="w-full bg-[#FFB902] hover:bg-[#e6a600] text-[#001232] font-bold py-4 rounded-xl text-base transition-all mt-4 shadow-lg shadow-[#FFB902]/20 flex items-center justify-center gap-2"
                      >
                        {status === "loading" ? <Loader2 className="animate-spin w-5 h-5" /> : "Confirm Registration"}
                      </button>
                    </form>
                    
                    <p className="text-center text-[10px] text-gray-600 mt-6">
                      By registering, you agree to receive class updates via email.
                    </p>
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
