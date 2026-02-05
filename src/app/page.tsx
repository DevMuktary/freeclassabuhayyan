"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Loader2, Check, Star, ShieldCheck, Zap } from "lucide-react";

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
    // BACKGROUND: Navy with a subtle technical grid texture
    <main className="min-h-screen bg-[#001232] text-white selection:bg-[#FFB902] selection:text-[#001232] relative overflow-hidden">
      
      {/* Background Texture (Grid) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      
      {/* --- HEADER --- */}
      <nav className="fixed top-0 w-full z-40 bg-[#001232]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#FFB902] rounded-full"></div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-white">
              Abu Hayyan School
            </span>
          </div>
          <button 
            onClick={openModal}
            className="text-xs font-bold tracking-widest uppercase border border-[#FFB902] text-[#FFB902] px-6 py-2 hover:bg-[#FFB902] hover:text-[#001232] transition-all"
          >
            Secure Seat
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-32 px-6 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 rounded-full bg-white/5 mb-8">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-widest text-gray-300">Live Masterclass</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] tracking-tight mb-8 text-white">
            Halal Digital <br />
            <span className="font-serif italic text-[#FFB902]">Hustles</span> From Home
          </h1>

          <div className="flex flex-col md:flex-row gap-12 items-start md:items-end border-l border-[#FFB902]/30 pl-8">
            <p className="text-lg text-gray-400 font-light max-w-md leading-relaxed">
              We have curated 10 legitimate, high-value online business models that require zero compromise on your values.
            </p>
            
            <button 
              onClick={openModal}
              className="group flex items-center gap-4 text-xl font-medium text-white hover:text-[#FFB902] transition-colors"
            >
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#FFB902] transition-colors">
                <ArrowRight className="w-5 h-5" />
              </div>
              <span>Join the Class</span>
            </button>
          </div>
        </motion.div>
      </section>

      {/* --- THE 3 PILLARS (Minimalist Cards) --- */}
      <section className="border-t border-white/10 bg-[#000d24]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {[
            { icon: Zap, title: "Zero Capital", desc: "Start with what you have. No loans. No debt." },
            { icon: ShieldCheck, title: "100% Halal", desc: "Vetted for compliance. No Riba. No shady dealings." },
            { icon: Star, title: "High Value", desc: "Skills that the modern economy actually pays for." }
          ].map((item, i) => (
            <div key={i} className="p-10 hover:bg-white/5 transition-colors group">
              <item.icon className="w-6 h-6 text-[#FFB902] mb-6 opacity-80 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-lg font-medium mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- CURRICULUM LIST --- */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-light mb-6">The Curriculum</h2>
            <p className="text-gray-400 font-light leading-relaxed mb-8">
              This is not a motivational speech. It is a technical breakdown of 
              <span className="text-white"> ten specific business models</span>, including the tools, 
              platforms, and acquisition strategies for each.
            </p>
            <div className="p-6 bg-[#FFB902]/10 border border-[#FFB902]/20 rounded-lg">
              <p className="text-[#FFB902] text-sm">
                <strong>Bonus:</strong> Includes a free PDF guide and access to our private mentorship circle.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              "The 10 Business Models Breakdown",
              "Tech Stack & Tools Required",
              "Client Acquisition (Finding First Customer)",
              "Structuring for Global Payments",
              "Scaling from $0 to First $1000",
              "Common Mistakes to Avoid"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 py-4 border-b border-white/5">
                <span className="text-xs font-mono text-[#FFB902]">0{i+1}</span>
                <span className="text-lg font-light text-gray-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 border-t border-white/10 text-center bg-[#000a1c]">
        <p className="text-xs text-gray-600 tracking-widest uppercase mb-4">
          Presented by Abu Hayyan School of Skills & Deen
        </p>
        <p className="text-[#FFB902] text-xs">Registration is currently free.</p>
      </footer>

      {/* --- MODAL --- */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-[#001232]/95 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md bg-[#000f2b] border border-white/10 shadow-2xl relative overflow-hidden"
            >
              {/* Decorative Gold Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#FFB902]"></div>

              <button onClick={closeModal} className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>

              <div className="p-10">
                {status === "success" ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-xl text-white font-medium mb-2">You are registered.</h3>
                    <p className="text-sm text-gray-400 mb-8 font-light">
                      Please join the WhatsApp group below to receive your class access link.
                    </p>
                    <a 
                      href="https://chat.whatsapp.com/Ek0pnOcQkuEHsOAqU8cnpM"
                      target="_blank"
                      className="block w-full bg-[#25D366] hover:bg-[#1da851] text-white py-4 text-sm font-bold tracking-widest uppercase transition-all text-center"
                    >
                      Join WhatsApp Group
                    </a>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <span className="text-[#FFB902] text-xs font-bold tracking-widest uppercase mb-2 block">Registration</span>
                      <h3 className="text-2xl font-light text-white">Secure Your Spot</h3>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="group">
                        <label className="block text-xs text-gray-500 uppercase tracking-widest mb-2 group-focus-within:text-[#FFB902] transition-colors">Full Name</label>
                        <input 
                          required
                          type="text" 
                          className="w-full bg-[#001840] border border-white/10 p-4 text-white focus:outline-none focus:border-[#FFB902] transition-all"
                          placeholder="e.g. Musa Ahmed"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      
                      <div className="group">
                        <label className="block text-xs text-gray-500 uppercase tracking-widest mb-2 group-focus-within:text-[#FFB902] transition-colors">Email Address</label>
                        <input 
                          required
                          type="email" 
                          className="w-full bg-[#001840] border border-white/10 p-4 text-white focus:outline-none focus:border-[#FFB902] transition-all"
                          placeholder="e.g. musa@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>

                      <button 
                        disabled={status === "loading"}
                        className="w-full bg-[#FFB902] text-[#001232] hover:bg-white py-4 text-sm font-bold tracking-widest uppercase transition-colors mt-4 flex items-center justify-center gap-2"
                      >
                        {status === "loading" ? <Loader2 className="animate-spin w-4 h-4" /> : "Confirm Registration"}
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
