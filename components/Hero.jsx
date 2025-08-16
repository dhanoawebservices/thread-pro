import { Star, Users, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[hsl(240_10%_3.9%)] via-[hsl(250_85%_15%)] to-[hsl(280_85%_20%)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-800/50 text-purple-200 text-sm font-medium border border-purple-700">
              ⭐ Premium Embroidery Services
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Professional{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Embroidery
                </span>{' '}
                for Modern Brands
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Transform your brand identity with professional embroidery services. From corporate apparel to custom designs, we bring your vision to life with cutting-edge technology and craftsmanship.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <div className="flex items-center text-yellow-400">
                  <Star fill="currentColor" className="w-5 h-5" />
                  <Star fill="currentColor" className="w-5 h-5" />
                  <Star fill="currentColor" className="w-5 h-5" />
                  <Star fill="currentColor" className="w-5 h-5" />
                  <Star fill="currentColor" className="w-5 h-5" />
                </div>
                <span className="font-semibold text-white">4.9/5</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-blue-400" />
                <span className="font-semibold text-white">500+</span>
                <span className="text-gray-300">Happy Clients</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-blue-400" />
                <span className="font-semibold text-white">15 Years</span>
                <span className="text-gray-300">Experience</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full transition-all duration-200 transform hover:scale-105 font-semibold">
                Start Your Project
              </button>
              <button className="border-2 border-gray-600 hover:border-blue-500 text-gray-300 hover:text-blue-400 px-8 py-4 rounded-full transition-all duration-200 font-semibold">
                View Portfolio
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/6292439/pexels-photo-6292439.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional embroidery workshop"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              
              {/* Overlay badges */}
              <div className="absolute top-6 left-6">
                <div className="bg-gray-800/90 backdrop-blur-sm rounded-lg p-3 border border-gray-700">
                  <div className="text-sm font-semibold text-white">24/7 Support</div>
                  <div className="text-xs text-gray-300">Always here to help</div>
                </div>
              </div>
              
              <div className="absolute bottom-6 right-6">
                <div className="bg-green-600/90 backdrop-blur-sm rounded-lg p-3 text-white">
                  <div className="text-sm font-semibold">Fast Delivery</div>
                  <div className="text-xs">Quick turnaround</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}