import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-[#151919] border border-white/5 rounded-3xl p-8 md:p-14 shadow-2xl relative overflow-hidden group"
        >
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-700"></div>

          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white flex items-center">
            <span className="w-8 h-1 bg-primary mr-4 block rounded"></span>
            About Me
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-secondary leading-relaxed font-light">
            <p>
              I am a dedicated professional with a diverse background spanning Business Development, Strategic Marketing, and Visual Effects (VFX). With a foundation in <span className="text-white font-medium">Computer Science</span> and extensive experience in leadership roles, I bring a unique blend of analytical thinking and creative execution to every project.
            </p>
            <p>
              Currently, I am channeling my technical skills and artistic vision into the VFX Industry, where I contribute to cinematic storytelling through precision work in the Roto Department. My journey from managing business operations to crafting high-quality visual effects reflects my adaptability and passion for continuous growth in the digital era.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
