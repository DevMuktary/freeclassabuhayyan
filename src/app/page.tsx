"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2, Check } from "lucide-react";

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
    <main className="min-h-screen bg-white text-gray-900">
      
      {/* Header */}
      <nav className="border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-8 h-16 flex items-center justify-between">
          <span className="font-medium text-sm">Abu Hayyan School</span>
          <button 
            onClick={openModal}
            className="text-sm px-5 py-2 bg-gray-900 text-white hover:bg-gray-800 transition-colors"
          >
            Register
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-8 pt-20 pb-16">
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-3xl">
            <p className="text-sm text-gray-600 mb-6">Free Masterclass</p>
            
            <h1 className="text-5xl md:text-6xl font-serif leading-tight mb-8 text-gray-900">
              Ten halal business models you can start from home
            </h1>

            <p className="text-xl text-gray-700 leading-relaxed mb-10 max-w-2xl">
              A practical breakdown of legitimate online income streams that require no capital and no compromise on Islamic values.
            </p>

            <button 
              onClick={openModal}
              className="inline-flex items-center gap-2 text-base bg-gray-900 text-white px-8 py-3 hover:bg-gray-800 transition-colors"
            >
              Save your seat
            </button>
          </div>
        </motion.div>
      </section>

      {/* Three Principles */}
      <section className="border-y border-gray-200 bg-gray-50">
        <div className="max-w-5xl mx-auto px-8 py-16">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-medium mb-3">No capital required</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every business model uses free or low-cost tools. Start with skills, not savings.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-3">Completely halal</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Vetted to ensure compliance with Islamic principles. No interest, no exploitation.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-3">Actually valuable</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Real market demand. These are skills companies and individuals pay for today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="max-w-5xl mx-auto px-8 py-20">
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-serif mb-6">What you'll learn</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              This isn't motivational content. It's a technical walkthrough of ten specific business models, 
              the tools required, and how to find your first customer.
            </p>
            <div className="bg-amber-50 border-l-2 border-amber-600 p-4">
              <p className="text-sm text-gray-800">
                Includes a PDF guide and access to our mentorship community.
              </p>
            </div>
          </div>

          <div className="md:col-span-3 space-y-6">
            {[
              "The 10 business models explained",
              "Tools and platforms for each",
              "Finding your first customer",
              "Setting up payments globally",
              "Getting to your first $1,000",
              "Common beginner mistakes"
            ].map((item, i) => (
              <div key={i} className="flex gap-4 pb-6 border-b border-gray-200 last:border-0">
                <span className="text-sm text-gray-400 font-mono mt-1">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-gray-900">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-8 py-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-serif mb-6">Who this is for</h2>
            <div className="space-y-6 text-gray-300">
              <p className="leading-relaxed">
                Muslims looking to earn income online without compromising their values. Students, 
                stay-at-home parents, recent graduates, or anyone wanting to transition away from 
                traditional employment.
              </p>
              <p className="leading-relaxed">
                You don't need prior business experience. You do need internet access, basic computer 
                skills, and the willingness to learn technical tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="max-w-5xl mx-auto px-8 py-20">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-serif mb-4">About Abu Hayyan School</h2>
            <p className="text-gray-600 leading-relaxed">
              We teach practical skills alongside Islamic knowledge. This masterclass is part of our 
              ongoing effort to equip Muslims with economic independence while maintaining their deen.
            </p>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-sm text-gray-500 mb-4">The class is currently free to attend.</p>
            <button 
              onClick={openModal}
              className="self-start bg-gray-900 text-white px-8 py-3 hover:bg-gray-800 transition-colors"
            >
              Register now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 text-center">
        <p className="text-sm text-gray-500">
          © 2024 Abu Hayyan School of Skills & Deen
        </p>
      </footer>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/40"
            onClick={closeModal}
          >
            <motion.div 
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md bg-white shadow-xl relative"
            >
              <button 
                onClick={closeModal} 
                className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-10">
                {status === "success" ? (
                  <div className="text-center py-6">
                    <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check className="w-7 h-7 text-green-600" />
                    </div>
                    <h3 className="text-xl font-medium mb-3">You're registered</h3>
                    <p className="text-sm text-gray-600 mb-8 leading-relaxed">
                      Join the WhatsApp group below to receive your access link and class details.
                    </p>
                    <a 
                      href="https://chat.whatsapp.com/Ek0pnOcQkuEHsOAqU8cnpM"
                      target="_blank"
                      className="block w-full bg-[#25D366] hover:bg-[#1da851] text-white py-3 text-sm font-medium transition-colors text-center"
                    >
                      Join WhatsApp Group
                    </a>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h3 className="text-2xl font-serif mb-2">Register for the class</h3>
                      <p className="text-sm text-gray-500">Free to attend</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full name
                        </label>
                        <input 
                          required
                          type="text" 
                          className="w-full border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email address
                        </label>
                        <input 
                          required
                          type="email" 
                          className="w-full border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>

                      <button 
                        disabled={status === "loading"}
                        className="w-full bg-gray-900 text-white hover:bg-gray-800 py-3 text-sm font-medium transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                      >
                        {status === "loading" ? (
                          <>
                            <Loader2 className="animate-spin w-4 h-4" />
                            Registering...
                          </>
                        ) : (
                          "Complete registration"
                        )}
                      </button>

                      {status === "error" && (
                        <p className="text-sm text-red-600 text-center">
                          Something went wrong. Please try again.
                        </p>
                      )}
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
