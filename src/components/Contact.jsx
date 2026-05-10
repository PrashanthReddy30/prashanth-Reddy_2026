import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 relative z-10 bg-transparent border-t border-white/5">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            Let's create <span className="text-primary drop-shadow-[0_0_15px_rgba(0,163,255,0.4)]">cinematic</span> <br />
            excellence <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">together.</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {/* Email Button */}
          <motion.a
            href="mailto:chinnaprashanth06@gmail.com"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-[#111414] border border-white/10 hover:border-primary/50 text-white px-10 py-5 rounded-full transition-all duration-300 shadow-xl group"
          >
            <Mail className="text-primary w-6 h-6 group-hover:scale-110 transition-transform" />
            <span className="font-semibold text-xl">Email</span>
          </motion.a>

          {/* LinkedIn Button */}
          <motion.a
            href="https://www.linkedin.com/in/prashanth-reddy-46aa74252"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-[#111414] border border-white/10 hover:border-primary/50 text-white px-10 py-5 rounded-full transition-all duration-300 shadow-xl group"
          >
            <Linkedin className="text-primary w-6 h-6 group-hover:scale-110 transition-transform" />
            <span className="font-semibold text-xl">LinkedIn</span>
          </motion.a>

          {/* WhatsApp Button */}
          <motion.a
            href="https://wa.me/919666166967"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-[#111414] border border-white/10 hover:border-primary/50 text-white px-10 py-5 rounded-full transition-all duration-300 shadow-xl group"
          >
            <MessageCircle className="text-primary w-6 h-6 group-hover:scale-110 transition-transform" />
            <span className="font-semibold text-xl">WhatsApp</span>
          </motion.a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/10 text-center">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-secondary/40 text-sm tracking-[0.3em] uppercase font-bold"
        >
          © 2026 M. Prashanth Reddy
        </motion.p>
      </div>
    </section>
  );
};

export default Contact;
