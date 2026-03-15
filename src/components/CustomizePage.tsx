import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, Mail, Phone, User, MapPin, Calendar, Users } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const CustomizePage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    travelDate: '',
    passengers: '',
    requirements: ''
  });
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/enquire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'CUSTOM_PACKAGE',
          ...formData
        }),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Customization request error:', error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="pt-32 pb-20 px-6 max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center"
          >
            <CheckCircle2 className="w-20 h-20 text-black mb-8" />
            <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6">
              Request <span className="italic font-serif font-light lowercase">Received</span>
            </h1>
            <p className="text-black/60 text-lg font-light mb-12">
              Thank you for sharing your vision. Our travel designers will connect with you shortly to create your perfect bespoke itinerary.
            </p>
            <button 
              onClick={() => navigate('/')}
              className="px-12 py-4 bg-black text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-zinc-800 transition-all"
            >
              Return to Home
            </button>
          </motion.div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-black selection:text-white">
      <Navbar />
      
      <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-between mb-12 border-b border-black/5 pb-8">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-black/30 mb-2 block">
                Bespoke Travel
              </span>
              <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">
                Connect <span className="italic font-serif font-light lowercase">With Us</span>
              </h1>
              <p className="text-xs font-medium uppercase tracking-widest text-black/40 mt-2">
                If you want to design your package
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-black/60 text-lg font-light leading-relaxed mb-8">
                Every traveler is unique. Tell us about your dream journey, and we'll craft a personalized experience that matches your style, pace, and preferences.
              </p>
              <div className="p-6 bg-zinc-50 border border-black/5">
                <p className="text-sm font-medium uppercase tracking-widest text-black/40">
                  Our travel designers will connect with you to discuss your requirements.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black/30" />
                <input 
                  type="text" 
                  required
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-zinc-50 border border-black/5 pl-12 pr-4 py-4 text-sm font-medium tracking-wider focus:outline-none focus:border-black transition-colors"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black/30" />
                  <input 
                    type="email" 
                    required
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-zinc-50 border border-black/5 pl-12 pr-4 py-4 text-sm font-medium tracking-wider focus:outline-none focus:border-black transition-colors"
                  />
                </div>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black/30" />
                  <input 
                    type="tel" 
                    required
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-zinc-50 border border-black/5 pl-12 pr-4 py-4 text-sm font-medium tracking-wider focus:outline-none focus:border-black transition-colors"
                  />
                </div>
              </div>

              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black/30" />
                <input 
                  type="text" 
                  required
                  placeholder="Preferred Destination"
                  value={formData.destination}
                  onChange={(e) => setFormData({...formData, destination: e.target.value})}
                  className="w-full bg-zinc-50 border border-black/5 pl-12 pr-4 py-4 text-sm font-medium tracking-wider focus:outline-none focus:border-black transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black/30" />
                  <input 
                    type="text" 
                    placeholder="Travel Date (e.g. Dec 2024)"
                    value={formData.travelDate}
                    onChange={(e) => setFormData({...formData, travelDate: e.target.value})}
                    className="w-full bg-zinc-50 border border-black/5 pl-12 pr-4 py-4 text-sm font-medium tracking-wider focus:outline-none focus:border-black transition-colors"
                  />
                </div>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black/30" />
                  <input 
                    type="number" 
                    placeholder="No. of Travelers"
                    value={formData.passengers}
                    onChange={(e) => setFormData({...formData, passengers: e.target.value})}
                    className="w-full bg-zinc-50 border border-black/5 pl-12 pr-4 py-4 text-sm font-medium tracking-wider focus:outline-none focus:border-black transition-colors"
                  />
                </div>
              </div>

              <div className="relative">
                <textarea 
                  placeholder="Tell us about your requirements (e.g. interests, budget, specific places)"
                  value={formData.requirements}
                  onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                  rows={4}
                  className="w-full bg-zinc-50 border border-black/5 p-4 text-sm font-medium tracking-wider focus:outline-none focus:border-black transition-colors resize-none"
                />
              </div>

              <div className="pt-4 space-y-4">
                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-5 bg-black text-white text-xs font-bold uppercase tracking-[0.3em] hover:bg-zinc-800 transition-all shadow-xl disabled:opacity-50"
                >
                  {status === 'loading' ? 'Sending...' : 'Request Design'}
                </button>
                <button 
                  type="button"
                  onClick={() => navigate('/')}
                  className="w-full py-5 border border-black/10 text-black text-xs font-bold uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all"
                >
                  Cancel
                </button>
              </div>
              
              {status === 'error' && (
                <p className="text-red-500 text-[10px] uppercase tracking-widest text-center">Something went wrong. Please try again.</p>
              )}
            </form>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};
