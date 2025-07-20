import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Mail, Phone, Calendar } from 'lucide-react';
import { personalInfo, education, experiences } from '../data/mockData';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-light-pink/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-mid-blue/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold text-black mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-light-pink mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <div className="relative w-64 h-64 mx-auto lg:mx-0 mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-light-pink to-mid-purple rounded-2xl transform rotate-6" />
              <div className="relative bg-white p-4 rounded-2xl shadow-xl">
                <div className="w-full h-full bg-mid-grey/20 rounded-xl flex items-center justify-center">
                  <User size={64} className="text-mid-grey" />
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-dark-grey">
                {personalInfo.bio}
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-dark-grey">
                <Mail className="text-light-pink" size={20} />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-dark-grey">
                <Phone className="text-light-pink" size={20} />
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-dark-grey">
                <MapPin className="text-light-pink" size={20} />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Education & Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-12"
          >
            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold text-black mb-6 flex items-center">
                <Calendar className="text-light-pink mr-3" size={24} />
                Education
              </h3>
              {education.map((edu) => (
                <motion.div
                  key={edu.id}
                  whileHover={{ x: 10 }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-grey/20 hover:shadow-xl transition-all duration-300"
                >
                  <h4 className="font-semibold text-lg text-black mb-2">{edu.degree}</h4>
                  <p className="text-light-pink font-medium mb-1">{edu.institution}</p>
                  <p className="text-dark-grey text-sm mb-3">{edu.duration} • {edu.location}</p>
                  <p className="text-dark-grey mb-3">GPA: {edu.gpa}</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.relevantCourses.slice(0, 4).map((course, index) => (
                      <span 
                        key={index}
                        className="service-button bg-light-pink/20 text-black text-xs px-3 py-1"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-2xl font-semibold text-black mb-6 flex items-center">
                <User className="text-light-pink mr-3" size={24} />
                Experience
              </h3>
              <div className="space-y-6">
                {experiences.map((exp) => (
                  <motion.div
                    key={exp.id}
                    whileHover={{ x: 10 }}
                    className="bg-white rounded-xl p-6 shadow-lg border border-grey/20 hover:shadow-xl transition-all duration-300"
                  >
                    <h4 className="font-semibold text-lg text-black mb-2">{exp.title}</h4>
                    <p className="text-light-pink font-medium mb-1">{exp.company}</p>
                    <p className="text-dark-grey text-sm mb-3">{exp.duration} • {exp.location}</p>
                    <p className="text-dark-grey mb-4">{exp.description}</p>
                    
                    <div className="space-y-2">
                      <h5 className="font-medium text-black">Key Achievements:</h5>
                      <ul className="list-disc list-inside text-dark-grey space-y-1">
                        {exp.achievements.map((achievement, index) => (
                          <li key={index} className="text-sm">{achievement}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="service-button bg-mid-blue/20 text-black text-xs px-3 py-1"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;