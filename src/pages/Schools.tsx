import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import { Institute } from "../types";
import InstituteCard from "../components/InstituteCard";

export default function Schools() {
  const [institutes, setInstitutes] = useState<Institute[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    globalThis.fetch("/api/institutes?type=school")
      .then((res) => res.json())
      .then((data) => {
        setInstitutes(data);
        setLoading(false);
      });
  }, []);

  const filtered = institutes.filter(inst => filter === "all" || inst.category.toLowerCase() === filter.toLowerCase());

  return (
    <>
      <Helmet>
        <title>Best Schools in Sikar | CBSE, RBSE & English Medium Schools</title>
        <meta name="description" content="Explore the top-rated schools in Sikar. Compare Prince Academy, Prince CBSE, and other leading schools for your child's future." />
      </Helmet>

      <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Top Schools in Sikar</h1>
            <p className="text-slate-600">Discover the best CBSE, RBSE, and English Medium schools with world-class facilities.</p>
          </div>

          {/* Filters & Search */}
          <div className="flex flex-col lg:flex-row gap-6 mb-12">
            <div className="flex-grow relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search by school name or area..." 
                className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none shadow-sm"
              />
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
              {["All", "CBSE", "RBSE", "English Medium"].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f.toLowerCase())}
                  className={`px-6 py-4 rounded-2xl font-bold text-sm whitespace-nowrap transition-all ${
                    filter === f.toLowerCase() 
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200" 
                      : "bg-white text-slate-600 border border-slate-200 hover:border-indigo-300"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="h-96 bg-slate-200 animate-pulse rounded-3xl"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((inst) => (
                <InstituteCard key={inst.id} institute={inst} />
              ))}
            </div>
          )}
          
          {!loading && filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-500 text-lg">No schools found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
