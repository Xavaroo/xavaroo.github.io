import React from 'react';
import { motion } from 'motion/react';
import { Search, MapPin } from 'lucide-react';

interface HeroProps {
  onSearch: (query: string) => void;
}

export const Hero = ({ onSearch }: HeroProps) => {
  const [query, setQuery] = React.useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background with subtle pattern or image */}
      <div className="absolute inset-0 z-0">
        <img 
          // src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop" 
          src="assets/heroBackground/heroBackground.png"
          alt="Mountain landscape"
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-black/40 mb-4">
            Curated Experiences
          </span>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-black mb-8 uppercase leading-[0.9]">
            The India with <br />
            <span className="italic font-serif font-light lowercase">Xavaroo</span>
          </h1>
          <p className="text-lg md:text-xl text-black/60 max-w-2xl mx-auto mb-12 font-light">
            Discover India beyound the guidebook.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSearch}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white border border-black/10 p-2 md:p-4 shadow-2xl flex flex-col md:flex-row items-center gap-4 max-w-2xl mx-auto"
        >
          <div className="flex-1 w-full flex items-center gap-3 px-4 py-3 border-b md:border-b-0 md:border-r border-black/5">
            <MapPin className="w-5 h-5 text-black/40" />
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Where to?" 
              className="w-full bg-transparent border-none focus:ring-0 text-sm font-medium uppercase tracking-wider placeholder:text-black/20"
            />
          </div>
          <button 
            type="submit"
            className="w-full md:w-auto px-10 py-4 bg-black text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-zinc-800 transition-all flex items-center justify-center gap-2"
          >
            <Search className="w-4 h-4" />
            Explore
          </button>
        </motion.form>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-12 bg-black/20"></div>
      </div>
    </section>
  );
};
