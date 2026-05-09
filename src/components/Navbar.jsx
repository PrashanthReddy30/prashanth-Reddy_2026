import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Film, GraduationCap, Briefcase, Zap, Mail } from 'lucide-react';

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
    { name: 'Home', href: '#', icon: <Home className="w-4 h-4" /> },
    { name: 'About', href: '#about', icon: <User className="w-4 h-4" /> },
    { name: 'Movies', href: '#work', icon: <Film className="w-4 h-4" /> },
    { name: 'Journey', href: '#journey', icon: <Briefcase className="w-4 h-4" /> },
    { name: 'Education', href: '#education', icon: <GraduationCap className="w-4 h-4" /> },
    { name: 'Arsenal', href: '#skills', icon: <Zap className="w-4 h-4" /> },
    { name: 'Contact', href: '#contact', icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 py-6`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-end items-center">
        
        {/* Desktop Links - "Gmail Style" Rounded Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0,163,255,0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary bg-primary text-background font-bold text-sm shadow-[0_0_15px_rgba(0,163,255,0.4)] transition-all duration-300"
            >
              <span className="text-background">{link.icon}</span>
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="bg-black/50 backdrop-blur-md border border-white/10 p-3 rounded-full text-white"
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-y-0 right-0 w-64 bg-background border-l border-white/5 z-[101] shadow-2xl p-8 flex flex-col gap-6"
          >
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="self-end p-2 text-secondary"
            >
              <X />
            </button>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-4 text-lg font-medium text-secondary hover:text-primary transition-colors"
              >
                <span className="text-primary">{link.icon}</span>
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
