import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Database, Cloud, Brain, Wrench, Users } from 'lucide-react';
import { skills } from '../data/mockData';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = {
    'All': { icon: Code, color: 'light-pink' },
    'Frontend': { icon: Code, color: 'mid-blue' },
    'Backend': { icon: Database, color: 'mid-purple' },
    'AI/ML': { icon: Brain, color: 'mid-green' },
    'Database': { icon: Database, color: 'mid-orange' },
    'Cloud': { icon: Cloud, color: 'light-yellow' },
    'DevOps': { icon: Wrench, color: 'dark-green' },
    'Tools': { icon: Wrench, color: 'mid-pink' },
    'Programming': { icon: Code, color: 'dark-blue' }
  };

  const filteredSkills = activeCategory === 'All' 
    ? skills.technical 
    : skills.technical.filter(skill => skill.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section id="skills" className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-mid-purple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-mid-blue/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-light-pink mx-auto rounded-full" />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {Object.entries(categories).map(([category, { icon: Icon, color }]) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? `bg-${color} text-black shadow-lg transform scale-105`
                  : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              <Icon size={18} />
              <span className="font-mono text-sm uppercase tracking-wider">{category}</span>
            </button>
          ))}
        </motion.div>

        {/* Technical Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16"
        >
          <AnimatePresence mode="wait">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                layout
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2 } 
                }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg text-white">{skill.name}</h3>
                  <span className={`service-button bg-${categories[skill.category]?.color || 'light-pink'} text-black text-xs px-3 py-1`}>
                    {skill.category}
                  </span>
                </div>
                
                {/* Progress Bar */}
                <div className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-mid-grey">Proficiency</span>
                    <span className="text-sm font-bold text-light-pink">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="bg-gradient-to-r from-light-pink to-mid-purple h-2 rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-3xl font-display font-bold text-white mb-8 flex items-center justify-center">
            <Users className="text-light-pink mr-3" size={32} />
            Soft Skills
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {skills.soft.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
                className="service-button bg-white text-black px-6 py-3 text-sm font-medium hover:bg-light-pink transition-colors duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;