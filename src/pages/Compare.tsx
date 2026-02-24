import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Scale, Plus, X, Check, Minus } from "lucide-react";

export default function Compare() {
  const [institutes, setInstitutes] = useState<any[]>([]);
  const [selected, setSelected] = useState<any[]>([]);

  useEffect(() => {
    globalThis.fetch("/api/institutes")
      .then((res) => res.json())
      .then((data) => setInstitutes(data));
  }, []);

  const toggleSelect = (inst: any) => {
    if (selected.find(s => s.id === inst.id)) {
      setSelected(selected.filter(s => s.id !== inst.id));
    } else if (selected.length < 3) {
      setSelected([...selected, inst]);
    }
  };

  return (
    <>
      <Helmet>
        <title>Compare Institutes in Sikar | Schools, JEE & NEET</title>
        <meta name="description" content="Compare the best schools and coaching institutes in Sikar based on fees, facilities, and results." />
      </Helmet>

      <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Compare Institutes</h1>
            <p className="text-slate-600">Select up to 3 institutes to compare their features and facilities.</p>
          </div>

          {/* Selection Area */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[0, 1, 2].map((i) => (
              <div key={i} className="bg-white rounded-3xl border-2 border-dashed border-slate-200 p-8 flex flex-col items-center justify-center min-h-[200px] relative">
                {selected[i] ? (
                  <>
                    <button 
                      onClick={() => toggleSelect(selected[i])}
                      className="absolute top-4 right-4 p-1 bg-slate-100 rounded-full text-slate-400 hover:text-red-500 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                    <img src={selected[i].logo} className="w-16 h-16 rounded-xl mb-4" />
                    <p className="font-bold text-slate-900 text-center">{selected[i].name}</p>
                    <p className="text-xs text-slate-500 uppercase font-bold mt-1">{selected[i].type}</p>
                  </>
                ) : (
                  <div className="text-center">
                    <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Plus className="w-6 h-6 text-slate-300" />
                    </div>
                    <p className="text-sm font-bold text-slate-400">Add Institute</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          {selected.length > 0 && (
            <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="p-6 text-slate-400 font-bold uppercase tracking-widest text-xs border-b border-slate-100">Feature</th>
                    {selected.map(s => (
                      <th key={s.id} className="p-6 text-slate-900 font-bold border-b border-slate-100">{s.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  <tr>
                    <td className="p-6 font-bold text-slate-700">Type</td>
                    {selected.map(s => <td key={s.id} className="p-6 text-slate-600 capitalize">{s.type}</td>)}
                  </tr>
                  <tr>
                    <td className="p-6 font-bold text-slate-700">Category</td>
                    {selected.map(s => <td key={s.id} className="p-6 text-slate-600 uppercase">{s.category}</td>)}
                  </tr>
                  <tr>
                    <td className="p-6 font-bold text-slate-700">Fees Range</td>
                    {selected.map(s => <td key={s.id} className="p-6 text-indigo-600 font-bold">{s.fees_range}</td>)}
                  </tr>
                  <tr>
                    <td className="p-6 font-bold text-slate-700">Rating</td>
                    {selected.map(s => <td key={s.id} className="p-6 text-slate-600 font-bold">{s.rating} / 5.0</td>)}
                  </tr>
                  <tr>
                    <td className="p-6 font-bold text-slate-700">Hostel Available</td>
                    {selected.map(s => <td key={s.id} className="p-6 text-emerald-500"><Check className="w-5 h-5" /></td>)}
                  </tr>
                  <tr>
                    <td className="p-6 font-bold text-slate-700">Transport</td>
                    {selected.map(s => <td key={s.id} className="p-6 text-emerald-500"><Check className="w-5 h-5" /></td>)}
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {/* Selector Modal/List */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Available Institutes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {institutes.map(inst => (
                <button
                  key={inst.id}
                  onClick={() => toggleSelect(inst)}
                  className={`p-4 rounded-2xl border text-left transition-all flex items-center gap-4 ${
                    selected.find(s => s.id === inst.id)
                      ? "bg-indigo-50 border-indigo-200 ring-2 ring-indigo-500"
                      : "bg-white border-slate-100 hover:border-indigo-300"
                  }`}
                >
                  <img src={inst.logo} className="w-10 h-10 rounded-lg" />
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{inst.name}</p>
                    <p className="text-[10px] text-slate-400 uppercase font-black">{inst.type}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
