import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Star, Clock, ArrowRight } from 'lucide-react';
import { HolidayPackage } from '../types';

interface PackageCardProps {
  package: HolidayPackage;
}

export const PackageCard = ({ package: pkg }: PackageCardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -10 }}
      className="group bg-white border border-black/5 overflow-hidden"
    >
      <Link to={`/package/${pkg.id}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img 
            src={pkg.image} 
            alt={pkg.title}
            className="w-full h-full object-cover brightness-50 group-hover:brightness-100 transition-all duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {pkg.categories.map((cat) => (
              <span key={cat} className="px-3 py-1 bg-white text-[10px] font-bold uppercase tracking-widest text-black">
                {cat}
              </span>
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
            <div className="w-full py-3 bg-white text-black text-[10px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2">
              View Details <ArrowRight className="w-3 h-3" />
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-end mb-2">
            <div className="flex items-center gap-1 text-black/40">
              <Clock className="w-3 h-3" />
              <span className="text-[10px] uppercase tracking-wider font-medium">{pkg.duration}</span>
            </div>
          </div>
          
          <h3 className="text-xl font-bold uppercase tracking-tight text-black mb-4 leading-tight">
            {pkg.title}
          </h3>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {pkg.highlights.slice(0, 2).map((h) => (
              <span key={h} className="text-[9px] uppercase tracking-widest text-black/40 border border-black/10 px-2 py-1">
                {h}
              </span>
            ))}
          </div>
          
          <div className="flex items-end justify-between pt-4 border-t border-black/5">
            <div>
              <span className="block text-[10px] uppercase tracking-widest text-black/40 mb-1">Starting from</span>
              <span className="text-2xl font-bold text-black">₹{pkg.price}</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-black/20 group-hover:text-black transition-colors">
              Per Person
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
