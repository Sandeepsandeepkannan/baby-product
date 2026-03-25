import React from 'react';
import { ShoppingCart, Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-100 font-sans sticky top-0 z-50">
      {/* Top Promotion Bar */}
      

      <div className="max-w-7xl mx-auto px-4 md:px-8 h-24 flex items-center justify-between">
        
        {/* 1. Left Section: Menu for Mobile (Hidden on Desktop) */}
        <div className="flex md:hidden flex-1">
          <Menu className="h-6 w-6 text-black cursor-pointer" />
        </div>

        {/* 2. Left Section: Contact for Desktop */}
        <div className="hidden md:flex flex-1 flex-col items-start leading-tight">
          <span className="text-[9px] uppercase font-bold text-gray-400 tracking-wider">Support</span>
          <span className="text-sm font-bold text-black tracking-tight">+91 90247 88312</span>
        </div>

        {/* 3. Center Section: Logo (The Focal Point) */}
        <div className="flex-shrink-0 cursor-pointer group text-center">
          <div className="flex flex-col items-center leading-none">
            <span className="text-3xl font-black tracking-tighter text-black flex items-center gap-1">
              BABYCRUSH<span className="h-2 w-2 bg-black rounded-full mt-2"></span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold mt-1 group-hover:text-black transition-colors">
              Premium Essentials
            </span>
          </div>
        </div>

        {/* 4. Right Section: Cart (Balanced with the left side) */}
        <div className="flex-1 flex justify-end items-center gap-6">
          <button className="relative flex items-center gap-2 group hover:opacity-70 transition-opacity">
            <div className="relative">
              <ShoppingCart className="h-6 w-6 text-black stroke-[1.5]" />
              <span className="absolute -top-2 -right-2 bg-black text-white text-[9px] font-bold h-4 w-4 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                0
              </span>
            </div>
            <span className="hidden sm:inline text-xs font-bold uppercase tracking-widest text-black">Cart</span>
          </button>
        </div>

      </div>

      {/* 5. Sub-Navigation (Category Links) */}
      <div className="flex justify-center border-t border-gray-50 py-4 gap-10 overflow-x-auto no-scrollbar bg-white">
        {['New Arrivals', 'Strollers', 'Clothing', 'Furniture', 'Toys', 'Sale'].map((item) => (
          <a 
            key={item} 
            href="#" 
            className={`text-[12px] font-bold uppercase tracking-[0.2em] transition-all relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-black after:bottom-[-4px] after:left-0 hover:after:w-full after:transition-all ${item === 'Sale' ? 'text-red-600' : 'text-gray-500 hover:text-black'}`}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;