import React from 'react';
import { motion } from 'framer-motion';

const Products = () => {
  const categories = [
    {
      title: "Men's Wear",
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Suits, Casuals & Ethnic"
    },
    {
      title: "Women's Wear",
      image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Sarees, Lehengas & Western"
    },
    {
      title: "Kids Wear",
      image: "https://images.pexels.com/photos/1619697/pexels-photo-1619697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Trendy Outfits for the Little Ones"
    },
    {
      title: "Wedding Collections",
      image: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Premium Bridal & Groom Wear"
    },
    {
      title: "Traditional Wear",
      image: "https://images.pexels.com/photos/15833215/pexels-photo-15833215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Authentic Cultural Attire"
    },
    {
      title: "Fashion Trends",
      image: "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Latest Seasonal Arrivals"
    }
  ];

  return (
    <section id="products" className="py-24 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h4 className="text-gold-500 tracking-[0.4em] text-[10px] md:text-xs font-bold uppercase mb-4">Our Collections</h4>
          <h2 className="text-4xl md:text-7xl font-bold text-black mb-8 leading-tight">
            Curated For <br /><span className="text-premium-gold gold-glow">Elegance</span>
          </h2>
          <p className="text-black/60 font-medium">
            Explore our diverse range of clothing, meticulously selected to provide the finest quality and latest styles for your wardrobe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col bg-white/95 backdrop-blur-md border border-gold-500/10 hover:border-gold-500/50 transition-all duration-500 overflow-hidden shadow-xl hover:shadow-2xl relative"
            >
              <div className="h-[400px] overflow-hidden relative">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="p-8 bg-white/95 backdrop-blur-md flex flex-col items-center text-center relative z-10">
                <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-gold-500 transition-colors duration-300">
                  {cat.title}
                </h3>
                <div className="w-12 h-[2px] bg-gold-500 mb-4 transition-all duration-500 group-hover:w-24"></div>
                <p className="text-black/60 text-sm font-bold tracking-wide uppercase">
                  {cat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
