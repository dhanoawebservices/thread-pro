export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Premium Products Card */}
          <div className="relative group overflow-hidden rounded-2xl">
            <div className="aspect-[4/3] relative">
              <img
                src="https://images.pexels.com/photos/7688463/pexels-photo-7688463.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Premium embroidered products showcase"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            </div>
            
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-gray-800/90 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Premium Products
                </h3>
                <p className="text-gray-300">
                  High-quality embroidered merchandise and custom apparel
                </p>
              </div>
            </div>
          </div>

          {/* Advanced Technology Card */}
          <div className="relative group overflow-hidden rounded-2xl">
            <div className="aspect-[4/3] relative">
              <img
                src="https://images.pexels.com/photos/7218553/pexels-photo-7218553.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Advanced embroidery machine technology"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            </div>
            
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-gray-800/90 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Advanced Technology
                </h3>
                <p className="text-gray-300">
                  State-of-the-art embroidery equipment and precision crafting
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}