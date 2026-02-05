"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, ArrowRight, Loader2 } from "lucide-react";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

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

  if (status === "success") {
    return (
      <div className="min-h-screen bg-brand-navy flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy mb-2">Registration Successful!</h2>
          <p className="text-gray-600 mb-6">
            Masha Allah! You have secured your spot. Please check your email for confirmation.
          </p>
          
          <div className="bg-brand-navy/5 p-4 rounded-xl border border-brand-navy/10 mb-6">
            <p className="font-semibold text-brand-navy mb-3">Final Step: Join the Class Group 👇</p>
            <a 
              href="https://chat.whatsapp.com/Ek0pnOcQkuEHsOAqU8cnpM"
              target="_blank"
              className="block w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Join WhatsApp Group
            </a>
          </div>
          <p className="text-xs text-gray-400">Please check your promotions tab if you don't see the email.</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-brand-navy text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 md:px-8 max-w-6xl mx-auto text-center">
        <div className="inline-block px-4 py-1 rounded-full bg-brand-gold/10 border border-brand-gold text-brand-gold text-sm font-semibold mb-6">
          ABU HAYYAN SCHOOL OF SKILLS AND DEEN PRESENTS
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Halal Digital <span className="text-brand-gold">Hustles</span> <br/> From Home
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8">
          10 Online Businesses You Can Do From Home Without Stepping Out.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/10">
            📅 One Day Online Class
          </div>
          <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/10">
            💻 Mode: Online
          </div>
          <div className="bg-brand-gold text-brand-navy px-6 py-3 rounded-lg font-bold">
            💰 Free Registration
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="max-w-6xl mx-auto px-4 pb-20 grid md:grid-cols-2 gap-12">
        
        {/* Left Column: Details */}
        <div className="space-y-12">
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-brand-gold/50 transition-colors">
            <h3 className="text-2xl font-bold text-brand-gold mb-4">What You Will Gain</h3>
            <ul className="space-y-3">
              {[
                "Clear understanding of online business options",
                "Practical steps to start immediately",
                "Ability to pick one path and focus",
                "Live teaching & Q/A session",
                "Simple explanations (No tech jargon)",
                "Bonus: Free ebook & Guidance"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 mt-1" />
                  <span className="text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
             <h3 className="text-xl font-bold text-white mb-4">Who Can Join?</h3>
             <div className="flex flex-wrap gap-2">
               {["Students", "Stay at home moms", "Workers needing extra income", "Complete Beginners"].map((tag, i) => (
                 <span key={i} className="bg-brand-navy shadow-sm border border-brand-gold/20 px-3 py-1 rounded-full text-sm text-gray-300">
                   {tag}
                 </span>
               ))}
             </div>
          </div>

          <div className="border-l-4 border-red-500 pl-4 py-2">
            <h4 className="text-red-400 font-bold uppercase text-sm tracking-wider mb-1">Not For You If:</h4>
            <p className="text-gray-400 text-sm">
              You are looking for quick money, not ready to learn, or won't implement what is taught.
            </p>
          </div>
        </div>

        {/* Right Column: Registration Form */}
        <div className="relative">
          <div className="bg-white text-brand-navy rounded-2xl p-8 shadow-2xl sticky top-8 border-4 border-brand-gold">
            <h3 className="text-2xl font-bold mb-2">Secure Your Free Spot</h3>
            <p className="text-gray-600 mb-6">Spaces are limited. Register now to get the access link.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-1">Full Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="e.g. Abdullah Yusuf"
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-gold outline-none"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-1">Email Address</label>
                <input 
                  required
                  type="email" 
                  placeholder="name@example.com"
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-gold outline-none"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <button 
                disabled={status === "loading"}
                className="w-full bg-brand-gold hover:bg-brand-goldHover text-brand-navy font-bold py-4 rounded-lg text-lg transition-all flex items-center justify-center gap-2"
              >
                {status === "loading" ? (
                  <> <Loader2 className="animate-spin" /> Registering... </>
                ) : (
                  <> Register for Free <ArrowRight className="w-5 h-5" /> </>
                )}
              </button>
            </form>
            
            <div className="mt-6 text-center text-sm text-gray-500 border-t pt-4">
              By registering, you agree to receive updates about future classes from Abu Hayyan School.
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}
