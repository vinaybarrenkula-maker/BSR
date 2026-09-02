import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import storeBackground from '../assets/store_background.png';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Modern Multi-layered Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 z-10"></div>
        <img 
          src={storeBackground} 
          alt="Basaweshwara Shopping Mall" 
          className="w-full h-full object-cover object-center scale-105"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="inline-block mb-6 px-4 py-1 border border-gold-500/30 rounded-full bg-gold-500/5 backdrop-blur-sm"
          >
            <span className="text-gold-400 tracking-[0.4em] text-[10px] md:text-xs uppercase font-bold">
              Bichkunda's Premium Destination
            </span>
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
            Elevate Your Style at <br />
            <motion.span 
              className="text-premium-gold gold-glow relative inline-block"
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              BSR
              <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent"></span>
            </motion.span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-2xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            Where tradition meets modern elegance. Discover curated collections designed for your most special moments.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Link to="products" smooth={true} duration={500} offset={-80}>
              <button className="button-gold min-w-[200px]">
                Explore Collections
              </button>
            </Link>
            <Link to="contact" smooth={true} duration={500} offset={-80}>
              <button className="border-2 border-white/20 text-white font-bold px-10 py-4 uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-black transition-all duration-500 transform hover:-translate-y-1 shadow-lg active:scale-95 backdrop-blur-sm min-w-[200px]">
                Contact Us
              </button>
            </Link>
          </div>
        </motion.div>
      </div>


    </section>
  );
};

export default Hero;
