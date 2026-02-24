import { Helmet } from "react-helmet-async";
import { Target, Eye, Heart, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Sikar Education Hub</title>
        <meta name="description" content="Learn more about Sikar Education Hub and our mission to promote quality education in Sikar." />
      </Helmet>

      <div className="pt-32 pb-20 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="max-w-3xl mx-auto text-center mb-24">
            <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 mb-8 leading-tight">Empowering Students in Sikar</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Sikar EduHub is a dedicated platform built to bridge the gap between students and the best educational institutions in Sikar.
            </p>
          </div>

          {/* Mission/Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
            <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100">
              <div className="bg-indigo-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-indigo-100">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed">
                To provide transparent, verified, and comprehensive information about schools and coaching institutes in Sikar, helping students make informed decisions for their future.
              </p>
            </div>
            <div className="bg-indigo-900 p-12 rounded-[3rem] text-white">
              <div className="bg-white/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border border-white/20">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-indigo-100 leading-relaxed">
                To become the most trusted education portal in Rajasthan, promoting Sikar as the world-class education hub it truly is.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
              {[
                { title: "Transparency", icon: ShieldCheck, desc: "We provide honest and verified information about every institute." },
                { title: "Student First", icon: Heart, desc: "Our primary focus is always the welfare and success of students." },
                { title: "Excellence", icon: Target, desc: "We strive for excellence in our services and data accuracy." }
              ].map((v, i) => (
                <div key={i} className="space-y-4">
                  <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mx-auto">
                    <v.icon className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{v.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
