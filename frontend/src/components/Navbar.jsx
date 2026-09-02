import React, { useState, useEffect } from 'react';
import { Menu, X, Crown } from 'lucide-react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Collections', to: 'products' },
    { name: 'Why Us', to: 'why-us' },
    { name: 'Gallery', to: 'gallery' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        (isScrolled || isMobileMenuOpen) ? 'bg-white/90 backdrop-blur-xl border-b border-black/5 py-3 shadow-md' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="home" smooth={true} duration={500} className="cursor-pointer flex items-center gap-6 group">
          <div className="w-12 h-12 border-2 border-gold-500 rounded-full flex flex-col items-center justify-center relative bg-transparent transition-transform duration-500 group-hover:scale-110">
            <Crown className={`w-4 h-4 mb-0.5 transition-colors duration-300 ${(isScrolled || isMobileMenuOpen) ? 'text-black' : 'text-gold-500'}`} />
            <span className={`font-bold text-xs tracking-wider transition-colors duration-300 ${(isScrolled || isMobileMenuOpen) ? 'text-black' : 'text-white'}`}>BSR</span>
          </div>
          <div className="flex flex-col">
            <span className={`font-bold text-2xl leading-none tracking-widest group-hover:text-gold-500 transition-colors duration-300 ${(isScrolled || isMobileMenuOpen) ? 'text-black' : 'text-white'}`}>BSR</span>
            <span className="text-[10px] text-gold-400 uppercase tracking-[0.3em] font-bold mt-1">Shopping Mall</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80}
              className={`text-sm font-bold cursor-pointer transition-all duration-300 uppercase tracking-[0.2em] relative group ${
                isScrolled ? 'text-black/80 hover:text-black' : 'text-white/80 hover:text-gold-400'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gold-500 transition-all duration-300 group-hover:w-full`}></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden transition-colors ${(isScrolled || isMobileMenuOpen) ? 'text-black hover:text-gold-500' : 'text-white hover:text-gold-500'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass absolute top-full left-0 w-full border-t border-black/5 flex flex-col py-4 px-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80}
              className="text-sm font-bold text-black/80 hover:text-gold-500 cursor-pointer transition-colors uppercase tracking-wider"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
