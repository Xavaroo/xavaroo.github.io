import React from 'react';
import { Search, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Destinations', href: '/#destinations' },
    { name: 'Packages', href: '/#packages' },
    { name: 'Customize', href: '/customize' },
    { name: 'About', href: '/#about' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-white/90 backdrop-blur-md border-b border-black/5 py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-2xl font-bold tracking-tighter text-black uppercase">
            Xavaroo<span className="font-light">Escapes</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.href}
                className="text-sm font-medium uppercase tracking-widest text-black/60 hover:text-black transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button 
            className="md:hidden p-2 hover:bg-black/5 rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <Link 
            to="/#packages"
            className="hidden md:block px-6 py-2 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors"
          >
            Book Now
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-black/5 p-6 md:hidden flex flex-col gap-4"
          >
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.href}
                className="text-lg font-medium uppercase tracking-widest text-black"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              to="/#packages"
              className="w-full py-4 bg-black text-white text-sm font-bold uppercase tracking-widest text-center"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
