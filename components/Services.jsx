import { 
  Shirt, 
  Paintbrush, 
  Award, 
  Palette, 
  Clock, 
  Shield 
} from 'lucide-react';

const services = [
  {
    icon: Shirt,
    title: 'Corporate Apparel',
    description: 'Professional embroidery for business attire, polo shirts, and business attire with your company logo.',
    features: [
      'Bulk ordering',
      'Brand consistency', 
      'Quality guarantee'
    ]
  },
  {
    icon: Paintbrush,
    title: 'Custom Branding',
    description: 'Create stunning embroidered designs for your marketing campaigns and promotional materials.',
    features: [
      'Custom designs',
      'Logo placement',
      'Multiple formats',
      'Creative consultation'
    ]
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'High-end embroidery using the finest materials and latest technology for superior results.',
    features: [
      'Premium threads',
      'Precision stitching',
      'Durability tested',
      'Luxury finish'
    ]
  },
  {
    icon: Palette,
    title: 'Design Services',
    description: 'Professional design consultation and creation services to bring your unique vision to life.',
    features: [
      'Design consultation',
      'Custom artwork',
      'Vector conversion',
      'Color matching'
    ]
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'Efficient and fast service without compromising quality, ensuring your deadlines every time.',
    features: [
      'Express service',
      'Rush orders',
      'Real-time updates',
      'Flexible scheduling'
    ]
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Rigorous quality control processes ensure every piece meets our high standards and your expectations.',
    features: [
      'Quality control',
      'Satisfaction guarantee',
      'Return support',
      'After-care service'
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-[#003366] to-[#5c9ce5] bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From corporate branding to personal projects, we offer comprehensive embroidery solutions tailored to your specific needs and requirements.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl transition-all duration-300 hover:scale-[1.02] group border border-gray-200 hover:border-[#003366]/30 shadow-sm hover:shadow-md"
            >
              <div className="mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#003366] to-[#5c9ce5] rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-[#5c9ce5] rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}