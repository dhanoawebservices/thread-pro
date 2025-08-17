"use client"
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqData = [
  {
    question: "What makes ThreadPro different from other thread suppliers?",
    answer: "ThreadPro specializes in premium, professionally-grade threads and fabrics. We source directly from certified manufacturers, ensuring consistent quality and authenticity. Our products undergo rigorous quality testing, and we offer expert guidance to help you choose the perfect materials for your projects."
  },
  {
    question: "Do you offer bulk pricing for large orders?",
    answer: "Yes! We offer competitive bulk pricing for orders over $500. Our bulk discount tiers start at 10% off for orders over $500, 15% off for orders over $1000, and 20% off for orders over $2000. Contact our sales team for custom quotes on larger quantities."
  },
  {
    question: "What is your return and exchange policy?",
    answer: "We offer a 30-day return policy for unopened, unused products in their original packaging. Custom or cut-to-order items are not eligible for return unless defective. Returns are easy through our online portal, and we provide prepaid return labels for defective items."
  },
  {
    question: "How fast do you ship orders?",
    answer: "Standard orders ship within 1-2 business days. We offer expedited shipping options including Next Day and 2-Day delivery. Orders placed before 2 PM EST ship the same day. International shipping is available with tracking to most countries worldwide."
  },
  {
    question: "Do you provide samples before purchase?",
    answer: "Absolutely! We offer sample packs for $9.99 (refundable with purchase) that include swatches of our most popular threads and fabrics. For bulk orders, we can provide larger samples. This helps ensure you're completely satisfied with the quality and color before placing your full order."
  },
  {
    question: "Are your products eco-friendly and sustainable?",
    answer: "Sustainability is important to us. We offer an extensive eco-friendly collection including organic cotton, bamboo, and recycled polyester threads. Our packaging is biodegradable, and we partner with manufacturers who follow sustainable practices. Look for our 'Eco' badge on qualifying products."
  },
  {
    question: "Can I track my order after purchase?",
    answer: "Yes, you'll receive a tracking number via email once your order ships. You can track your package in real-time through our website or directly with the shipping carrier. We also send notifications for key delivery milestones."
  },
  {
    question: "Do you offer technical support for product selection?",
    answer: "Our team of textile experts is available to help you choose the right products for your specific project needs. Contact us via phone, email, or live chat. We can provide recommendations based on your project type, durability requirements, and budget."
  }
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (index) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <HelpCircle className="text-primary" size={28} />
            <h2 className="text-4xl font-bold text-slate-800">Frequently Asked Questions</h2>
          </div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Find answers to common questions about our products, shipping, and services. 
            Can't find what you're looking for? Contact our support team.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-200">
              <button 
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleItem(index)}
              >
                <span className="text-lg font-semibold text-slate-800 pr-4">
                  {item.question}
                </span>
                <div className="flex-shrink-0">
                  {openItems.includes(index) ? (
                    <ChevronUp className="text-primary transition-transform duration-200" size={24} />
                  ) : (
                    <ChevronDown className="text-slate-400 transition-transform duration-200" size={24} />
                  )}
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openItems.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-5 pt-2">
                  <p className="text-slate-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Support CTA */}
        {/* <div className="mt-16 bg-gradient-to-r from-primary to-primary rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
          <p className="mb-6 opacity-90">
            Our customer support team is here to help you 24/7. Get personalized assistance 
            with product selection, orders, and technical questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Contact Support
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200">
              Live Chat
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default FAQ;