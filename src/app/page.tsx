"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Loader2, Check, Plus, Minus } from "lucide-react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setStatus("idle");
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
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
    <main className="min-h-screen bg-[#001232] text-white selection:bg-[#FFB902] selection:text-[#001232] font-sans">
      
      {/* --- GRID BACKGROUND TEXTURE --- */}
      <div className="fixed inset-0 opacity-[0.05] pointer-events-none"
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
      </div>

      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 left-0 right-0 z-40 border-b border-white/10 bg-[#001232]/90 backdrop-blur-md">
        <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="w-2 h-2 bg-[#FFB902]"></div>
             <span className="font-mono text-xs tracking-[0.2em] uppercase">Abu Hayyan School</span>
          </div>
          <button 
            onClick={openModal}
            className="hidden md:block border border-[#FFB902] text-[#FFB902] px-6 py-2 text-xs font-bold tracking-widest uppercase hover:bg-[#FFB902] hover:text-[#001232] transition-all"
          >
            Join Class
          </button>
        </div>
      </nav>

      <div className="max-w-[1400px] mx-auto border-x border-white/10 pt-20">

        {/* --- HERO SECTION --- */}
        <section className="relative px-6 py-24 md:py-32 border-b border-white/10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-8">
              <span className="font-mono text-[#FFB902] text-xs tracking-widest uppercase">
                • One Day Online Class
              </span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-8xl leading-[1.05] mb-8">
              Halal Digital <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB902] to-[#FFE584]">Hustles</span> From Home
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl border-l-2 border-[#FFB902] pl-6">
              10 Online Businesses You Can Do From Home Without Stepping Out.
            </p>

            <div className="mt-12">
               <button 
                onClick={openModal}
                className="group relative inline-flex items-center justify-center bg-white text-[#001232] px-10 py-5 text-sm font-bold tracking-widest uppercase overflow-hidden hover:bg-[#FFB902] transition-colors duration-300"
              >
                Secure Free Seat
                <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </section>

        {/* --- MARQUEE: WHO CAN JOIN --- */}
        <div className="border-b border-white/10 bg-[#FFB902] overflow-hidden py-3">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(4)].map((_, i) => (
               <div key={i} className="flex items-center">
                 {["Students", "Stay at Home Individuals", "Workers looking for extra income", "Anyone tired of waiting"].map((text, j) => (
                   <span key={j} className="text-[#001232] font-mono text-sm font-bold uppercase tracking-widest mx-8">
                     {text} •
                   </span>
                 ))}
               </div>
            ))}
          </div>
        </div>

        {/* --- TWO COLUMN LAYOUT: COVERAGE & GAINS --- */}
        <section className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x border-white/10">
          
          {/* COLUMN 1: WHAT IT COVERS */}
          <div className="p-8 md:p-16">
            <h3 className="font-serif text-3xl mb-8">What This Class Will Cover</h3>
            <div className="space-y-0">
              {[
                "Overview of the online economy",
                "The 10 online businesses you can start from home",
                "How each business works",
                "Skills required for each one",
                "Startup tools you need",
                "How to start with little or no capital",
                "Common mistakes beginners make",
                "How to choose the one that fits you",
                "How to get your first client or customer",
                "Next steps after the class"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 py-4 border-b border-white/10 group hover:pl-4 transition-all duration-300 cursor-default">
                  <span className="font-mono text-xs text-[#FFB902] mt-1">0{i+1}</span>
                  <span className="text-gray-300 group-hover:text-white font-light text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* COLUMN 2: GAINS & WARNING */}
          <div className="bg-[#000F2A] flex flex-col">
            
            {/* GAINS */}
            <div className="p-8 md:p-16 flex-1">
              <h3 className="font-serif text-3xl mb-8">What You Will Gain</h3>
              <ul className="grid gap-6">
                {[
                  "Clear understanding of online business options",
                  "Practical steps",
                  "Ability to pick one path and focus",
                  "One day intensive session",
                  "Live teaching",
                  "Question and answer session",
                  "Practical examples",
                  "Simple explanations"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-[#FFB902]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* NOT FOR WHO SECTION (Red Warning) */}
            <div className="p-8 md:p-16 border-t border-white/10 bg-red-900/10">
              <h4 className="font-mono text-xs text-red-500 uppercase tracking-widest mb-4">Who This Class Is NOT For</h4>
              <div className="space-y-2">
                {[
                  "People looking for quick money",
                  "Those not ready to learn",
                  "Those who will not implement what is learnt"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-red-200/80">
                    <X className="w-4 h-4" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* --- FAQ SECTION (DETAILS) --- */}
        <section className="border-y border-white/10">
          <div className="grid md:grid-cols-12">
            <div className="md:col-span-4 p-8 md:p-16 border-b md:border-b-0 md:border-r border-white/10">
              <h3 className="font-serif text-3xl">Details</h3>
            </div>
            <div className="md:col-span-8">
              {[
                { q: "Where is the class going to hold?", a: "Mode: Online (Join from your phone or laptop)" },
                { q: "Is there any cost?", a: "Registration is 100% FREE." },
                { q: "Are there any bonuses?", a: "Yes. You will receive a Free Ebook and Guidance on the next move." },
                { q: "Who organizes this?", a: "Presented by Abu Hayyan School of Skills and Deen." }
              ].map((faq, i) => (
                <div key={i} className="border-b border-white/10 last:border-0">
                  <button 
                    onClick={() => toggleFaq(i)}
                    className="w-full text-left p-8 flex items-center justify-between hover:bg-white/5 transition-colors"
                  >
                    <span className="font-medium text-lg">{faq.q}</span>
                    {openFaqIndex === i ? <Minus className="text-[#FFB902]" /> : <Plus className="text-gray-500" />}
                  </button>
                  <AnimatePresence>
                    {openFaqIndex === i && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-8 text-gray-400 font-light">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer className="py-24 px-6 text-center bg-[#000F2A]">
          <h2 className="font-serif text-4xl md:text-6xl text-white mb-8">
            Start Your Halal Hustle.
          </h2>
          <button 
            onClick={openModal}
            className="bg-[#FFB902] text-[#001232] px-12 py-6 text-sm font-bold tracking-[0.2em] uppercase hover:bg-white transition-all"
          >
            Register Now
          </button>
          
          <div className="mt-20 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-mono uppercase tracking-widest pt-8 border-t border-white/5 max-w-4xl mx-auto">
            <span>© 2026 Abu Hayyan School</span>
            <span>Skills & Deen</span>
          </div>
        </footer>

      </div>

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
              className="w-full max-w-lg bg-[#000F2A] border border-white/20 shadow-2xl relative"
            >
              <button onClick={closeModal} className="absolute top-4 right-4 text-white hover:text-[#FFB902] transition-colors">
                <X className="w-6 h-6" />
              </button>

              <div className="p-10 md:p-14">
                {status === "success" ? (
                  <div className="text-center">
                    <div className="w-16 h-16 border-2 border-[#FFB902] rounded-full flex items-center justify-center mx-auto mb-6 text-[#FFB902]">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="font-serif text-3xl text-white mb-4">You're In.</h3>
                    <p className="text-gray-400 mb-8 font-light">
                      Registration successful. Join the WhatsApp group to receive the class link.
                    </p>
                    <a 
                      href="https://chat.whatsapp.com/Ek0pnOcQkuEHsOAqU8cnpM"
                      target="_blank"
                      className="block w-full bg-[#25D366] hover:bg-white hover:text-[#001232] text-white py-4 font-mono text-sm font-bold tracking-widest uppercase transition-all text-center"
                    >
                      Join WhatsApp Group
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="text-center mb-8">
                      <h3 className="font-serif text-2xl text-white">Reserve Your Spot</h3>
                      <p className="text-xs font-mono text-[#FFB902] uppercase tracking-widest mt-2">Free Registration</p>
                    </div>

                    <div className="space-y-6">
                       <div>
                        <label className="block font-mono text-xs text-gray-500 uppercase tracking-widest mb-2">Full Name</label>
                        <input 
                          required
                          type="text" 
                          className="w-full bg-[#001232] border border-white/20 p-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#FFB902] transition-colors"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                       </div>
                       <div>
                        <label className="block font-mono text-xs text-gray-500 uppercase tracking-widest mb-2">Email Address</label>
                        <input 
                          required
                          type="email" 
                          className="w-full bg-[#001232] border border-white/20 p-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#FFB902] transition-colors"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                       </div>
                    </div>

                    <button 
                      disabled={status === "loading"}
                      className="w-full bg-[#FFB902] text-[#001232] hover:bg-white py-5 font-mono text-sm font-bold tracking-widest uppercase transition-colors"
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
      
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </main>
  );
}
