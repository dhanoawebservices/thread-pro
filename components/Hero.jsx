import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:pb-28 lg:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      size={18} 
                      className="text-primary fill-current" 
                    />
                  ))}
                </div>
                <span className="text-sm text-slate-600">
                  Trusted by 10,000+ customers
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                Premium Threads for
                <span className="text-primary block">Modern Living</span>
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                Discover our curated collection of high-quality fabrics, threads, and textiles. 
                Crafted for professionals and enthusiasts who demand excellence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-[#002244] transition-all duration-200 flex items-center justify-center gap-2 group">
                <span className="font-semibold">Shop Collection</span>
                <ArrowRight 
                  size={20} 
                  className="group-hover:translate-x-1 transition-transform duration-200" 
                />
              </button>
              <button className="border border-slate-300 text-slate-700 px-8 py-4 rounded-lg hover:border-slate-400 hover:bg-slate-50 transition-all duration-200 font-semibold">
                Watch Story
              </button>
            </div>

            <div className="flex flex-wrap gap-8 pt-6">
              <div className="min-w-[100px]">
                <div className="text-3xl font-bold text-slate-900">500+</div>
                <div className="text-sm text-slate-600">Premium Products</div>
              </div>
              <div className="min-w-[100px]">
                <div className="text-3xl font-bold text-slate-900">24/7</div>
                <div className="text-sm text-slate-600">Expert Support</div>
              </div>
              <div className="min-w-[100px]">
                <div className="text-3xl font-bold text-slate-900">99%</div>
                <div className="text-sm text-slate-600">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-full">
            <div className="relative z-10 h-full">
              <Image 
                src="/images/2.jpg" 
                alt="Premium Thread Collection"
                className="w-full h-[550px] object-cover rounded-2xl shadow-2xl"
                width={800}
                height={600}
                priority
              />
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-white p-5 rounded-xl shadow-lg z-20 max-w-[220px]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Star className="text-primary" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-nowrap text-slate-800">Premium Quality</div>
                  <div className="text-sm text-slate-600">100% Authentic</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white p-5 rounded-xl shadow-lg z-20 max-w-[220px]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold text-xl">✓</span>
                </div>
                <div>
                  <div className="font-semibold text-slate-800 text-nowrap">Fast Delivery</div>
                  <div className="text-sm text-slate-600 text-nowrap">2-3 Business Days</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;