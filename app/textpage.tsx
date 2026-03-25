import React from 'react';

const Textcontent = () => {
  return (
    <main className="w-full  bg-slate-100  min-h-screen font-sans">
      {/* 1. Header Section */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pt-24 pb-16 border-b border-gray-100">
        <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-gray-400 block mb-4">
          Established 2024
        </span>
        <h1 className="text-6xl md:text-8xl font-black text-black tracking-tighter uppercase leading-[0.85] max-w-4xl">
          Crafting Memories <br /> 
          <span className="text-transparent" style={{ WebkitTextStroke: '1.5px black' }}>
            Through Quality
          </span>
        </h1>
      </section>

      {/* 2. Main Body Section */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Side: Summary/Intro */}
          <div className="lg:col-span-4">
            <p className="text-xl font-bold text-black leading-tight sticky top-32">
              At BabyCrush, we believe the first years should be defined by comfort, safety, and an uncompromising eye for detail.
            </p>
          </div>

          {/* Right Side: Detailed Content */}
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-6">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-black">
                Our Philosophy
              </h3>
              <p className="text-gray-500 text-lg leading-relaxed">
                We started with a simple realization: the market for baby essentials was filled with clutter, but lacked soul. We set out to create a collection that strips away the noise, focusing on premium materials and minimalist design that fits into the modern home.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed">
                Every product in our catalog—from our signature strollers to our organic clothing—undergoes a rigorous selection process. We don't just sell products; we curate a lifestyle that honors the purity of childhood.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-gray-100">
              <div className="space-y-4">
                <h4 className="text-black font-bold uppercase text-sm tracking-widest">Sustainability</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Our packaging is 100% recyclable. We partner with ethical manufacturers who prioritize the planet as much as the product.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-black font-bold uppercase text-sm tracking-widest">Safety First</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Every item is triple-tested for safety. We exceed global standards because "good enough" isn't in our vocabulary.
                </p>
              </div>
            </div>

            {/* Blockquote Style */}
            <div className="py-12 px-8 bg-gray-50 border-l-4 border-black italic">
              <p className="text-2xl font-light text-gray-700 leading-relaxed">
                "Parenthood is a journey of a thousand steps. We just want to make sure every one of them is taken in comfort."
              </p>
              <span className="block mt-4 text-xs font-black uppercase tracking-widest text-black">
                — Founders, BabyCrush
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CTA Section */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-32 text-center">
        <h2 className="text-4xl font-black text-black uppercase tracking-tighter mb-8">
          Join the community
        </h2>
        <button className="px-12 py-4 bg-black text-white text-xs font-bold uppercase tracking-[0.3em] hover:bg-gray-800 transition-all rounded-full">
          Contact Us
        </button>
      </section>
    </main>
  );
};

export default Textcontent;