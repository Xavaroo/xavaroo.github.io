import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, Mail, Phone, User, MessageSquare } from 'lucide-react';
import { HOLIDAY_PACKAGES } from '../constants';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const EnquiryPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const pkg = HOLIDAY_PACKAGES.find(p => p.id === id);

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: ''
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
      const response = await fetch('/api/enquire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          packageId: pkg.id,
          packageName: pkg.title,
          ...formData
        }),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Enquiry error:', error);
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
              Enquiry <span className="italic font-serif font-light lowercase">Submitted</span>
            </h1>
            <p className="text-black/60 text-lg font-light mb-12">
              Thank you for your interest in <strong>{pkg.title}</strong>. Our support team will connect with you shortly to assist with your travel plans.
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
                Quick Enquiry
              </span>
              <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">
                Plan Your <span className="italic font-serif font-light lowercase">Journey</span>
              </h1>
            </div>
            <div className="text-right">
              <span className="block text-[10px] uppercase tracking-widest text-black/40 mb-1">Package Name</span>
              <span className="text-xl font-bold uppercase tracking-tight">{pkg.title}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-black/60 text-lg font-light leading-relaxed mb-8">
                Have questions about this package? Fill in your details and our travel experts will get back to you with all the information you need.
              </p>
              <div className="p-6 bg-zinc-50 border border-black/5">
                <p className="text-sm font-medium uppercase tracking-widest text-black/40">
                  Our support team will connect with you.
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

              <div className="pt-4 space-y-4">
                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-5 bg-black text-white text-xs font-bold uppercase tracking-[0.3em] hover:bg-zinc-800 transition-all shadow-xl disabled:opacity-50"
                >
                  {status === 'loading' ? 'Sending...' : 'Enquire Now'}
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
            </form>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};
