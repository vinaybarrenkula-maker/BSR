import React from 'react';
import { motion } from 'framer-motion';
import { Star, TrendingUp, IndianRupee, Layers, Heart } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Star className="w-8 h-8" />,
      title: "Premium Quality",
      desc: "We source only the finest fabrics and materials."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Latest Trends",
      desc: "Stay ahead with our constantly updated fashion lines."
    },
    {
      icon: <IndianRupee className="w-8 h-8" />,
      title: "Affordable Prices",
      desc: "Luxury looks without the extravagant price tags."
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Huge Collection",
      desc: "Everything you need under one roof."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Friendly Service",
      desc: "Customer satisfaction is our utmost priority."
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-transparent relative border-y border-black/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/3">
            <h4 className="text-gold-500 tracking-widest text-sm font-bold uppercase mb-3">The BSR Advantage</h4>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Why Choose <br /><span className="text-gold-500">Our Store?</span>
            </h2>
            <p className="text-black/70 mb-8 leading-relaxed font-bold">
              At Basaweshwara Shopping Mall, we redefine the shopping experience. We combine quality, variety, and exceptional service.
            </p>
            <div className="w-20 h-1 bg-black"></div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/90 backdrop-blur-md border border-gold-500/10 p-8 group shadow-xl hover:border-gold-500/30 transition-all duration-300"
              >
                <div className="text-gold-500 mb-6 transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{reason.title}</h3>
                <p className="text-black/60 text-sm leading-relaxed font-bold">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
