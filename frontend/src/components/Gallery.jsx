import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=1964&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop",
    "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=2070&auto=format&fit=crop",
  ];

  return (
    <section id="gallery" className="py-24 bg-transparent relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-gold-500/10 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h4 className="text-gold-500 tracking-[0.4em] text-[10px] md:text-xs font-bold uppercase mb-4">Visual Story</h4>
          <h2 className="text-4xl md:text-7xl font-bold text-black mb-8 leading-tight">
            The Fashion <br /><span className="text-premium-gold gold-glow">Gallery</span>
          </h2>
          <p className="text-black/60 font-medium">
            A glimpse into our world of luxury and style. Every piece in our collection tells a story of elegance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:auto-rows-[350px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative group overflow-hidden border border-black/5 shadow-xl ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : 
                index === 3 ? 'md:col-span-2' : 'md:col-span-1'
              }`}
            >
              <img 
                src={img} 
                alt={`Gallery visual ${index + 1}`} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out opacity-90 group-hover:opacity-100"
              />
              {/* Premium Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
              
              {/* Corner decorative borders */}
              <div className="absolute top-6 left-6 w-10 h-10 border-t-2 border-l-2 border-gold-500 scale-0 group-hover:scale-100 transition-transform duration-500 origin-top-left z-20"></div>
              <div className="absolute bottom-6 right-6 w-10 h-10 border-b-2 border-r-2 border-gold-500 scale-0 group-hover:scale-100 transition-transform duration-500 origin-bottom-right z-20"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
