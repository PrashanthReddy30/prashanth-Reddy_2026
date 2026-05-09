import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 z-10">
        
        {/* Profile Image Circle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="relative shrink-0"
        >
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-primary/30 p-2 relative">
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-primary/50 bg-[#151919] shadow-[0_0_30px_rgba(0,163,255,0.3)]">
              <img 
                src="/M PrashanthReddy.jpg" 
                alt="M. Prashanth Reddy" 
                className="w-full h-full object-cover scale-110"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x400/151919/00A3FF?text=PR';
                }}
              />
            </div>
            {/* Animated Glow Ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-t-2 border-b-2 border-primary/40"
            ></motion.div>
            
            {/* Decorative Dots */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_#00A3FF]"></div>
          </div>
        </motion.div>
        
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4 leading-tight">
              M. Prashanth <br />
              <span className="text-primary drop-shadow-[0_0_15px_rgba(0,163,255,0.4)]">Reddy</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-xl md:text-2xl text-secondary font-light mb-10 max-w-xl leading-relaxed">
              VFX Specialist | Technical Artist <br className="hidden md:block" />
              <span className="text-primary/80 font-medium">Former Management Professional</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a 
              href="#journey"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="inline-block bg-primary text-background font-bold px-10 py-4 rounded-full text-lg uppercase tracking-wider glow-effect transition-all shadow-lg"
            >
              Explore My Work
            </motion.a>
          </motion.div>
        </div>
        
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <div className="w-[30px] h-[50px] border-2 border-secondary/50 rounded-full flex justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
