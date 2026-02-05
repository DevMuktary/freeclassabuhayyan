"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle2, X, ArrowRight, Loader2, 
  Wallet, ShieldCheck, BookOpen, Star, 
  ChevronRight, Lock 
} from "lucide-react";

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
  }
};

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate API call
    setTimeout(() => setStatus("success"), 1500); 
  };

  return (
    <div className="relative min-h-screen bg-[#000B1E] text-slate-200 font-sans selection:bg-[#FFB902] selection:text-[#000B1E] overflow-x-hidden">
      
      {/* --- AMBIENT BACKGROUND EFFECTS --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        {/* Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#0f2e5c] opacity-40 blur-[120px] rounded-full mix-blend-screen"></div>
        {/* Bottom Gold Glow */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FFB902] opacity-5 blur-[120px] rounded-full"></div>
      </div>

      {/* --- NAVBAR --- */}
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? "py-4" : "py-6"}`}>
        <div className={`max-w-6xl mx-auto px-6 transition-all duration-300 ${scrolled ? "bg-[#001232]/80 backdrop-blur-xl border border-white/5 rounded-full shadow-2xl shadow-black/20" : ""}`}>
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#FFB902] to-[#B38000] rounded-lg flex items-center justify-center font-bold text-[#001232]">
                A
              </div>
              <div className="text-lg font-bold tracking-tight text-white">
                ABU HAYYAN <span className="text-[#FFB902] font-medium">SCHOOL</span>
              </div>
            </div>
            <button 
              onClick={openModal}
              className="hidden md:flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              Secure Free Seat <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10 pt-32 pb-20">
        
        {/* --- HERO SECTION --- */}
        <section className="px-6 max-w-5xl mx-auto text-center mb-32">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#FFB902]/20 bg-[#FFB902]/5 text-[#FFB902] text-xs font-semibold tracking-wider uppercase shadow-[0_0_20px_-5px_rgba(255,185,2,0.3)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFB902] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFB902]"></span>
                </span>
                Live Masterclass
              </div>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-8 leading-[0.95]">
              Halal Digital <br />
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-b from-[#FFE584] via-[#FFB902] to-[#B38000]">
                Hustles
                {/* Glow behind text */}
                <div className="absolute inset-0 bg-[#FFB902] blur-3xl opacity-20 -z-10"></div>
              </span> From Home
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Master 10 legitimate, high-value online businesses. <br className="hidden md:block"/>
              Zero interest. Zero compromise. <span className="text-white font-medium">100% Halal.</span>
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={openModal}
                className="relative group px-8 py-4 bg-white text-[#001232] text-lg font-bold rounded-full overflow-hidden transition-all hover:scale-[1.02] shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-gray-200 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
                <span className="relative flex items-center gap-2">
                  Register Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </motion.div>
          </motion.div>
        </section>

        {/* --- FEATURES GRID --- */}
        <section className="px-6 max-w-6xl mx-auto mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              { 
                icon: Wallet, 
                title: "Zero Capital", 
                desc: "Discover models that require just your time and brainpower to launch.",
                color: "text-emerald-400" 
              },
              { 
                icon: ShieldCheck, 
                title: "Shariah Compliant", 
                desc: "Every method is vetted against strict Islamic finance principles.",
                color: "text-[#FFB902]" 
              },
              { 
                icon: BookOpen, 
                title: "Execution Playbook", 
                desc: "Don't just learn 'what'. Learn 'how' with step-by-step guides.",
                color: "text-blue-400" 
              }
            ].map((item, i) => (
              <div key={i} className="group relative p-8 rounded-3xl bg-[#031538] border border-white/5 hover:border-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-[#000]/50 overflow-hidden">
                <div className={`absolute top-0 right-0 p-32 opacity-10 bg-gradient-to-br from-white to-transparent blur-3xl rounded-full translate-x-12 -translate-y-12 transition-opacity group-hover:opacity-20`}></div>
                
                <div className={`w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 ${item.color}`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </section>

        {/* --- CURRICULUM SECTION --- */}
        <section className="px-6 max-w-5xl mx-auto mb-32">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3 sticky top-32">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Masterclass <br />
                <span className="text-[#FFB902]">Curriculum</span>
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                This isn't a motivational speech. It's a tactical breakdown of the modern digital economy.
              </p>
              <div className="h-1 w-20 bg-[#FFB902] rounded-full"></div>
            </div>

            <div className="md:w-2/3 grid gap-4 w-full">
              {[
                "Deconstruct the Modern Online Economy",
                "Blueprint: 10 Halal Business Models",
                "Bootstrapping: Starting with ₦0 Capital",
                "Tech Stack: Free Tools to Run Your Empire",
                "Growth: Acquiring Your First 5 Clients",
                "Ethics: Navigating Grey Areas in Digital Trade"
              ].map((text, i) => (
                <div key={i} className="flex items-center justify-between p-6 rounded-2xl bg-[#001232] border border-white/5 hover:border-[#FFB902]/30 transition-colors group">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#001E4D] text-[#FFB902] text-xs font-bold font-mono border border-white/5">
                      0{i + 1}
                    </span>
                    <span className="text-slate-200 font-medium group-hover:text-white transition-colors">{text}</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-[#FFB902] transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- WARNING / CTA --- */}
        <section className="px-6 pb-24">
          <div className="max-w-4xl mx-auto relative rounded-[2.5rem] overflow-hidden border border-white/10">
            {/* Background Gradient for CTA */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#001845] to-[#000510]"></div>
            
            <div className="relative p-10 md:p-16 text-center">
              <div className="inline-flex items-center gap-2 text-rose-400 font-bold tracking-widest text-xs uppercase mb-6 bg-rose-500/10 px-4 py-2 rounded-full border border-rose-500/20">
                <Lock className="w-3 h-3" /> Strict Warning
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                This is for the <span className="text-white decoration-[#FFB902] underline decoration-4 underline-offset-4">serious</span> few.
              </h2>
              
              <p className="text-slate-400 max-w-xl mx-auto mb-10 text-lg">
                If you are looking for "get rich quick" schemes or aren't ready to put in the work, please do not register.
              </p>

              <button 
                onClick={openModal}
                className="w-full sm:w-auto bg-[#FFB902] hover:bg-[#E5A500] text-[#001232] px-10 py-5 rounded-full font-bold text-lg transition-all shadow-xl shadow-[#FFB902]/10 hover:shadow-[#FFB902]/30"
              >
                Claim My Free Spot
              </button>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="text-center text-slate-600 text-sm py-8 border-t border-white/5">
          © {new Date().getFullYear()} Abu Hayyan School. All rights reserved.
        </footer>
      </main>

      {/* --- REFINED MODAL --- */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-[#000510]/60 backdrop-blur-md"
            onClick={closeModal}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#001232] border border-white/10 w-full max-w-md rounded-3xl shadow-2xl overflow-hidden relative"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFB902] to-[#B38000]"></div>
              
              <button 
                onClick={closeModal}
                className="absolute top-5 right-5 text-slate-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8">
                {status === "success" ? (
                  <div className="text-center py-8">
                    <motion.div 
                      initial={{ scale: 0 }} animate={{ scale: 1 }} 
                      className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/20"
                    >
                      <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-2">You're In.</h3>
                    <p className="text-slate-400 mb-8 text-sm">
                      Masha Allah. Join the exclusive WhatsApp group to receive the class link.
                    </p>
                    <a 
                      href="https://chat.whatsapp.com/Ek0pnOcQkuEHsOAqU8cnpM"
                      target="_blank"
                      className="flex items-center justify-center w-full bg-[#25D366] hover:bg-[#1DA851] text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-green-900/20"
                    >
                       Join WhatsApp Group
                    </a>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <div className="flex items-center gap-2 mb-2">
                        <Star className="w-4 h-4 text-[#FFB902] fill-[#FFB902]" />
                        <span className="text-xs font-bold text-[#FFB902] uppercase tracking-wider">Free Masterclass</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white">Secure Your Seat</h3>
                      <p className="text-slate-400 text-sm mt-1">Limited spots available for the live session.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-slate-400 ml-1">Full Name</label>
                        <input 
                          required
                          type="text" 
                          placeholder="e.g. Abdullah Yusuf"
                          className="w-full bg-[#00091A] border border-white/10 rounded-xl p-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#FFB902] focus:ring-1 focus:ring-[#FFB902] transition-all"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-slate-400 ml-1">Email Address</label>
                        <input 
                          required
                          type="email" 
                          placeholder="name@example.com"
                          className="w-full bg-[#00091A] border border-white/10 rounded-xl p-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#FFB902] focus:ring-1 focus:ring-[#FFB902] transition-all"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>

                      <button 
                        disabled={status === "loading"}
                        className="w-full bg-[#FFB902] hover:bg-[#E5A500] text-[#001232] font-bold py-4 rounded-xl text-lg transition-all flex items-center justify-center gap-2 mt-2"
                      >
                        {status === "loading" ? (
                          <> <Loader2 className="animate-spin w-5 h-5" /> Processing... </>
                        ) : (
                          <> Confirm Registration <ArrowRight className="w-5 h-5" /> </>
                        )}
                      </button>
                    </form>
                    
                    <p className="mt-6 text-center text-[10px] text-slate-500 uppercase tracking-widest">
                      Your data is encrypted & secure
                    </p>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
