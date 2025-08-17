import React from "react";
import { TrendingUp, ShoppingBag, Star } from "lucide-react";
import Image from "next/image";

const trendingProducts = [
  {
    id: 1,
    name: "Metallic Gold Thread",
    price: "$79.99",
    originalPrice: "$99.99",
    image: "/images/1.jpg",
    trend: "+45%",
    badge: "Hot",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Vintage Denim Collection",
    price: "$44.99",
    originalPrice: "$59.99",
    image: "/images/2.jpg",
    trend: "+32%",
    badge: "Trending",
    rating: 4.7,
  },
  {
    id: 3,
    name: "Rainbow Silk Threads",
    price: "$89.99",
    originalPrice: "$109.99",
    image: "/images/3.jpg",
    trend: "+28%",
    badge: "New",
    rating: 4.8,
  },
  {
    id: 4,
    name: "Eco Sustainable Pack",
    price: "$54.99",
    originalPrice: "$69.99",
    image: "/images/9.jpg",
    trend: "+38%",
    badge: "Eco",
    rating: 4.6,
  },
];

const TrendingProducts = () => {
  return (
    <section
      id="trending"
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <TrendingUp className="text-primary" size={28} />
            <h2 className="text-4xl font-bold text-slate-800">
              Trending Products
            </h2>
          </div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover what's popular right now. These products are flying off our
            shelves and loved by our community of creators and professionals.
          </p>
        </div>

        {/* Trending Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">85%</div>
            <div className="text-slate-600">Customer Return Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">2.5k+</div>
            <div className="text-slate-600">Orders This Month</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">4.8★</div>
            <div className="text-slate-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">24hr</div>
            <div className="text-slate-600">Fast Shipping</div>
          </div>
        </div>

        {/* Trending Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingProducts.map((product, index) => (
            <div key={product.id} className="group relative">
              <div className="bg-white rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300 overflow-hidden group-hover:-translate-y-1 hover:border-gray-200">
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    width={600}
                    height={600}
                  />

                  {/* Trend Badge */}
                  {product.trend && (
                    <div className="absolute top-3 right-3">
                      <div className="bg-white/95 px-2.5 py-1 rounded-full flex items-center space-x-1 shadow-sm">
                        <TrendingUp size={14} className="text-green-600" />
                        <span className="text-xs font-semibold text-gray-800">
                          {product.trend}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Quick Add Button - Shows on hover */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <button className="bg-white text-gray-900 px-5 py-2.5 rounded-lg font-medium hover:bg-[#003366] hover:text-white transition-colors duration-200 flex items-center space-x-2 shadow-md">
                      <ShoppingBag size={16} />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4 space-y-3">
                  {/* Product Name */}
                  <h3 className="font-medium text-gray-900 text-lg leading-snug line-clamp-2">
                    {product.name}
                  </h3>

                  {/* Rating and Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star
                        // size={16}
                        className="text-primary h-4.5 fill-current"
                      />
                      <span className="text-sm text-gray-600">
                        {product.rating}
                      </span>
                    </div>

                    {/* Status Badge */}
                    {product.badge && (
                      <span
                        className={`text-xs px-3 py-1 rounded-full font-semibold ${
                          product.badge === "Hot"
                            ? "bg-red-100 text-red-800"
                            : product.badge === "Trending"
                            ? "bg-[#003366]/10 text-[#003366]"
                            : product.badge === "New"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        {product.badge}
                      </span>
                    )}
                  </div>

                  {/* Price Section */}
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <span className="text-lg font-bold text-[#003366]">
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs text-gray-400 line-through block">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>

                    {/* Savings */}
                    {product.originalPrice && (
                      <div className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full font-semibold">
                        Save $
                        {(parseFloat(product.originalPrice.slice(1)).toFixed(2) -
                          parseFloat(product.price.slice(1)).toFixed(2)).toFixed(2)}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
