import { Star, Users, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
              ✨ Premium Embroidery Services
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Professional{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Embroidery
                </span>{' '}
                for Modern Brands
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Transform your brand identity with professional embroidery services. From corporate apparel to custom designs, we bring your vision to life with cutting-edge technology and craftsmanship.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <div className="flex items-center text-yellow-500">
                  <Star fill="currentColor" className="w-5 h-5" />
                  <Star fill="currentColor" className="w-5 h-5" />
                  <Star fill="currentColor" className="w-5 h-5" />
                  <Star fill="currentColor" className="w-5 h-5" />
                  <Star fill="currentColor" className="w-5 h-5" />
                </div>
                <span className="font-semibold text-gray-900">4.9/5</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-gray-900">500+</span>
                <span className="text-gray-600">Happy Clients</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-gray-900">15 Years</span>
                <span className="text-gray-600">Experience</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full transition-all duration-200 transform hover:scale-105 font-semibold shadow-lg">
                Start Your Project
              </button>
              <button className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-full transition-all duration-200 font-semibold">
                View Portfolio
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/6292439/pexels-photo-6292439.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional embroidery workshop"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              
              {/* Overlay badges */}
              <div className="absolute top-6 left-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="text-sm font-semibold text-gray-900">24/7 Support</div>
                  <div className="text-xs text-gray-600">Always here to help</div>
                </div>
              </div>
              
              <div className="absolute bottom-6 right-6">
                <div className="bg-green-500/90 backdrop-blur-sm rounded-lg p-3 shadow-lg text-white">
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