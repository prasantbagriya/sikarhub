import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Send, CheckCircle2, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Enquiry() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    class: "",
    stream: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await globalThis.fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
        // Redirect to WhatsApp after 2 seconds
        setTimeout(() => {
          const message = encodeURIComponent(`Hello! My name is ${formData.name}. I am interested in admission for Class ${formData.class} (${formData.stream}). Please provide more details.`);
          window.open(`https://wa.me/919610892222?text=${message}`, "_blank");
        }, 2000);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Helmet>
        <title>Admission Enquiry | Sikar Education Hub</title>
        <meta name="description" content="Fill out the admission enquiry form to get details about the best schools and coaching institutes in Sikar." />
      </Helmet>

      <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden border border-slate-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Side - Info */}
              <div className="bg-indigo-600 p-12 text-white flex flex-col justify-center">
                <h1 className="text-4xl font-bold mb-6">Get Expert Admission Guidance</h1>
                <p className="text-indigo-100 mb-10 leading-relaxed">
                  Fill out the form and our experts will help you choose the best institute in Sikar based on your goals and budget.
                </p>
                <div className="space-y-6">
                  {[
                    "Free Counseling Session",
                    "Fee Structure Comparison",
                    "Hostel & Transport Info",
                    "Scholarship Assistance"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-indigo-300" />
                      <span className="font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="p-12">
                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Student Name</label>
                        <input
                          required
                          type="text"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                          placeholder="Enter full name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                        <input
                          required
                          type="tel"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                          placeholder="Enter 10 digit mobile number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-bold text-slate-700 mb-2">Class</label>
                          <select
                            required
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                            value={formData.class}
                            onChange={(e) => setFormData({ ...formData, class: e.target.value })}
                          >
                            <option value="">Select</option>
                            <option value="8">8th</option>
                            <option value="9">9th</option>
                            <option value="10">10th</option>
                            <option value="11">11th</option>
                            <option value="12">12th</option>
                            <option value="Target">Target (Dropper)</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-slate-700 mb-2">Stream</label>
                          <select
                            required
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                            value={formData.stream}
                            onChange={(e) => setFormData({ ...formData, stream: e.target.value })}
                          >
                            <option value="">Select</option>
                            <option value="School">Schooling</option>
                            <option value="JEE">JEE Coaching</option>
                            <option value="NEET">NEET Coaching</option>
                            <option value="Foundation">Foundation</option>
                          </select>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-100"
                      >
                        Submit Enquiry <Send className="w-4 h-4" />
                      </button>
                      <p className="text-center text-xs text-slate-400">
                        By submitting, you agree to be contacted via Call/WhatsApp.
                      </p>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12 space-y-6"
                    >
                      <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-slate-900">Enquiry Submitted!</h2>
                      <p className="text-slate-600">
                        Thank you for your interest. We are redirecting you to WhatsApp for instant support...
                      </p>
                      <div className="flex items-center justify-center gap-2 text-emerald-600 font-bold">
                        <MessageCircle className="w-5 h-5" /> Connecting to WhatsApp
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
