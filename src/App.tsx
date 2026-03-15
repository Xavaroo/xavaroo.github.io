import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PackageCard } from './components/PackageCard';
import { Footer } from './components/Footer';
import { HOLIDAY_PACKAGES } from './constants';
import { Category } from './types';
import { cn } from './lib/utils';
import { Globe, Heart, Compass, Map } from 'lucide-react';
import { PackageDetail } from './components/PackageDetail';
import { BookingConfirmation } from './components/BookingConfirmation';
import { EnquiryPage } from './components/EnquiryPage';
import { CustomizePage } from './components/CustomizePage';
import { ScrollToTop } from './components/ScrollToTop';
import { VideoPopup } from './components/VideoPopup';

const CATEGORIES: Category[] = ['All', 'Adventure', 'Heritage', 'Serenity', 'Legacy', 'Retreat'];

const NewsletterForm = () => {
  const [email, setEmail] = React.useState('');
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          language: navigator.language,
          userAgent: navigator.userAgent,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
      <input 
        type="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={status === 'success' ? "Thank you for joining!" : "Enter your email"}
        disabled={status === 'loading' || status === 'success'}
        className="flex-1 bg-zinc-900 border border-zinc-800 px-6 py-4 text-sm font-medium tracking-wider focus:outline-none focus:border-white transition-colors disabled:opacity-50"
        required
      />
      <button 
        type="submit"
        disabled={status === 'loading' || status === 'success'}
        className="px-10 py-4 bg-white text-black text-xs font-bold uppercase tracking-[0.2em] hover:bg-zinc-200 transition-colors disabled:opacity-50 min-w-[160px]"
      >
        {status === 'loading' ? 'Subscribing...' : status === 'success' ? 'Subscribed' : 'Subscribe'}
      </button>
      {status === 'error' && (
        <p className="absolute mt-16 text-red-500 text-[10px] uppercase tracking-widest">Something went wrong. Please try again.</p>
      )}
    </form>
  );
};

