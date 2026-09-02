import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Crown } from 'lucide-react';

const About = () => {
  const occasions = [
    "Weddings",
    "Engagements",
    "Festivals",
    "Family Functions",
    "Special Events"
  ];

  return (
    <section id="about" className="py-24 bg-transparent relative">
      {/* Decorative element */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"></div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-4 border border-black/10 z-0 hidden md:block translate-x-4 translate-y-4"></div>
            <img 
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop" 
              alt="Inside Basaweshwara Shopping Mall" 
              className="relative z-10 w-full h-[500px] object-cover transition-all duration-700 shadow-2xl"
            />
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-black border border-gold-500/30 w-24 h-24 flex flex-col items-center justify-center z-20 hidden md:flex text-center shadow-2xl rotate-45">
              <div className="-rotate-45 flex flex-col items-center justify-center">
                <Crown className="w-5 h-5 text-gold-500 mb-1" />
                <div className="text-xl font-bold text-white leading-none">BSR</div>
                <div className="text-[8px] text-gold-500 uppercase tracking-[0.2em] font-bold mt-1">Est. 1995</div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-gold-500 tracking-widest text-sm font-bold uppercase mb-3">Our Legacy</h4>
              <h2 className="text-4xl md:text-6xl font-bold text-black mb-8 leading-tight">
                Basaweshwara <br /><span className="text-premium-gold gold-glow">Shopping Mall</span>
              </h2>
              
              <p className="text-black/70 mb-6 leading-relaxed font-medium">
                Welcome to BSR Shopping Mall, Bichkunda's premier destination for high-quality fashion. 
                We offer a wide variety of trendy clothes tailored for all age groups. Our curated selections 
                ensure that you always step out in style, no matter the occasion.
              </p>
              
              <div className="bg-white/90 backdrop-blur-md border border-gold-500/10 p-8 mb-8 relative overflow-hidden group shadow-xl">
                <div className="absolute inset-0 bg-gold-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <h3 className="text-black font-bold mb-4 relative z-10 text-lg">Perfect Attire For:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                  {occasions.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="text-gold-500 w-5 h-5" />
                      <span className="text-black font-bold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
