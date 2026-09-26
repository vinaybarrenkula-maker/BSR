import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Crown } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-cream-yellow border-t border-black/10 pt-16 pb-8 relative overflow-hidden">
      {/* Background logo watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bold text-black/[0.03] pointer-events-none select-none">
        BSR
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 border-2 border-black flex flex-col items-center justify-center rotate-45 relative bg-white">
                <Crown className="w-4 h-4 text-gold-500 absolute top-1 -rotate-45" />
                <span className="font-bold text-lg text-black mt-2 -rotate-45">BSR</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl leading-none text-black tracking-widest">BSR</span>
                <span className="text-[10px] text-gold-500 uppercase tracking-widest font-bold">Shopping Mall</span>
              </div>
            </div>
            <p className="text-black/70 text-sm max-w-xs mb-6 font-bold">
              Elevating your style with premium fashion and event wear. Visit us in Bichkunda.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-black/10 flex items-center justify-center text-black hover:text-gold-500 hover:border-gold-500 transition-colors">
                <FaFacebook size={18} />
              </a>
              <a href="https://www.instagram.com/bsr_____abhi?stkn=MWtiYmJkdTZkYmNxZA==" target="_blank" rel="noreferrer" className="w-10 h-10 border border-black/10 flex items-center justify-center text-black hover:text-gold-500 hover:border-gold-500 transition-colors">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-black/10 flex items-center justify-center text-black hover:text-gold-500 hover:border-gold-500 transition-colors">
                <FaTwitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-black font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3 text-center md:text-left">
              {['Home', 'About', 'Products', 'Why Us', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item.toLowerCase().replace(' ', '-')} 
                    smooth={true} 
                    duration={500}
                    className="text-black/60 hover:text-gold-500 transition-colors cursor-pointer text-sm font-bold"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Timing & Address */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-black font-bold mb-6 uppercase tracking-wider text-sm">Visit Us</h4>
            <div className="text-black/70 text-sm space-y-4 font-bold">
              <div>
                <p className="text-black font-bold">Basaweshwara Shopping Mall</p>
                <p>6-11/4/3/2, X Road, opposite of oil mill,<br/>Bichkunda, Telangana 503306</p>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Basaweshwara+shopping+mall,+Bichkunda,+Telangana+503306"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-2 text-gold-500 hover:underline text-xs uppercase tracking-wider"
                >
                  📍 Get Directions →
                </a>
              </div>
              <div>
                <strong className="block text-black mb-1">Email:</strong>
                <p>basaweshwarabsr@gmail.com</p>
              </div>
              <div>
                <strong className="block text-black mb-1">Opening Hours:</strong>
                <p>Mon - Sun: 9:00 AM - 9:00 PM</p>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-black/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-black/40 uppercase tracking-widest font-bold">
          <p>&copy; {new Date().getFullYear()} BSR Shopping Mall. All rights reserved.</p>
          <p>Proprietor: B. Abhiram</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
