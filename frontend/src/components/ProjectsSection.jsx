import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Filter } from 'lucide-react';
import { projects } from '../data/mockData';
import { Button } from './ui/button';

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);

  const categories = ['All', 'AI/ML', 'Full Stack', 'Data Visualization', 'Blockchain'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-mid-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-light-pink/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold text-black mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-light-pink mx-auto rounded-full mb-6" />
          <p className="text-lg text-dark-grey max-w-3xl mx-auto">
            Explore my latest work showcasing innovative solutions in web development, 
            artificial intelligence, and modern technology stacks.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-16 flex-wrap"
        >
          <Filter className="text-light-pink" size={20} />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`service-button transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-light-pink text-black shadow-lg transform scale-105'
                  : 'bg-white border-2 border-mid-grey text-dark-grey hover:border-light-pink hover:text-light-pink'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Featured Projects Highlight */}
        {selectedCategory === 'All' && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-semibold text-black mb-8 text-center">⭐ Highlighted Work</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  whileHover={{ y: -8, scale: 1.02 }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className={`project-card ${project.bgColor} rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 relative group`}
                >
                  {/* Project Image Placeholder */}
                  <div className="h-48 bg-white/10 flex items-center justify-center mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                      <span className="text-2xl font-bold text-black/60">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-black mb-3 group-hover:text-white transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-black/70 mb-4 group-hover:text-white/80 transition-colors">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span 
                          key={index}
                          className="service-button bg-black/10 text-black text-xs px-3 py-1 group-hover:bg-white/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="service-button bg-black/10 text-black text-xs px-3 py-1">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        className="flex items-center gap-2 bg-black text-white hover:bg-black/80"
                      >
                        <Github size={16} />
                        Code
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex items-center gap-2 border-black text-black hover:bg-black hover:text-white"
                      >
                        <ExternalLink size={16} />
                        Live
                      </Button>
                    </div>

                    {/* Featured Badge */}
                    <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-black text-xs font-medium">Featured</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* All Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className={`project-card bg-${project.bgColor} rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 relative group`}
              >
                {/* Project Image Placeholder */}
                <div className="h-48 bg-white/10 flex items-center justify-center mb-6 relative overflow-hidden">
                  <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-black/60">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  
                  {/* Hover Overlay */}
                  <AnimatePresence>
                    {hoveredProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4"
                      >
                        <Button size="sm" className="bg-white text-black hover:bg-white/90">
                          <Github size={16} className="mr-2" />
                          Code
                        </Button>
                        <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                          <ExternalLink size={16} className="mr-2" />
                          Live
                        </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-xl font-semibold text-black group-hover:text-white transition-colors">
                      {project.title}
                    </h4>
                    <span className="service-button bg-black/10 text-black text-xs px-3 py-1 group-hover:bg-white/20 transition-colors">
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-black/70 mb-4 group-hover:text-white/80 transition-colors">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span 
                        key={index}
                        className="service-button bg-black/10 text-black text-xs px-3 py-1 group-hover:bg-white/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="service-button bg-black/10 text-black text-xs px-3 py-1">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Button className="cta-button bg-black text-white hover:bg-black/80 px-8 py-3">
            View All Projects on GitHub
            <ExternalLink className="ml-2" size={20} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;