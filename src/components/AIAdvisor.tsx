import React, { useState, useMemo } from "react";
import { GoogleGenAI } from "@google/genai";
import { Sparkles, Send, Loader2, Bot } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function AIAdvisor() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const ai = useMemo(() => {
    const apiKey = process.env.GEMINI_API_KEY || "";
    return new GoogleGenAI({ apiKey });
  }, []);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setResponse("");

    try {
      const model = "gemini-3-flash-preview";
      const result = await ai.models.generateContent({
        model,
        contents: [
          {
            role: "user",
            parts: [{ text: `You are an expert education consultant for Sikar, Rajasthan. Answer the following question about schools, coaching institutes (JEE/NEET), or life in Sikar. Be helpful, accurate, and promote Sikar as a great education hub. Question: ${query}` }]
          }
        ],
        config: {
          systemInstruction: "You are SikarEduHub AI, a helpful assistant for students and parents looking for education in Sikar. You know about Prince Academy, PCP, CLC, Matrix, Allen Sikar, etc. Keep answers concise and professional."
        }
      });

      setResponse(result.text || "I'm sorry, I couldn't find an answer to that. Please try calling our experts.");
    } catch (error) {
      console.error("AI Error:", error);
      setResponse("Our AI is currently busy. Please try again later or contact us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-indigo-50/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] shadow-2xl shadow-indigo-100 border border-indigo-50 overflow-hidden">
          <div className="bg-indigo-600 p-8 lg:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full blur-3xl -mr-32 -mt-32 opacity-50"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-white/20 p-2 rounded-lg backdrop-blur-md">
                  <Sparkles className="w-6 h-6 text-indigo-200" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-100">AI Powered Guidance</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ask SikarEduHub AI Advisor</h2>
              <p className="text-indigo-100 text-lg">Get instant answers about fees, best schools, or coaching institutes in Sikar.</p>
            </div>
          </div>

          <div className="p-8 lg:p-12">
            <form onSubmit={handleAsk} className="relative mb-8">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g., Which is the best school for CBSE in Sikar?"
                className="w-full pl-6 pr-16 py-5 bg-slate-50 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-slate-700"
              />
              <button
                type="submit"
                disabled={loading}
                className="absolute right-2 top-2 bottom-2 bg-indigo-600 text-white px-6 rounded-xl font-bold hover:bg-indigo-700 transition-all flex items-center justify-center disabled:opacity-50"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
              </button>
            </form>

            <AnimatePresence>
              {response && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-indigo-50/50 rounded-2xl p-6 border border-indigo-100 flex gap-4"
                >
                  <div className="bg-indigo-600 w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-bold text-indigo-600 uppercase tracking-wider">AI Advisor Response</p>
                    <p className="text-slate-700 leading-relaxed">{response}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {!response && !loading && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Best JEE coaching in Sikar?",
                  "Prince Academy fees for Class 11?",
                  "Is Sikar safe for girls students?",
                  "Top 5 schools in Sikar city?"
                ].map((q, i) => (
                  <button
                    key={i}
                    onClick={() => setQuery(q)}
                    className="text-left px-4 py-3 rounded-xl border border-slate-100 text-sm text-slate-500 hover:border-indigo-200 hover:bg-indigo-50 transition-all"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
