import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Search, Trophy, BookOpen, Users } from "lucide-react";
import { Institute } from "../types";
import InstituteCard from "../components/InstituteCard";

export default function JEE() {
  const [institutes, setInstitutes] = useState<Institute[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    globalThis.fetch("/api/institutes?type=jee")
      .then((res) => res.json())
      .then((data) => {
        setInstitutes(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>Best JEE Coaching in Sikar | Top IIT-JEE Institutes</title>
        <meta name="description" content="Find the best JEE coaching in Sikar. Compare PCP Sikar, Allen, and other top institutes for IIT-JEE Main & Advanced preparation." />
      </Helmet>

      <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Header */}
          <div className="bg-indigo-900 rounded-[3rem] p-8 lg:p-16 mb-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-800 rounded-full blur-3xl -mr-32 -mt-32 opacity-50"></div>
            <div className="relative z-10 max-w-2xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/20 text-indigo-200 text-xs font-bold uppercase tracking-widest mb-6 border border-indigo-500/30">
                IIT-JEE Preparation Hub
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">Crack JEE with Sikar's Top Coaching</h1>
              <p className="text-indigo-100 text-lg mb-8 leading-relaxed">
                Sikar is home to some of the finest JEE coaching institutes in India. Explore verified listings and start your journey to IIT today.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <Trophy className="w-6 h-6 text-amber-400" />
                  <span className="font-semibold">Top Ranks Every Year</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-indigo-300" />
                  <span className="font-semibold">Expert Faculty</span>
                </div>
              </div>
            </div>
          </div>

          {/* Search & Results */}
          <div className="mb-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <h2 className="text-2xl font-bold text-slate-900">All JEE Coaching Institutes</h2>
            <div className="w-full md:w-96 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search coaching..." 
                className="w-full pl-12 pr-4 py-3 bg-white rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
              />
            </div>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => (
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
