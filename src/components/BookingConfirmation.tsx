import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, Calendar, Users, Mail, Phone, User } from 'lucide-react';
import { HOLIDAY_PACKAGES } from '../constants';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const BookingConfirmation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const pkg = HOLIDAY_PACKAGES.find(p => p.id === id);

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    bookingDate: '',
    guests: '1'
  });
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          packageId: pkg.id,
          packageName: pkg.title,
          price: pkg.price,
          ...formData
        }),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Booking error:', error);
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
              Booking <span className="italic font-serif font-light lowercase">Confirmed</span>
            </h1>
            <p className="text-black/60 text-lg font-light mb-12">
              Thank you for booking with Xavaroo Escapes. We have received your request for <strong>{pkg.title}</strong> and will contact you shortly with further details.
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
                Step 2 of 2
              </span>
              <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">
                Confirm <span className="italic font-serif font-light lowercase">Booking</span>
              </h1>
            </div>
            <div className="text-right">
              <span className="block text-[10px] uppercase tracking-widest text-black/40 mb-1">Selected Package</span>
              <span className="text-xl font-bold uppercase tracking-tight">{pkg.title}</span>
              <div className="text-2xl font-bold mt-1">₹{pkg.price} <span className="text-[10px] text-black/30 uppercase tracking-widest">/ Person</span></div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] border-b border-black/5 pb-4">Contact Information</h2>
              
              <div className="space-y-6">
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
            </div>

            {/* Travel Details */}
            <div className="space-y-8">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] border-b border-black/5 pb-4">Travel Details</h2>
              
              <div className="space-y-6">
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black/30" />
                  <input 
                    type="date" 
                    required
                    value={formData.bookingDate}
                    onChange={(e) => setFormData({...formData, bookingDate: e.target.value})}
                    className="w-full bg-zinc-50 border border-black/5 pl-12 pr-4 py-4 text-sm font-medium tracking-wider focus:outline-none focus:border-black transition-colors"
                  />
                </div>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black/30" />
                  <select 
                    required
                    value={formData.guests}
                    onChange={(e) => setFormData({...formData, guests: e.target.value})}
                    className="w-full bg-zinc-50 border border-black/5 pl-12 pr-4 py-4 text-sm font-medium tracking-wider focus:outline-none focus:border-black transition-colors appearance-none"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                      <option key={n} value={n}>{n} {n === 1 ? 'Person' : 'Persons'}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="pt-8 space-y-4">
                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-5 bg-black text-white text-xs font-bold uppercase tracking-[0.3em] hover:bg-zinc-800 transition-all shadow-xl disabled:opacity-50"
                >
                  {status === 'loading' ? 'Processing...' : 'Confirm Booking'}
                </button>
                <button 
                  type="button"
                  onClick={() => navigate(`/package/${pkg.id}`)}
                  className="w-full py-5 border border-black/10 text-black text-xs font-bold uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all"
                >
                  Cancel
                </button>
              </div>
              
              {status === 'error' && (
                <p className="text-red-500 text-[10px] uppercase tracking-widest text-center">Something went wrong. Please try again.</p>
              )}
            </div>
          </form>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};
