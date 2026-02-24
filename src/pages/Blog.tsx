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
        <title>Education Blog | Sikar Education Hub</title>
        <meta name="description" content="Latest news, tips, and guides about schools and coaching institutes in Sikar." />
      </Helmet>

      <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Latest from Our Blog</h1>
            <p className="text-slate-600">Stay updated with the latest news and tips from Sikar's education world.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.map((post, i) => (
              <article key={i} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 group">
                <div className="aspect-video overflow-hidden">
                  <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-xs text-slate-400 font-bold uppercase tracking-widest mb-4">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> {post.author}</span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link to="#" className="inline-flex items-center gap-2 text-indigo-600 font-bold text-sm">
                    Read Full Article <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
