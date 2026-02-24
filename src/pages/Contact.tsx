import { Helmet } from "react-helmet-async";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Sikar Education Hub</title>
        <meta name="description" content="Get in touch with Sikar Education Hub for any queries or support." />
      </Helmet>

      <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Get in Touch</h1>
            <p className="text-slate-600">Have questions? We're here to help you navigate Sikar's education hub.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-indigo-50 p-3 rounded-xl">
                    <Phone className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Call Us</p>
                    <p className="text-lg font-bold text-slate-900">+91 96108 92222</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-emerald-50 p-3 rounded-xl">
                    <MessageCircle className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">WhatsApp</p>
                    <p className="text-lg font-bold text-slate-900">+91 96108 92222</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-rose-50 p-3 rounded-xl">
                    <Mail className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Us</p>
                    <p className="text-lg font-bold text-slate-900">info@sikareduhub.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white">
                <h3 className="text-xl font-bold mb-6">Our Office</h3>
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-indigo-400 shrink-0" />
                  <p className="text-slate-300 leading-relaxed">
                    Piprali Road, Near Prince Academy,<br />
                    Sikar, Rajasthan - 332001
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-sm border border-slate-100">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-500" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-500" placeholder="john@example.com" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-slate-700">Subject</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-500" placeholder="How can we help?" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-slate-700">Message</label>
                  <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your message here..."></textarea>
                </div>
                <div className="md:col-span-2">
                  <button className="bg-indigo-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all flex items-center gap-2 shadow-lg shadow-indigo-100">
                    Send Message <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
