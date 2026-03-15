import React from 'react';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="about" className="bg-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <a href="/" className="text-2xl font-bold tracking-tighter uppercase mb-6 block">
              Xavaroo<span className="font-light">Escapes</span>
            </a>
            <p className="text-zinc-500 text-sm font-light leading-relaxed mb-8">
              Crafting unforgettable journeys with a focus on minimalist luxury and authentic experiences.
            </p>
            <div className="flex items-center gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="p-2 border border-zinc-800 hover:border-white transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {['Destinations', 'Holiday Packages', 'Spiritual Retreats', 'About Us', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-zinc-500 hover:text-white transition-colors uppercase tracking-wider text-[11px]">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8">Destinations</h4>
            <ul className="space-y-4">
              {['Kanyakumari', 'Rajasthan', 'Kerala', 'Uttarakhand'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-zinc-500 hover:text-white transition-colors uppercase tracking-wider text-[11px]">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-zinc-500 shrink-0" />
                <span className="text-sm text-zinc-500 font-light">123 IIM, Sirmaur, 173031</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-zinc-500 shrink-0" />
                <span className="text-sm text-zinc-500 font-light">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-zinc-500 shrink-0" />
                <span className="text-sm text-zinc-500 font-light">hello@xavaroo.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] uppercase tracking-widest text-zinc-600">
            © 2024 Xavaroo Escapes. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-[10px] uppercase tracking-widest text-zinc-600 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-[10px] uppercase tracking-widest text-zinc-600 hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
