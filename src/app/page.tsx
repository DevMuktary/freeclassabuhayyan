"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Loader2, Check, Globe, Laptop, Smartphone } from "lucide-react";

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
    <main className="min-h-screen bg-[#001232] text-white relative font-sans selection:bg-[#FFB902] selection:text-[#001232]">
      
      {/* NOISE TEXTURE OVERLAY (Removes the flat digital look) */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }}>
      </div>

      {/* --- BORDER FRAME (The Container) --- */}
      <div className="relative z-10 max-w-[1400px] mx-auto border-x border-white/10 min-h-screen flex flex-col">
        
        {/* HEADER */}
        <header className="flex justify-between items-center border-b border-white/10 p-6 md:p-8">
          <div className="font-mono text-xs text-[#FFB902] tracking-widest uppercase">
            [ Abu Hayyan School ]
          </div>
          <div className="hidden md:flex gap-8 text-xs font-mono tracking-widest text-gray-400">
            <span>SKILLS & DEEN</span>
            <span>EST. 2026</span>
          </div>
          <button 
            onClick={openModal}
            className="text-xs font-bold uppercase tracking-widest hover:text-[#FFB902] transition-colors"
          >
            Register Now
          </button>
        </header>

        {/* HERO SECTION */}
        <section className="flex-1 flex flex-col justify-center px-6 md:px-16 py-20 border-b border-white/10">
          <div className="max-w-5xl">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="font-mono text-[#FFB902] mb-4 text-xs md:text-sm tracking-widest">
                /// ONE DAY ONLINE MASTERCLASS
              </div>
              
              <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.9] text-white mb-10">
                Halal Digital <br/>
                <span className="italic text-[#FFB902] pl-4 md:pl-12">Hustles.</span>
              </h1>

              <div className="grid md:grid-cols-2 gap-12 items-end">
                <p className="text-gray-400 font-sans text-lg leading-relaxed max-w-md">
                  We are dismantling the myth that you need interest (Riba) or shady tactics to make money online. 
                  <span className="text-white block mt-2">10 Business Models. Zero Compromise.</span>
                </p>

                <div className="flex justify-start md:justify-end">
                  <button 
                    onClick={openModal}
                    className="group bg-[#FFB902] text-[#001232] px-10 py-5 font-mono text-sm font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300"
                  >
                    Secure Free Seat 
                    <ArrowRight className="inline-block ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* MARQUEE STRIP */}
        <div className="border-b border-white/10 overflow-hidden py-4 bg-[#FFB902] text-[#001232]">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="mx-8 font-mono font-bold text-sm tracking-widest uppercase">
                 Online Business • Zero Riba • Remote Skills •
              </span>
            ))}
          </div>
        </div>

        {/* GRID CONTENT */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x border-white/10">
          
          {/* Box 1 */}
          <div className="p-10 md:p-14 group hover:bg-white/5 transition-colors">
            <Globe className="w-8 h-8 text-[#FFB902] mb-6 stroke-1" />
            <h3 className="font-serif text-2xl mb-4">The Economy</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Understand how money moves on the internet in 2026. Stop guessing and start positioning yourself where the flow is.
            </p>
          </div>

          {/* Box 2 */}
          <div className="p-10 md:p-14 group hover:bg-white/5 transition-colors">
            <Laptop className="w-8 h-8 text-[#FFB902] mb-6 stroke-1" />
            <h3 className="font-serif text-2xl mb-4">The Mechanics</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              We break down the technical setup. No "tech bro" jargon. Just simple steps: Click this, sign up here, post this.
            </p>
          </div>

          {/* Box 3 */}
          <div className="p-10 md:p-14 group hover:bg-white/5 transition-colors">
            <Smartphone className="w-8 h-8 text-[#FFB902] mb-6 stroke-1" />
            <h3 className="font-serif text-2xl mb-4">The Execution</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              How to get your first client using nothing but your phone and a proper proposal script (which we will provide).
            </p>
          </div>

        </section>

        {/* CURRICULUM LIST (Brutalist List) */}
        <section className="border-t border-white/10">
          <div className="grid md:grid-cols-12">
            <div className="md:col-span-4 p-10 md:p-14 border-b md:border-b-0 md:border-r border-white/10">
              <h2 className="font-serif text-4xl mb-2">Curriculum</h2>
              <p className="font-mono text-xs text-[#FFB902] uppercase tracking-widest">Version 1.0</p>
            </div>
            
            <div className="md:col-span-8">
              {[
                "10 Online Businesses Overview",
                "Setting Up Your Digital Storefront",
                "Zero-Capital Marketing Strategies",
                "Client Acquisition & Negotiation",
                "Islamic Finance in Digital Economy",
                "Scaling & Automation Tools"
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-6 md:p-8 border-b border-white/10 hover:bg-white hover:text-[#001232] transition-all duration-300 cursor-default group">
                  <span className="font-sans text-lg md:text-xl font-light">{item}</span>
                  <span className="font-mono text-xs opacity-50 group-hover:opacity-100">MOD 0{i+1}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="p-10 md:p-14 border-t border-white/10 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <div className="font-serif text-2xl mb-2">Abu Hayyan School</div>
            <div className="text-gray-500 text-sm">Skills & Deen</div>
          </div>
          <div className="text-right">
             <button onClick={openModal} className="text-[#FFB902] font-mono text-sm underline hover:text-white transition-colors">
               Admin Login
             </button>
             <p className="text-gray-600 text-xs mt-2 font-mono uppercase tracking-widest">© 2026 Quadrox Tech</p>
          </div>
        </footer>

      </div>

      {/* --- SHARP EDGED MODAL --- */}
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
              // SHARP CORNERS, THICK BORDER
              className="w-full max-w-lg bg-[#000F2A] border-2 border-[#FFB902] relative"
            >
              
              <div className="bg-[#FFB902] text-[#001232] p-2 font-mono text-xs font-bold uppercase tracking-widest text-center">
                New Student Registration
              </div>

              <button onClick={closeModal} className="absolute top-4 right-4 text-white hover:text-[#FFB902] transition-colors">
                <X className="w-6 h-6" />
              </button>

              <div className="p-10 md:p-12">
                {status === "success" ? (
                  <div className="text-center">
                    <Check className="w-12 h-12 text-[#FFB902] mx-auto mb-6" />
                    <h3 className="font-serif text-3xl text-white mb-4">You're In.</h3>
                    <p className="text-gray-400 mb-8 font-sans">
                      We've sent a confirmation email. To get the class link, you must join the WhatsApp group below.
                    </p>
                    <a 
                      href="https://chat.whatsapp.com/Ek0pnOcQkuEHsOAqU8cnpM"
                      target="_blank"
                      className="block w-full bg-[#25D366] hover:bg-white hover:text-[#001232] text-white py-4 font-mono text-sm font-bold tracking-widest uppercase transition-all text-center border border-transparent hover:border-black"
                    >
                      [ Join WhatsApp Group ]
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-6">
                       <div>
                        <label className="block font-mono text-xs text-[#FFB902] uppercase tracking-widest mb-2">Name</label>
                        <input 
                          required
                          type="text" 
                          className="w-full bg-transparent border-b border-white/20 py-2 text-xl font-serif text-white placeholder-white/10 focus:outline-none focus:border-[#FFB902] transition-all rounded-none"
                          placeholder="Abdullah Yusuf"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                       </div>
                       <div>
                        <label className="block font-mono text-xs text-[#FFB902] uppercase tracking-widest mb-2">Email</label>
                        <input 
                          required
                          type="email" 
                          className="w-full bg-transparent border-b border-white/20 py-2 text-xl font-serif text-white placeholder-white/10 focus:outline-none focus:border-[#FFB902] transition-all rounded-none"
                          placeholder="email@address.com"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                       </div>
                    </div>

                    <button 
                      disabled={status === "loading"}
                      className="w-full bg-white text-[#001232] hover:bg-[#FFB902] py-5 font-mono text-sm font-bold tracking-widest uppercase transition-colors"
                    >
                      {status === "loading" ? <Loader2 className="animate-spin w-5 h-5 mx-auto" /> : "Confirm Registration"}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Animation Styles for Marquee */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </main>
  );
}
