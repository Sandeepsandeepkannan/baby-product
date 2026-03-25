import React from 'react';
import Image from 'next/image';

const Heropage = () => {
  return (
    <section className="relative w-full max-w-[1450px] h-[550px] bg-slate-100 overflow-hidden  flex items-center px-6 md:px-12 shadow-[0_10px_50px_rgba(0,0,0,0.04)] font-sans group">
      
      {/* 1. Background Decorative Elements */}
      <div className="absolute -left-20 top-0 w-[500px] h-[500px] border-[1.5px] border-gray-100 rounded-full opacity-60 pointer-events-none" />
      <div className="absolute right-10 -bottom-20 w-[600px] h-[600px] border-[1.5px] border-gray-100 rounded-full opacity-60 pointer-events-none" />

      {/* 2. Navigation Controls */}
      <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 flex justify-between z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <button className="p-3 bg-white/80 backdrop-blur-md border border-gray-200 rounded-xl shadow-lg hover:bg-black hover:text-white transition-all transform hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button className="p-3 bg-white/80 backdrop-blur-md border border-gray-200 rounded-xl shadow-lg hover:bg-black hover:text-white transition-all transform hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 w-full z-10 h-full">
        
        {/* 3. Left Side: Two Hero Products Showcase (No Overlap) */}
        <div className="relative flex items-center justify-center h-full">
          {/* Broadened Shadow for two images */}
          <div className="absolute bottom-12 w-[85%] h-12 bg-black/[0.04] blur-3xl rounded-full" />
          
          {/* Flex Container for side-by-side images */}
          <div className="relative flex flex-row items-center gap-8 translate-x-4">
            {/* First Image - Size adjusted for row layout */}
            <div className="relative w-[320px] h-[400px] transform transition-all duration-700 ease-out group-hover:-translate-y-4 group-hover:rotate-1">
              <Image 
                src="/babypic7.jpg" 
                alt="Hero Baby Product 1" 
                fill 
                className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
                priority
              />
            </div>

            {/* Second Image - SIZE INCREASED (Previously missing/hidden) */}
            <div className="relative w-[320px] h-[400px] transform transition-all duration-700 ease-out group-hover:-translate-y-6 group-hover:-rotate-1">
              <Image 
                src="/babypic5.jpg" 
                alt="Hero Baby Product 2" 
                fill 
                className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
              />
            </div>
          </div>
        </div>

        {/* 4. Right Side: Premium Copy */}
        <div className="flex flex-col justify-center pl-8 md:pl-20 space-y-2">
          <h2 className="text-black text-6xl md:text-[85px] font-black tracking-tighter uppercase leading-[0.9] transition-transform duration-500 group-hover:translate-x-2">
            Stroll <br/> 
            <span className="text-transparent" style={{ WebkitTextStroke: '1.5px black' }}>
              With Joy
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg font-medium tracking-tight mt-6 max-w-xs">
            Unravel adventures in every single step with our premium collection.
          </p>
          
          <div className="pt-10 space-y-1">
            <p className="text-gray-400 text-[10px] uppercase font-bold tracking-[0.2em]"></p>
            <div className="flex items-center gap-4">
              <button className="bg-black text-white px-10 py-4 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
            Shop Now
          </button>
            </div>
          </div>

          {/* Progress Indicators */}
         
        </div>
      </div>

      {/* Brand Badge */}
      <div className="absolute top-10 right-10">
         <div className="bg-black text-white w-14 h-14 rounded-full flex items-center justify-center font-black text-lg shadow-2xl border-4 border-white transform hover:rotate-12 transition-transform">
            1
         </div>
      </div>
    </section>
  );
};

export default Heropage;