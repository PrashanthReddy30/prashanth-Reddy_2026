import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MonitorPlay, Code, Sparkles, X } from 'lucide-react';

const skillCategories = [
  {
    title: "VFX Tools",
    icon: <MonitorPlay className="w-8 h-8" />,
    skills: [
      {
        name: "Silhouette",
        usage: "It is the industry-standard software for high-end Rotoscoping and Paint.",
        learned: "Mastered advanced roto techniques, shape management, and non-destructive painting.",
        purpose: "Used to create clean mattes and remove unwanted objects from live-action footage."
      },
      {
        name: "Mocha",
        usage: "A powerful Academy Award-winning tool for Planar Tracking.",
        learned: "Gained expertise in tracking difficult surfaces and exporting tracking data for compositing.",
        purpose: "Essential for screen replacements, stabilization, and accelerating the rotoscoping process."
      },
      {
        name: "Nuke (Basic)",
        usage: "The world’s leading node-based digital compositing application.",
        learned: "Developed a foundation in node-based workflows, 2D tracking, and basic color grading.",
        purpose: "Used to merge CGI elements with live-action plates to create a seamless final shot."
      },
      {
        name: "Fusion",
        usage: "A versatile 2D/3D compositing and motion graphics software.",
        learned: "Learned keying, particle systems, and integrating visual effects within a timeline.",
        purpose: "Popular for creating fast-paced visual effects and high-quality broadcast graphics."
      },
      {
        name: "Bojjo",
        usage: "A specialized tool used for workflow automation and production management.",
        learned: "Understood how to optimize VFX pipelines and automate repetitive manual tasks.",
        purpose: "Helps studios increase efficiency by managing data and streamlining artist workflows."
      }
    ]
  },
  {
    title: "Programming",
    icon: <Code className="w-8 h-8" />,
    skills: [
      {
        name: "Basic Python",
        usage: "A high-level, versatile programming language used worldwide.",
        learned: "Learned core logic, scripting basics, and how to automate simple tasks.",
        purpose: "The backbone of pipeline automation in VFX and the primary language for AI and web backends."
      },
      {
        name: "Microsoft Office",
        usage: "A standard suite of productivity applications for business operations.",
        learned: "Proficient in data organization via Excel and professional reporting via Word and PowerPoint.",
        purpose: "Used for project coordination, documentation, and managing professional communications."
      },
      {
        name: "Power BI",
        usage: "A business analytics service by Microsoft for data visualization.",
        learned: "Learned to transform raw data into interactive dashboards and visual reports.",
        purpose: "Helps organizations make data-driven decisions by visualizing complex trends clearly."
      }
    ]
  },
  {
    title: "Future Tech",
    icon: <Sparkles className="w-8 h-8" />,
    skills: [
      {
        name: "AI Content Engineer",
        usage: "An emerging role focused on utilizing Generative AI for digital production.",
        learned: "Mastered prompt engineering and the integration of AI-generated assets into creative workflows.",
        purpose: "To significantly reduce production time while maintaining high-quality creative output."
      },
      {
        name: "Interactive Web Developer",
        usage: "Creating modern, high-performance websites with unique user experiences.",
        learned: "Focused on building responsive sites using frameworks like Vite/React and deploying via Netlify.",
        purpose: "To build engaging digital portfolios and robust web applications."
      }
    ]
  }
];

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  // Prevent background scrolling when modal is open
  React.useEffect(() => {
    if (activeSkill) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeSkill]);

  return (
    <section id="skills" className="py-24 px-6 relative z-10 bg-[#0A0D0D]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical <span className="text-primary">Arsenal</span></h2>
          <p className="text-secondary text-lg">Click on any software to see details</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#151919] border border-white/5 rounded-3xl p-8 shadow-lg relative overflow-hidden flex flex-col items-center"
            >
              <div className="text-primary mb-4 bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center">
                {category.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-8 text-center">{category.title}</h3>
              
              <ul className="space-y-6 w-full">
                {category.skills.map((skill, i) => (
                  <motion.li 
                    key={i} 
                    whileHover={{ x: 5 }}
                    onClick={() => setActiveSkill(skill)}
                    className="flex items-center text-secondary/90 cursor-pointer group hover:text-white transition-colors"
                  >
                    <span className="text-primary mr-4 w-2 h-2 rounded-full bg-primary shrink-0 group-hover:glow-effect transition-all"></span>
                    <span className="text-lg">{skill.name}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal / Pop-up Dialog */}
      <AnimatePresence>
        {activeSkill && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveSkill(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 10, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#151919] border border-white/10 p-8 md:p-10 rounded-3xl max-w-lg w-full shadow-2xl relative my-8"
            >
              <button 
                onClick={() => setActiveSkill(null)}
                className="absolute top-4 right-4 text-secondary hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-2 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="flex items-center gap-3 mb-8">
                <div className="w-3 h-3 bg-primary rounded-full glow-effect"></div>
                <h3 className="text-3xl font-bold text-white pr-8">{activeSkill.name}</h3>
              </div>
              
              <div className="space-y-8">
                <div className="bg-black/30 p-5 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors">
                  <span className="text-primary font-semibold flex items-center gap-2 mb-2 text-sm uppercase tracking-wider">
                    Usage
                  </span>
                  <p className="text-secondary/90 leading-relaxed text-lg">{activeSkill.usage}</p>
                </div>
                
                <div className="bg-black/30 p-5 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors">
                  <span className="text-primary font-semibold flex items-center gap-2 mb-2 text-sm uppercase tracking-wider">
                    What I Learned
                  </span>
                  <p className="text-secondary/90 leading-relaxed text-lg">{activeSkill.learned}</p>
                </div>
                
                <div className="bg-black/30 p-5 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors">
                  <span className="text-primary font-semibold flex items-center gap-2 mb-2 text-sm uppercase tracking-wider">
                    Purpose
                  </span>
                  <p className="text-secondary/90 leading-relaxed text-lg">{activeSkill.purpose}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Skills;
