import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Star, Clock, MapPin, Calendar, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { HOLIDAY_PACKAGES } from '../constants';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const PackageDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const pkg = HOLIDAY_PACKAGES.find(p => p.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = pkg?.images || [pkg?.image || ''];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!pkg) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Package Not Found</h2>
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-2 bg-black text-white text-xs font-bold uppercase tracking-widest"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-black selection:text-white">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section with Slideshow */}
        <section className="relative h-[70vh] overflow-hidden bg-black">
          <AnimatePresence mode="wait">
            <motion.img 
              key={currentImageIndex}
              src={images[currentImageIndex]} 
              alt={`${pkg.title} - ${currentImageIndex + 1}`}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover brightness-50"
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute inset-0 flex items-center justify-between px-6 z-10 pointer-events-none">
            <button 
              onClick={prevImage}
              className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all pointer-events-auto"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextImage}
              className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all pointer-events-auto"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Indicators */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`h-1 transition-all duration-300 ${idx === currentImageIndex ? 'w-8 bg-white' : 'w-2 bg-white/30'}`}
              />
            ))}
          </div>

          <div className="absolute inset-0 flex items-center justify-center text-center px-6 z-10 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="pointer-events-auto"
            >
              <button 
                onClick={() => navigate('/')}
                className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors uppercase text-[10px] font-bold tracking-[0.2em]"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Explore
              </button>
              <h1 className="text-4xl md:text-7xl font-bold text-white uppercase tracking-tighter mb-4 drop-shadow-2xl">
                {pkg.title}
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-widest">{pkg.destination}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-widest">{pkg.duration}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Left Column: Itinerary */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold uppercase tracking-tighter mb-12 border-b border-black/5 pb-6">
                Detailed <span className="italic font-serif font-light lowercase">Itinerary</span>
              </h2>
              
              <div className="space-y-12">
                {pkg.itinerary.map((item, index) => (
                  <motion.div 
                    key={item.day}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-8"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-black text-white flex items-center justify-center text-sm font-bold shrink-0">
                        {item.day}
                      </div>
                      <div className="w-[1px] h-full bg-black/10 mt-4"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold uppercase tracking-tight mb-4">{item.title}</h3>
                      <p className="text-black/60 font-light leading-relaxed text-lg">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column: Booking & Highlights */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                {/* Booking Card */}
                <div className="bg-zinc-50 border border-black/5 p-8">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-2 block">Starting from</span>
                  <div className="flex items-end gap-2 mb-8">
                    <span className="text-4xl font-bold">₹{pkg.price}</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-black/30 mb-1">Per Person</span>
                  </div>
                  
                  <button 
                    onClick={() => navigate(`/book/${pkg.id}`)}
                    className="w-full py-4 bg-black text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-zinc-800 transition-all mb-4"
                  >
                    Book This Trip
                  </button>
                  <button 
                    onClick={() => navigate(`/enquire/${pkg.id}`)}
                    className="w-full py-4 border border-black/10 text-black text-xs font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all"
                  >
                    Enquire Now
                  </button>
                  
                  <p className="text-[10px] text-center text-black/30 uppercase tracking-widest mt-6">
                    * Prices may vary based on travel dates
                  </p>
                </div>

                {/* Highlights Card */}
                <div className="border border-black/5 p-8">
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-6">Package Highlights</h4>
                  <ul className="space-y-4">
                    {pkg.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-3 text-sm font-light text-black/60">
                        <CheckCircle2 className="w-4 h-4 text-black" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
