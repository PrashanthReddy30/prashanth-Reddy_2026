import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School, Award } from 'lucide-react';

const educationData = [
  {
    title: "BSc Degree",
    year: "2018",
    description: "A Bachelor of Science (BSc) is a globally recognised undergraduate academic degree awarded for studies in science, technology, mathematics, and related disciplines.",
    icon: <GraduationCap className="w-8 h-8" />
  },
  {
    title: "Intermediate Education",
    year: "2015",
    description: "The Telangana Board of Secondary Education (BSE Telangana) conducts the 10th class (SSC) examinations, which are critical for secondary education completion.",
    icon: <School className="w-8 h-8" />
  },
  {
    title: "SSC",
    year: "2013",
    description: "The Telangana Board of Secondary Education (BSE Telangana) conducts the Secondary School Certificate (SSC) or 10th Class public examinations, serving as a crucial milestone for students.",
    icon: <Award className="w-8 h-8" />
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 relative z-10 bg-transparent">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Academic <span className="text-primary">Foundations</span></h2>
          <p className="text-secondary text-lg">My educational milestones</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-[#151919] border border-white/5 rounded-3xl p-8 hover:border-primary/50 transition-all duration-300 shadow-lg relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-500"></div>
              
              <div className="text-primary mb-6 bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-primary font-semibold mb-4">{item.year}</p>
              <p className="text-secondary/80 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
