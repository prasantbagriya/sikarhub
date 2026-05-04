import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Search, HeartPulse, Stethoscope, Award } from "lucide-react";
import { Institute } from "../types";
import InstituteCard from "../components/InstituteCard";

export default function NEET() {
  const [institutes, setInstitutes] = useState<Institute[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/institutes?type=neet")
      .then((res) => res.json())
      .then((data) => {
        setInstitutes(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>Best NEET Coaching in Sikar (2025) | Top Medical Institutes</title>
        <meta name="description" content="Find the best NEET coaching in Sikar. Compare PCP Sikar, CLC, GCI, and other top medical coaching institutes. Verified results and fee structures for NEET 2025." />
        <meta name="keywords" content="Best NEET coaching Sikar, Top medical coaching in Sikar, PCP Sikar NEET results, CLC Sikar NEET, GCI Sikar, NEET preparation Sikar" />
      </Helmet>

      <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Header */}
          <div className="bg-emerald-900 rounded-[3rem] p-8 lg:p-16 mb-16 text-white relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-800 rounded-full blur-3xl -ml-32 -mb-32 opacity-50"></div>
            <div className="relative z-10 max-w-2xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-200 text-xs font-bold uppercase tracking-widest mb-6 border border-emerald-500/30">
                Medical Entrance Hub
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Become a Doctor with Sikar's Best</h1>
              <p className="text-emerald-100 text-lg mb-8 leading-relaxed">
                Sikar produces thousands of medical professionals every year. Join the ranks of successful NEET candidates with expert guidance.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <Stethoscope className="w-6 h-6 text-emerald-400" />
                  <span className="font-semibold">Dedicated Medical Faculty</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-amber-400" />
                  <span className="font-semibold">Proven Success Record</span>
                </div>
              </div>
            </div>
          </div>

          {/* Search & Results */}
          <div className="mb-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <h2 className="text-2xl font-bold text-slate-900">All NEET Coaching Institutes</h2>
            <div className="w-full md:w-96 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search medical coaching..." 
                className="w-full pl-12 pr-4 py-3 bg-white rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
              />
            </div>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2].map(i => (
                <div key={i} className="h-96 bg-slate-200 animate-pulse rounded-3xl"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {institutes.map((inst) => (
                <InstituteCard key={inst.id} institute={inst} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
