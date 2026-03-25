import React from 'react';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-100 font-sans pt-20 pb-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Top Section: Branding & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex flex-col items-start leading-none">
              <span className="text-3xl font-black tracking-tighter text-black flex items-center gap-1">
                BABYCRUSH<span className="h-2 w-2 bg-black rounded-full mt-2"></span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold mt-1">
                Premium Essentials
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm italic">
              "Curating the purest moments for your little ones. We believe in minimalist design, organic materials, and uncompromising safety."
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="p-2 border border-gray-100 rounded-full text-black hover:bg-black hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 border border-gray-100 rounded-full text-black hover:bg-black hover:text-white transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 border border-gray-100 rounded-full text-black hover:bg-black hover:text-white transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-black">Explore</h4>
              <ul className="space-y-3 text-sm font-medium text-gray-400">
                <li><a href="#" className="hover:text-black transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Best Sellers</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Strollers</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Furniture</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-black">Company</h4>
              <ul className="space-y-3 text-sm font-medium text-gray-400">
                <li><a href="#" className="hover:text-black transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Sustainability</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          {/* Contact / Location */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-black">Visit Us</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-black shrink-0" />
                <span>123 Design Avenue, Suite 100<br/>New Delhi, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-black shrink-0" />
                <span>+91 90247 88312</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-black shrink-0" />
                <span>hello@babycrush.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Middle Section: Large Hollow Branding (The "Art" Piece) */}
       

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400">
            © 2024 BabyCrush. All Rights Reserved.
          </p>
          <div className="flex gap-8">
             <div className="flex items-center gap-2 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
                <span className="text-[9px] font-bold uppercase tracking-widest">Powered by Stripe</span>
             </div>
             <div className="flex items-center gap-2 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
                <span className="text-[9px] font-bold uppercase tracking-widest">Global Delivery</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;