"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, X, ArrowRight, Loader2, PlayCircle, BookOpen, DollarSign, ShieldAlert } from "lucide-react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setStatus("idle"); // Reset status when closing so they can try again if needed
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

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    // MAIN CONTAINER WITH RADIAL GRADIENT BACKGROUND
    <main className="min-h-screen bg-[#001232] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0f2e5c] via-[#001232] to-[#000510] text-white font-sans selection:bg-brand-gold selection:text-brand-navy overflow-x-hidden">
      
      {/* --- HEADER --- */}
      <header className="fixed top-0 w-full z-40 bg-[#001232]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tighter">
            ABU HAYYAN <span className="text-brand-gold">SCHOOL</span>
          </div>
          <button 
            onClick={openModal}
            className="hidden md:flex bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-2 rounded-full text-sm font-medium transition-all"
          >
            Secure Free Seat
          </button>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-24 px-6 text-center max-w-5xl mx-auto">
        {/* Glowing effect behind text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[120px] -z-10"></div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-brand-gold/10 border border-brand-gold/50 text-brand-gold text-xs md:text-sm font-bold tracking-widest uppercase mb-6">
            Live One-Day Masterclass
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] mb-8">
            Halal Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB902] via-[#FFE584] to-[#FFB902]">
              Hustles
            </span> From Home
          </h1>

          <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
            Discover 10 legitimate, high-value online businesses you can start today. 
            No stepping out. No compromising your deen.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={openModal}
              className="group relative px-8 py-5 bg-brand-gold text-brand-navy text-lg font-bold rounded-full shadow-[0_0_40px_-10px_rgba(255,185,2,0.5)] hover:shadow-[0_0_60px_-10px_rgba(255,185,2,0.7)] transition-all transform hover:-translate-y-1 w-full sm:w-auto"
            >
              Register for Free
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="text-sm text-gray-400">
              <span className="block">📅 Date: Coming Soon</span>
              <span className="block">📍 Venue: Online (Live)</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- THE "WHY" GRID (Glass Cards) --- */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: DollarSign, title: "Zero Capital", desc: "Learn which hustles require ₦0 to start." },
            { icon: ShieldAlert, title: "100% Halal", desc: "Vetted opportunities. No riba, no haram elements." },
            { icon: BookOpen, title: "Full Guide", desc: "Tools, skills, and client acquisition strategies." }
          ].map((item, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-brand-gold/20 rounded-2xl flex items-center justify-center mb-6 text-brand-gold">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- CURRICULUM LIST --- */}
      <section className="py-20 bg-black/20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            What We Will <span className="text-brand-gold">Cover</span>
          </h2>
          
          <div className="grid gap-4">
            {[
              "Overview of the online economy",
              "The 10 online businesses you can start from home",
              "How to start with little or no capital",
              "Startup tools you need for each business",
              "Common mistakes beginners make",
              "How to get your first client or customer"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-4 p-5 bg-[#001840] border border-[#002860] rounded-xl">
                <CheckCircle2 className="w-6 h-6 text-brand-gold shrink-0" />
                <span className="text-lg text-gray-200">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- NOT FOR YOU SECTION --- */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto bg-red-500/10 border border-red-500/20 p-8 rounded-3xl">
          <h3 className="text-red-400 font-bold uppercase tracking-widest mb-4 text-sm">Strict Warning</h3>
          <p className="text-xl text-gray-300">
            Do <span className="text-white font-bold decoration-red-500 underline decoration-2">NOT</span> join if you are looking for "quick money" schemes or are not ready to implement what you learn.
          </p>
        </div>
      </section>

      {/* --- BOTTOM CTA --- */}
      <section className="pb-32 text-center px-6">
        <h2 className="text-4xl font-bold mb-8">Ready to change your financial story?</h2>
        <button 
          onClick={openModal}
          className="bg-white text-brand-navy hover:bg-gray-200 px-10 py-5 rounded-full font-bold text-xl transition-all"
        >
          Secure My Free Spot
        </button>
      </section>


      {/* --- MODAL (POPUP) --- */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
              className="bg-[#001840] border border-white/10 w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden relative"
            >
              
              {/* Close Button */}
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-8 md:p-10">
                
                {status === "success" ? (
                  // SUCCESS STATE
                  <div className="text-center py-10">
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Registration Complete!</h3>
                    <p className="text-gray-400 mb-8">
                      Masha Allah. You are in. Now, join the group to get the class link.
                    </p>
                    <a 
                      href="https://chat.whatsapp.com/Ek0pnOcQkuEHsOAqU8cnpM"
                      target="_blank"
                      className="block w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"
                    >
                       Join WhatsApp Group
                    </a>
                  </div>
                ) : (
                  // FORM STATE
                  <>
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white">Enter Your Details</h3>
                      <p className="text-gray-400 text-sm mt-2">We will send the access details to your email.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <input 
                          required
                          type="text" 
                          placeholder="Full Name"
                          className="w-full bg-[#000F2A] border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      
                      <div>
                        <input 
                          required
                          type="email" 
                          placeholder="Email Address"
                          className="w-full bg-[#000F2A] border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>

                      <button 
                        disabled={status === "loading"}
                        className="w-full bg-brand-gold hover:bg-brand-goldHover text-brand-navy font-bold py-4 rounded-xl text-lg transition-all flex items-center justify-center gap-2"
                      >
                        {status === "loading" ? (
                          <> <Loader2 className="animate-spin" /> Processing... </>
                        ) : (
                          <> Confirm Registration <ArrowRight className="w-5 h-5" /> </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
              
              {/* Modal Footer */}
              {status !== "success" && (
                <div className="bg-[#000F2A] p-4 text-center text-xs text-gray-500 border-t border-white/5">
                  Your data is safe. We hate spam as much as you do.
                </div>
              )}

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
