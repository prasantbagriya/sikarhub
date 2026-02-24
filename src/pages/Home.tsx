import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Search, ArrowRight, Star, Award, Users, BookOpen, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Institute } from "../types";
import InstituteCard from "../components/InstituteCard";

export default function Home() {
  const [featured, setFeatured] = useState<Institute[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    globalThis.fetch("/api/institutes?featured=true")
      .then((res) => res.json())
      .then((data) => setFeatured(data));
  }, []);

  return (
    <>
      <Helmet>
        <title>Sikar EduHub | No.1 Education & Coaching Directory in Sikar</title>
        <meta name="description" content="Discover the best schools, JEE, and NEET coaching institutes in Sikar. Verified listings for PCP Sikar, Prince Academy, and more." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-50 via-white to-white opacity-70"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-sm font-semibold mb-6 border border-indigo-100">
              <Star className="w-4 h-4 fill-indigo-600" />
              Sikar's Most Trusted Directory
            </span>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.1]">
              Find the Best Education <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                In Sikar City
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-slate-600 mb-10 leading-relaxed">
              Complete listing of Schools, JEE, and NEET Coaching Institutes. Compare, Enquire, and choose the right path for your future.
            </p>

            {/* Search Bar */}
            <div className="max-w-3xl mx-auto relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative flex flex-col md:flex-row gap-2 bg-white p-2 rounded-2xl shadow-xl border border-slate-100">
                <div className="flex-grow flex items-center px-4 gap-3 border-b md:border-b-0 md:border-r border-slate-100">
                  <Search className="w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search Schools, JEE or NEET Coaching..."
                    className="w-full py-3 bg-transparent outline-none text-slate-700 placeholder:text-slate-400"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <button className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-all flex items-center justify-center gap-2">
                  Search Now
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Institutes */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Top Featured Institutes</h2>
              <p className="text-slate-600">Handpicked premium institutions known for their excellence in education and results.</p>
            </div>
            <Link to="/schools" className="flex items-center gap-2 text-indigo-600 font-bold hover:gap-3 transition-all">
              View All Listings <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featured.map((inst) => (
              <InstituteCard key={inst.id} institute={inst} featured />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Explore by Category</h2>
            <p className="text-slate-600">Find the right type of institution for your educational needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "CBSE Schools", icon: Award, path: "/schools", color: "bg-blue-500", desc: "Top CBSE affiliated schools with modern facilities." },
              { title: "JEE Coaching", icon: BookOpen, path: "/jee", color: "bg-indigo-500", desc: "Best institutes for IIT-JEE Main & Advanced preparation." },
              { title: "NEET Coaching", icon: Users, path: "/neet", color: "bg-emerald-500", desc: "Premier medical coaching for NEET aspirants." },
            ].map((cat, i) => (
              <Link
                key={i}
                to={cat.path}
                className="group bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className={`${cat.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <cat.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{cat.title}</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">{cat.desc}</p>
                <span className="inline-flex items-center gap-2 text-indigo-600 font-bold text-sm">
                  Explore More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sikar? */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
              <img
                src="https://picsum.photos/seed/sikar/800/600"
                alt="Sikar Education Hub"
                className="relative rounded-3xl shadow-2xl z-10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="bg-amber-100 p-3 rounded-xl">
                    <Star className="w-6 h-6 text-amber-600 fill-amber-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">100k+</p>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Students in Sikar</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-slate-900 leading-tight">
                Why Choose Sikar for Your <br />
                <span className="text-indigo-600">Education Journey?</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Sikar has emerged as the second Kota of India. With world-class coaching institutes like PCP and schools like Prince Academy, it offers a perfect environment for academic success.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Top Results", desc: "Consistent top ranks in JEE, NEET, and Board exams every year." },
                  { title: "Safe Environment", desc: "A peaceful and student-friendly city with excellent hostel facilities." },
                  { title: "Affordable Education", desc: "Quality education at a fraction of the cost compared to other metros." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="bg-indigo-50 w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all"
              >
                Learn More About Sikar <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { label: "Institutes", value: "500+" },
              { label: "Students", value: "200k+" },
              { label: "Success Rate", value: "85%" },
              { label: "Verified", value: "100%" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-4xl lg:text-5xl font-extrabold text-white mb-2">{stat.value}</p>
                <p className="text-indigo-100 text-sm font-medium uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
