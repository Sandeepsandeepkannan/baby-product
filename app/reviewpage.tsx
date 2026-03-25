"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ShoppingCart, Menu, Star, ShoppingBag, ArrowRight, Instagram, Facebook, Twitter, Mail, Phone, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

// --- DATA MOCKUP ---
const products = [
  { id: 1, tag: "Best Seller", name: "Pure Comfort Diapers", price: "₹1,299", rating: 4.8, desc: "LuxeSoft skin protection.", img: "https://images.unsplash.com/photo-1622202240350-137a1a45f949?q=80&w=400" },
  { id: 2, tag: "New", name: "Nightly Relief Gummies", price: "₹899", rating: 4.9, desc: "Natural sleep support.", img: "https://images.unsplash.com/photo-1550573105-4584e7d6a2a1?q=80&w=400" },
  { id: 3, tag: null, name: "Lactation Support", price: "₹2,499", rating: 4.8, desc: "Nutrient-rich for moms.", img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=400" },
  { id: 4, tag: "Premium", name: "Iron & Folic Acid", price: "₹1,150", rating: 4.7, desc: "Essential prenatal vitamins.", img: "https://images.unsplash.com/photo-1471864190281-ad5fe9bb0724?q=80&w=400" },
  { id: 5, tag: "New", name: "Baby Massage Oil", price: "₹650", rating: 4.9, desc: "Organic almond blend.", img: "https://images.unsplash.com/photo-1556229167-7313009bc877?q=80&w=400" }
];

const testimonials = [
  { id: 1, name: "Aisha Khan", rating: 5, text: "The quality is absolutely amazing. Super soft and absorbent.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150" },
  { id: 2, name: "Rohan Sharma", rating: 5, text: "I trust BabyCrush for safe products. Everything feels premium.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150" },
  { id: 3, name: "Sneha Patel", rating: 5, text: "Minimalist designs that fit our home perfectly. Highly recommend.", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150" },
  { id: 4, name: "Vikram Mehta", rating: 5, text: "The strollers are top notch. Very sturdy and easy to maneuver in the city.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150" },
  { id: 5, name: "Priya Das", rating: 4, text: "Gummies worked wonders for our travel schedule. Safe and effective.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150" },
  { id: 6, name: "Karan Johar", rating: 5, text: "Fast shipping and the packaging was beautiful. Great for gifting new parents.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150" }
];

export default function Reviewpage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('Top Rated');
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide effect for testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-100  ">
      
     {/* --- HERO BANNER --- */}
  <header className="px-6 py-10 ">
  <section className="relative w-full max-w-[1400px] mx-auto h-[580px] bg-[#FDFDFD] overflow-hidden rounded-[40px] flex items-center px-12 shadow-sm group bg-slate-100">
    
    {/* Background Decorative Element */}
    <div className="absolute -left-20 top-0 w-[500px] h-[500px] border border-gray-100 rounded-full opacity-50" />
    
    <div className="grid grid-cols-1 md:grid-cols-2 w-full z-10 items-center">
      
      {/* Left Side: Image Showcase */}
      <div className="relative flex items-center justify-center h-full  ">
        <div className="absolute bottom-12 w-[60%] h-12 bg-black/[0.05] blur-3xl rounded-full" />
        <div className="relative w-[450px] h-[500px] transform transition-all duration-700 group-hover:-translate-y-6  ">
          <Image 
            src="/babypic1.jpg" 
            alt="Hero Showcase" 
            fill 
            className="object-contain drop-shadow-2xl  rounded-2xl " 
            priority 
          />
        </div>
      </div>

      {/* Right Side: Refined Editorial Content */}
      <div className="flex flex-col justify-center md:pl-20 space-y-8">
        
        {/* Sub-heading Label */}
        <div className="space-y-1">
          <span className="text-[11px] uppercase font-bold tracking-[0.4em] text-gray-400 block">
            New Collection 2024
          </span>
          <div className="h-0.5 w-12 bg-black" />
        </div>

        {/* Main Title */}
        <h1 className="text-7xl md:text-[85px] font-black tracking-tighter uppercase leading-[0.85] text-black">
          The Art of <br/> 
          <span className="text-transparent" style={{ WebkitTextStroke: '1.5px black' }}>
            Strolling
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-500 text-lg max-w-sm leading-relaxed font-medium tracking-tight">
          Experience uncompromising safety wrapped in minimalist design. Built for the modern parent, designed for the ultimate comfort.
        </p>

        {/* Pricing & CTA Row */}
        <div className="flex items-center gap-10 pt-4">
          <div className="space-y-1">
            
            
          </div>

          {/* Action Button */}
          <button className="bg-black text-white px-10 py-4 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
            Shop Now
          </button>
        </div>

      </div>
    </div>
  </section>
</header>

      {/* --- TESTIMONIALS SLIDER --- */}
      <section className="py-24 bg-slate-100 px-6 overflow-hidden">
        <div className="max-w-[1400px] mx-auto relative">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-black uppercase tracking-tighter">Parents Trust Us</h2>
            
            {/* Slider Dots */}
            <div className="flex gap-2">
              {[...Array(Math.ceil(testimonials.length / 3))].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-1.5 transition-all duration-300 rounded-full ${currentSlide === i ? 'w-8 bg-black' : 'w-2 bg-gray-300'}`}
                />
              ))}
            </div>
          </div>

          <div className="relative">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {/* Grid of 3 items per slide */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-w-full">
                {testimonials.slice(0, 3).map(t => (
                  <div key={t.id} className="bg-white p-8 border border-gray-50 shadow-sm transition-all hover:shadow-md">
                    <div className="flex gap-0.5 mb-6">
                      {[...Array(t.rating)].map((_, i) => <Star key={i} size={12} className="fill-black text-black" />)}
                    </div>
                    <p className="text-sm text-gray-500 italic mb-8">"{t.text}"</p>
                    <div className="flex items-center gap-4">
                      <img src={t.img} className="w-10 h-10 rounded-full object-cover" alt={t.name} />
                      <span className="text-[11px] font-black uppercase tracking-widest">{t.name}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-w-full">
                {testimonials.slice(3, 6).map(t => (
                  <div key={t.id} className="bg-white p-8 border border-gray-50 shadow-sm transition-all hover:shadow-md">
                    <div className="flex gap-0.5 mb-6">
                      {[...Array(t.rating)].map((_, i) => <Star key={i} size={12} className="fill-black text-black" />)}
                    </div>
                    <p className="text-sm text-gray-500 italic mb-8">"{t.text}"</p>
                    <div className="flex items-center gap-4">
                      <img src={t.img} className="w-10 h-10 rounded-full object-cover" alt={t.name} />
                      <span className="text-[11px] font-black uppercase tracking-widest">{t.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}