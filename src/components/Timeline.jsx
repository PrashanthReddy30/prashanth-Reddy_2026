import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Briefcase, Target, MessageSquare } from 'lucide-react';

const timelineData = [
  {
    role: "Roto Artist",
    company: "Phantom FX",
    icon: <Activity className="w-5 h-5" />,
    logo: "https://phantomfx.com/wp-content/uploads/sites/45/2021/02/pixoo-black-logo.png",
    description: "PhantomFX (Phantom Digital Effects Limited) is a top-tier Indian visual effects (VFX) and animation studio headquartered in Chennai. Established in 2011, it has grown from a 4-artist team to a prolific studio of over 600 members.",
  },
  {
    role: "Assistant Manager",
    company: "RIFT (Rotomaker International Film & Television Institute)",
    icon: <Briefcase className="w-5 h-5" />,
    logo: "https://riftifilmschool.com/wp-content/uploads/2025/11/Untitled-1-copy.jpg",
    description: "A prominent media and film school based in Hyderabad, India. It provides hands-on professional training across multiple creative disciplines to help students build careers in the entertainment industry.",
  },
  {
    role: "Business Development Manager",
    company: "Lakme Academy",
    icon: <Target className="w-5 h-5" />,
    logo: "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=100071881734491",
    description: "Growth strategy, client relations, and identifying new market opportunities.",
  },
  {
    role: "Marketing",
    company: "Rotomaker Institute",
    icon: <MessageSquare className="w-5 h-5" />,
    logo: "https://rotomaker.com/img/rmlogo3.png",
    description: "Market analysis, campaign strategy, professional communication, and brand positioning.",
  }
];

const Timeline = () => {
  return (
    <section id="journey" className="py-24 px-6 relative z-10 bg-transparent">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional <span className="text-primary">Journey</span></h2>
        </motion.div>

        <div className="relative">
          {/* Vertical Center Line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-white/10"></div>
          
          {timelineData.map((item, index) => {
            const isRight = index % 2 === 0; // index 0 (Roto) goes on the right
            
            return (
              <div key={index} className={`relative flex items-center w-full mb-16 ${isRight ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                
                {/* Empty space for one side on desktop */}
                <div className="hidden md:block w-[50%] px-10"></div>
                
                {/* Center Icon */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white border-4 border-[#0A0D0D] z-10 shadow-[0_0_15px_rgba(0,163,255,0.6)]">
                  {item.icon}
                </div>
                
                {/* Content Card */}
                <div className="w-[calc(100%-3rem)] ml-16 md:ml-0 md:w-[50%] md:px-10">
                  <motion.div 
                    initial={{ opacity: 0, x: isRight ? 50 : -50, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                    className="bg-[#111414] border border-white/5 p-8 rounded-2xl shadow-xl hover:border-white/10 transition-colors"
                  >
                    <h3 className="text-xl font-bold text-white mb-1">{item.role}</h3>
                    <p className="text-secondary text-sm mb-6">{item.company}</p>
                    
                    {item.logo && (
                      <div className="bg-[#1A1F1F] border border-white/5 rounded-lg p-3 w-32 h-14 flex items-center justify-center mb-6 overflow-hidden">
                        <img 
                          src={item.logo} 
                          alt={item.company} 
                          className="max-w-full max-h-full object-contain mix-blend-screen opacity-90 hover:opacity-100 transition-opacity" 
                        />
                      </div>
                    )}
                    
                    <p className="text-secondary/80 text-sm leading-relaxed">{item.description}</p>
                  </motion.div>
                </div>
                
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
