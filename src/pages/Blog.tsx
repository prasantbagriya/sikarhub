import { Helmet } from "react-helmet-async";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Blog() {
  const posts = [
    {
      title: "Why Sikar is becoming the new Education Hub of India?",
      excerpt: "Explore the reasons behind Sikar's rapid growth as a premier destination for JEE and NEET preparation.",
      date: "Oct 24, 2024",
      author: "Admin",
      image: "https://picsum.photos/seed/blog1/800/600",
    },
    {
      title: "Top 5 CBSE Schools in Sikar for 2025 Admissions",
      excerpt: "A comprehensive guide for parents looking for the best schooling options in Sikar city.",
      date: "Oct 20, 2024",
      author: "Education Expert",
      image: "https://picsum.photos/seed/blog2/800/600",
    },
    {
      title: "How to choose between JEE and NEET after Class 10?",
      excerpt: "Expert advice for students confused about their career path after high school.",
      date: "Oct 15, 2024",
      author: "Career Counselor",
      image: "https://picsum.photos/seed/blog3/800/600",
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sikar Education Blog | Latest News, Tips & Admission Guides</title>
        <meta name="description" content="Stay updated with the latest education news from Sikar. Guides on JEE/NEET preparation, school admissions, and career counseling for students in Sikar Rajasthan." />
        <meta name="keywords" content="Sikar education news, JEE NEET tips Sikar, school admission guide Sikar, career counseling Sikar, education hub Sikar blog" />
      </Helmet>

      <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Sikar Education Insights</h1>
            <p className="text-slate-600 max-w-2xl mx-auto">Expert advice, latest updates, and comprehensive guides to help you navigate the vibrant education landscape of Sikar.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post, i) => (
                <article key={i} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 group flex flex-col">
                  <div className="aspect-video overflow-hidden">
                    <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-8 flex-grow flex flex-col">
                    <div className="flex items-center gap-4 text-xs text-slate-400 font-bold uppercase tracking-widest mb-4">
                      <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                      <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> {post.author}</span>
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-slate-500 text-sm mb-6 leading-relaxed flex-grow">
                      {post.excerpt}
                    </p>
                    <Link to="#" className="inline-flex items-center gap-2 text-indigo-600 font-bold text-sm">
                      Read Full Article <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-6">Trending Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {["JEE 2025", "NEET Prep", "CBSE Schools", "Hostel Life", "Sikar vs Kota", "Scholarships"].map((tag) => (
                    <span key={tag} className="px-3 py-1.5 bg-slate-50 text-slate-600 rounded-lg text-xs font-bold hover:bg-indigo-50 hover:text-indigo-600 cursor-pointer transition-colors">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-indigo-600 p-8 rounded-[2rem] text-white">
                <h3 className="text-xl font-bold mb-4">Subscribe to Newsletter</h3>
                <p className="text-indigo-100 text-sm mb-6">Get the latest education news from Sikar directly in your inbox.</p>
                <form className="space-y-3">
                  <input type="email" placeholder="Your email" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-indigo-200 outline-none focus:ring-2 focus:ring-white/50" />
                  <button className="w-full bg-white text-indigo-600 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-colors">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