const Home = () => {
  const [activeCategory, setActiveCategory] = React.useState<Category>('All');
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const packagesSection = document.getElementById('packages');
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filteredPackages = HOLIDAY_PACKAGES.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.categories.includes(activeCategory as any);
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         p.destination.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <VideoPopup />
      <Navbar />
      <main>
        <Hero onSearch={handleSearch} />

        {/* Featured Destinations Grid */}
        <section id="destinations" className="py-32 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-black/30 mb-6 block">
                Curated Collections
              </span>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-black uppercase leading-[0.9]">
                Popular <br />
                <span className="italic font-serif font-light lowercase">Experiences</span>
              </h2>
            </div>
            <p className="text-black/50 max-w-sm text-sm font-light leading-relaxed">
              Explore our most sought-after experiences, from the crystal clear waters of the Kerala to experiencing the majestic peaks of the Uttarakhand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[800px]">
            <div className="md:col-span-8 relative group overflow-hidden">
              <img 
                // src="https://images.unsplash.com/photo-1506929113675-b55f9d3bb76a?q=80&w=1200&auto=format&fit=crop" 
                src='/assets/popularExperiences/Cuisine.jpeg'
                alt="Culture"
                className="w-full h-full object-cover brightness-75 group-hover:brightness-100 transition-all duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
              <div className="absolute bottom-10 left-10 text-white max-w-sm">
                <span className="text-[10px] font-bold uppercase tracking-widest mb-2 block opacity-70">Relax you taste buds</span>
                <h3 className="text-4xl font-bold uppercase tracking-tighter mb-4">Cuisine</h3>
                <p className="text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  A symphony of spices and regional flavors—every dish in India tells a story passed through generations.
                </p>
              </div>
            </div>
            <div className="md:col-span-4 flex flex-col gap-6">
              <div className="flex-1 relative group overflow-hidden">
                <img 
                  // src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop" 
                  src='/assets/popularExperiences/Culture.jpeg'
                  alt="Culture"
                  className="w-full h-full object-cover brightness-75 group-hover:brightness-100 transition-all duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute bottom-6 left-6 text-white max-w-xs">
                  <span className="text-[10px] font-bold uppercase tracking-widest mb-1 block opacity-70">Experience rich cultures</span>
                  <h3 className="text-2xl font-bold uppercase tracking-tighter mb-2">Culture</h3>
                  <p className="text-xs font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    India is a living tapestry of traditions, where ancient rituals, vibrant festivals, and timeless stories shape everyday life.
                  </p>
                </div>
              </div>
              <div className="flex-1 relative group overflow-hidden">
                <img 
                  // src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=800&auto=format&fit=crop" 
                  src='/assets/popularExperiences/Art.jpeg'
                  alt="Venice"
                  className="w-full h-full object-cover brightness-75 group-hover:brightness-100 transition-all duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute bottom-6 left-6 text-white max-w-xs">
                  <span className="text-[10px] font-bold uppercase tracking-widest mb-1 block opacity-70">Enjoy art at its fullest</span>
                  <h3 className="text-2xl font-bold uppercase tracking-tighter mb-2">Art</h3>
                  <p className="text-xs font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    From temple carvings to colorful textiles and graceful dance, Indian art is a timeless expression of creativity and heritage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Holiday Packages Section */}
        <section id="packages" className="py-32 bg-zinc-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-black/30 mb-6 block">
                Exclusive Deals
              </span>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-black uppercase leading-[0.9] mb-12">
                Holiday <br />
                <span className="italic font-serif font-light lowercase">Packages</span>
              </h2>

              {searchQuery && (
                <div className="mb-12">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/40">
                    Showing results for: <span className="text-black">"{searchQuery}"</span>
                  </p>
                </div>
              )}

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-4">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      "px-8 py-3 text-[10px] font-bold uppercase tracking-[0.2em] transition-all border",
                      activeCategory === cat 
                        ? "bg-black text-white border-black" 
                        : "bg-transparent text-black/40 border-black/10 hover:border-black/30"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredPackages.length > 0 ? (
                  filteredPackages.map((pkg) => (
                    <PackageCard key={pkg.id} package={pkg} />
                  ))
                ) : (
                  <div className="col-span-full py-20 text-center">
                    <p className="text-black/40 text-lg font-light uppercase tracking-widest">No packages found for "{searchQuery}"</p>
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="mt-6 text-xs font-bold underline uppercase tracking-widest hover:text-black/60 transition-colors"
                    >
                      Clear Search
                    </button>
                  </div>
                )}
              </AnimatePresence>
            </div>

            <div className="mt-20 text-center">
              <button 
                onClick={() => {
                  setActiveCategory('All');
                  setSearchQuery('');
                }}
                className="px-12 py-5 bg-black text-white text-xs font-bold uppercase tracking-[0.3em] hover:bg-zinc-800 transition-all shadow-xl"
              >
                View All Packages
              </button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-32 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-black/30 mb-6 block">
                Our Philosophy
              </span>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-black uppercase leading-[0.9] mb-10">
                Travel with <br />
                <span className="italic font-serif font-light lowercase text-black/40">Purpose</span>
              </h2>
              <p className="text-black/60 text-lg font-light leading-relaxed mb-12">
                We believe that travel is more than just visiting a place, it's about the stories you bring back and the perspective you gain. Our packages are designed to immerse you in the local culture while providing the comfort of minimalist luxury.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                {[
                  { icon: Globe, label: 'Global Reach', desc: 'Over 50+ countries' },
                  { icon: Heart, label: 'Handpicked', desc: 'Curated by experts' },
                  { icon: Compass, label: 'Authentic', desc: 'Local experiences' },
                  { icon: Map, label: 'Seamless', desc: 'End-to-end planning' },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-3">
                    <item.icon className="w-6 h-6 text-black" />
                    <h4 className="text-xs font-bold uppercase tracking-widest">{item.label}</h4>
                    <p className="text-[11px] text-black/40 uppercase tracking-wider">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative aspect-square">
              <div className="absolute inset-0 border border-black/5 translate-x-6 translate-y-6"></div>
              <img 
                // src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000&auto=format&fit=crop" 
                src='/assets/philosophy/Philosophy.jpeg'
                alt="Traveler"
                className="w-full h-full object-cover brightness-75 relative z-10"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-32 bg-zinc-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-20">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-black/30 mb-6 block">
                Testimonials
              </span>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-black uppercase leading-[0.9]">
                What our <br />
                <span className="italic font-serif font-light lowercase">Customers say</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  quote: "The attention to detail was incredible. Xavaroo didn't just book a trip; they crafted an experience that felt deeply personal and authentic.",
                  author: "Navinasri S",
                  role: "Adventure Enthusiast",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop"
                },
                {
                  quote: "I've traveled with many agencies, but the seamless planning and local connections provided by Xavaroo are unmatched. Truly world-class.",
                  author: "Prince Aryan",
                  role: "Business Traveler",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop"
                },
                {
                  quote: "Our spiritual journey to UTtarakhand was life-changing. Every moment was perfectly balanced between exploration and reflection. We'll be back.",
                  author: "Srishti Gupta",
                  role: "Cultural Explorer",
                  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop"
                }
              ].map((testimonial, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col"
                >
                  <div className="mb-8 relative">
                    <span className="text-6xl font-serif text-black/5 absolute -top-8 -left-4">"</span>
                    <p className="text-lg font-light leading-relaxed text-black/70 italic relative z-10">
                      {testimonial.quote}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mt-auto">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest">{testimonial.author}</h4>
                      <p className="text-[10px] text-black/40 uppercase tracking-wider">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-32 bg-black text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-8">
              Join the <span className="italic font-serif font-light lowercase">Collective</span>
            </h2>
            <p className="text-zinc-500 text-lg font-light mb-12">
              Subscribe to receive exclusive offers and travel inspiration directly in your inbox.
            </p>
            <NewsletterForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans selection:bg-black selection:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/package/:id" element={<PackageDetail />} />
          <Route path="/book/:id" element={<BookingConfirmation />} />
          <Route path="/enquire/:id" element={<EnquiryPage />} />
          <Route path="/customize" element={<CustomizePage />} />
        </Routes>
      </div>
    </Router>
  );
}
