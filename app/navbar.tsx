"use client"
import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`w-full bg-white border-b border-gray-100 font-sans sticky top-0 z-50 transition-all duration-500 ease-in-out ${
      isScrolled ? 'shadow-md' : ''
    }`}>
      
      {/* Top Promotion Bar - Only visible when not scrolled */}
      <div className={`bg-black text-white text-[10px] text-center uppercase tracking-[0.2em] font-medium overflow-hidden transition-all duration-500 ${
        isScrolled ? 'h-0 py-0 opacity-0' : 'h-8 py-2 opacity-100'
      }`}>
        Free Shipping on all orders over ₹999
      </div>

      <div className={`max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between gap-4 transition-all duration-500 ${
        isScrolled ? 'h-14' : 'h-20'
      }`}>
        
        {/* 1. Mobile Menu */}
        <div className="flex md:hidden flex-1">
          <Menu className="h-5 w-5 text-black cursor-pointer" />
        </div>

        {/* 2. Logo - Now scales down on scroll */}
        <div className="flex-shrink-0 cursor-pointer group flex flex-col items-start leading-none transition-transform duration-500 origin-left">
          <span className={`font-black tracking-tighter text-black flex items-center gap-1 transition-all duration-500 ${
            isScrolled ? 'text-xl' : 'text-2xl'
          }`}>
            BABYCRUSH<span className={`bg-black rounded-full mt-1 transition-all ${isScrolled ? 'h-1 w-1' : 'h-1.5 w-1.5'}`}></span>
          </span>
          <span className={`uppercase tracking-[0.2em] text-gray-400 font-bold transition-all duration-500 ${
            isScrolled ? 'text-[7px] mt-0' : 'text-[9px] mt-1'
          }`}>
            Premium Essentials
          </span>
        </div>

        {/* 3. Category Links - Now integrated into the main row when scrolled */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 transition-all duration-500">
          {['New Arrivals', 'About us', 'Products', 'Services', 'Contact us'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className={`font-bold uppercase tracking-[0.15em] transition-all relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-black after:bottom-[-2px] after:left-0 hover:after:w-full after:transition-all ${
                isScrolled ? 'text-[10px]' : 'text-[12px]'
              } ${item === 'Sale' ? 'text-red-600' : 'text-gray-500 hover:text-black'}`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* 4. Cart Action */}
        <div className="flex items-center justify-end gap-4 md:gap-6">
          <button className="relative flex items-center gap-2 group hover:opacity-70 transition-opacity">
            <div className="relative">
              <ShoppingCart className={`text-black stroke-[1.5] transition-all duration-500 ${isScrolled ? 'h-5 w-5' : 'h-6 w-6'}`} />
              <span className="absolute -top-1.5 -right-1.5 bg-black text-white text-[8px] font-bold h-3.5 w-3.5 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                0
              </span>
            </div>
            <span className={`hidden sm:inline font-bold uppercase tracking-widest text-black transition-all duration-500 ${isScrolled ? 'text-[9px]' : 'text-xs'}`}>Cart</span>
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;