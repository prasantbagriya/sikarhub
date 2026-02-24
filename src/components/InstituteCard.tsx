import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Star, ArrowRight, ShieldCheck, Phone, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import { Institute } from "../types";

export interface InstituteCardProps {
  institute: Institute;
  featured?: boolean;
}

const InstituteCard: React.FC<InstituteCardProps> = ({ institute, featured = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "group relative bg-white rounded-3xl overflow-hidden transition-all duration-500",
        institute.is_featured 
          ? "border-2 border-amber-400 shadow-[0_0_40px_-10px_rgba(251,191,36,0.2)] hover:shadow-[0_0_50px_-5px_rgba(251,191,36,0.3)]" 
          : "border border-slate-100 shadow-sm hover:shadow-xl"
      )}
    >
      {institute.is_featured && (
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-gradient-to-r from-amber-400 to-amber-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
            <ShieldCheck className="w-3 h-3" />
            Top Institute of Sikar
          </span>
        </div>
      )}

      <div className="p-6">
        <div className="flex items-start justify-between mb-6">
          <div className={cn(
            "w-20 h-20 rounded-2xl overflow-hidden border-2 transition-transform group-hover:scale-105 duration-500",
            institute.is_featured ? "border-amber-100" : "border-slate-50"
          )}>
            <img 
              src={institute.logo} 
              alt={institute.name} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded-lg">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span className="text-sm font-bold text-slate-700">{institute.rating}</span>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
              {institute.type}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
              {institute.category}
            </span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
            {institute.name}
          </h3>
          <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed">
            {institute.description}
          </p>
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <MapPin className="w-4 h-4 shrink-0" />
            <span className="truncate">{institute.location}</span>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Fees Range</p>
            <p className="text-sm font-bold text-slate-900">{institute.fees_range}</p>
          </div>
          <Link 
            to={`/institute/${institute.slug}`}
            className={cn(
              "p-3 rounded-xl transition-all",
              institute.is_featured 
                ? "bg-amber-400 text-white hover:bg-amber-500" 
                : "bg-slate-900 text-white hover:bg-indigo-600"
            )}
          >
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Quick Actions Overlay */}
      <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/80 backdrop-blur-sm border-t border-slate-100 flex gap-2">
        <a 
          href={`https://wa.me/91${institute.whatsapp}`}
          target="_blank"
          className="flex-1 bg-emerald-500 text-white py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-2 hover:bg-emerald-600 transition-colors"
        >
          <MessageCircle className="w-4 h-4" /> WhatsApp
        </a>
        <Link 
          to="/enquiry"
          className="flex-1 bg-indigo-600 text-white py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-2 hover:bg-indigo-700 transition-colors"
        >
          Enquire Now
        </Link>
      </div>
    </motion.div>
  );
};

export default InstituteCard;
