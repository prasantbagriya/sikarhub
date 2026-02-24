import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Globe, MessageCircle, Star, ShieldCheck, CheckCircle2, ArrowLeft, Share2, Info } from "lucide-react";
import { motion } from "motion/react";

export default function Detail() {
  const { slug } = useParams();
  const [institute, setInstitute] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/institutes/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setInstitute(data);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <div className="pt-40 text-center">Loading...</div>;
  if (!institute) return <div className="pt-40 text-center">Institute not found.</div>;

  return (
    <>
      <Helmet>
        <title>{institute.name} Sikar | Fees, Courses & Reviews</title>
        <meta name="description" content={`Get complete details about ${institute.name} in Sikar. Courses, fees structure, faculty info, and contact details.`} />
      </Helmet>

      <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
        {/* Breadcrumb & Back */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors font-medium">
            <ArrowLeft className="w-4 h-4" /> Back to Directory
          </Link>
        </div>

        {/* Hero Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-sm border border-slate-100 relative overflow-hidden">
            {institute.is_featured && (
              <div className="absolute top-0 right-0">
                <div className="bg-amber-400 text-white px-10 py-2 rotate-45 translate-x-10 translate-y-4 font-black text-[10px] uppercase tracking-widest shadow-lg">
                  Featured
                </div>
              </div>
            )}

            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="w-32 h-32 lg:w-48 lg:h-48 rounded-[2rem] overflow-hidden border-4 border-slate-50 shadow-xl shrink-0">
                <img src={institute.logo} alt={institute.name} className="w-full h-full object-cover" />
              </div>

              <div className="flex-grow space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {institute.type}
                  </span>
                  <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {institute.category}
                  </span>
                  <div className="flex items-center gap-1 bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-xs font-bold">
                    <Star className="w-3 h-3 fill-amber-500" /> {institute.rating} Rating
                  </div>
                </div>

                <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900">{institute.name}</h1>
                
                <div className="flex flex-wrap gap-6 text-slate-500 font-medium">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-indigo-500" />
                    <span>{institute.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-indigo-500" />
                    <span>{institute.contact_phone}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Link to="/enquiry" className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">
                    Enquire for Admission
                  </Link>
                  <a href={`https://wa.me/91${institute.whatsapp}`} target="_blank" className="bg-emerald-500 text-white px-8 py-4 rounded-2xl font-bold hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-100 flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" /> WhatsApp
                  </a>
                  <button className="p-4 rounded-2xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 transition-all">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Info */}
            <div className="lg:col-span-2 space-y-12">
              <section className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-sm border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <Info className="w-6 h-6 text-indigo-600" /> About Institute
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {institute.description}
                  <br /><br />
                  {institute.name} is one of the most prestigious institutions in Sikar, Rajasthan. Known for its academic excellence and state-of-the-art facilities, it has been a preferred choice for students and parents alike. The institute focuses on holistic development and provides a competitive environment for students to excel in their chosen fields.
                </p>
              </section>

              <section className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-sm border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-8">Facilities Offered</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Smart Classrooms",
                    "Well-equipped Labs",
                    "Library with 10k+ Books",
                    "Separate Hostel for Boys & Girls",
                    "Transport Facility",
                    "Sports Complex",
                    "24/7 Security & CCTV",
                    "Hygienic Mess & Canteen"
                  ].map((facility, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                      <span className="font-semibold text-slate-700">{facility}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Quick Info</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Fees Structure</p>
                    <p className="text-lg font-bold text-indigo-600">{institute.fees_range}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Board / Stream</p>
                    <p className="text-slate-700 font-semibold">{institute.category.toUpperCase()}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Location</p>
                    <p className="text-slate-700 font-semibold">{institute.location}</p>
                  </div>
                </div>
                <hr className="my-8 border-slate-100" />
                <Link to="/enquiry" className="block w-full bg-slate-900 text-white text-center py-4 rounded-xl font-bold hover:bg-indigo-600 transition-all">
                  Get Fee Details
                </Link>
              </div>

              <div className="bg-indigo-600 rounded-[2rem] p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Need Help?</h3>
                <p className="text-indigo-100 text-sm mb-6 leading-relaxed">
                  Confused about which institute to choose? Talk to our education experts for free guidance.
                </p>
                <button className="w-full bg-white text-indigo-600 py-4 rounded-xl font-bold hover:bg-indigo-50 transition-all">
                  Call Expert
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
