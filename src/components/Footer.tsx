import { Link } from "react-router-dom";
import { GraduationCap, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Sikar<span className="text-indigo-400">EduHub</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Sikar's most trusted education directory. Helping parents and students find the best schools and coaching institutes since 2024.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-indigo-400 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-indigo-400 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-indigo-400 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-indigo-400 transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/schools" className="hover:text-indigo-400 transition-colors">Top Schools</Link></li>
              <li><Link to="/jee" className="hover:text-indigo-400 transition-colors">JEE Coaching</Link></li>
              <li><Link to="/neet" className="hover:text-indigo-400 transition-colors">NEET Coaching</Link></li>
              <li><Link to="/compare" className="hover:text-indigo-400 transition-colors">Compare Institutes</Link></li>
              <li><Link to="/blog" className="hover:text-indigo-400 transition-colors">Latest News</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-6">Support</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-indigo-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-indigo-400 transition-colors">Contact Us</Link></li>
              <li><Link to="/admission" className="hover:text-indigo-400 transition-colors">Admission Rules</Link></li>
              <li><Link to="/enquiry" className="hover:text-indigo-400 transition-colors">Admission Enquiry</Link></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-indigo-400 shrink-0" />
                <span>Piprali Road, Sikar, Rajasthan - 332001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-indigo-400 shrink-0" />
                <span>+91 96108 92222</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-indigo-400 shrink-0" />
                <span>info@sikareduhub.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Sikar EduHub. All rights reserved. Designed for Sikar's Education Hub.</p>
        </div>
      </div>
    </footer>
  );
}
