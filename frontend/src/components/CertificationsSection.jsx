import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Calendar, ExternalLink, Verified } from 'lucide-react';
import { certifications } from '../data/mockData';
import { Button } from './ui/button';

const CertificationsSection = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [filter, setFilter] = useState('All');

  const issuers = ['All', 'Amazon Web Services', 'Google Cloud', 'Stanford University (Coursera)', 'Meta (Facebook)', 'MongoDB University', 'EC-Council'];

  const filteredCertifications = filter === 'All' 
    ? certifications 
    : certifications.filter(cert => cert.issuer === filter);

  return (
    <section id="certifications" className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-mid-green/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-mid-purple/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-light-pink mx-auto rounded-full mb-6" />
          <p className="text-lg text-mid-grey max-w-3xl mx-auto">
            Professional certifications and achievements that validate my expertise 
            across various domains of technology and development.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {issuers.map((issuer) => (
            <button
              key={issuer}
              onClick={() => setFilter(issuer)}
              className={`service-button transition-all duration-300 text-sm ${
                filter === issuer
                  ? 'bg-light-pink text-black shadow-lg transform scale-105'
                  : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20'
              }`}
            >
              {issuer === 'Stanford University (Coursera)' ? 'Stanford/Coursera' : issuer}
            </button>
          ))}
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredCertifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -50 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => setSelectedCert(cert)}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 cursor-pointer group"
              >
                {/* Certificate Icon/Image */}
                <div className="relative mb-6">
                  <div className="h-32 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/15 transition-colors">
                    <Award className="text-light-pink" size={48} />
                  </div>
                  
                  {/* Verified Badge */}
                  <div className="absolute top-2 right-2 bg-mid-green rounded-full p-1.5">
                    <Verified size={16} className="text-white" />
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg text-white group-hover:text-light-pink transition-colors line-clamp-2">
                    {cert.title}
                  </h3>
                  
                  <p className="text-light-pink font-medium text-sm">
                    {cert.issuer}
                  </p>
                  
                  <div className="flex items-center space-x-2 text-mid-grey text-sm">
                    <Calendar size={14} />
                    <span>{cert.date}</span>
                  </div>
                  
                  <p className="text-mid-grey text-sm line-clamp-2">
                    {cert.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-mid-grey">
                      ID: {cert.credentialId}
                    </span>
                    <ExternalLink size={16} className="text-light-pink group-hover:scale-110 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Certifications CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Button className="cta-button bg-light-pink text-black hover:bg-light-pink/90 px-8 py-3">
            <Verified className="mr-2" size={20} />
            Verify All Certifications
          </Button>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: '6+', label: 'Certifications', color: 'light-pink' },
            { number: '4', label: 'Major Platforms', color: 'mid-blue' },
            { number: '2023', label: 'Latest Cert Year', color: 'mid-green' },
            { number: '100%', label: 'Verified', color: 'mid-purple' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="space-y-2"
            >
              <div className={`text-4xl font-bold text-${stat.color}`}>
                {stat.number}
              </div>
              <div className="text-mid-grey text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl p-8 max-w-lg w-full text-black"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <Award className="text-light-pink" size={32} />
                  <div>
                    <h3 className="font-bold text-xl">{selectedCert.title}</h3>
                    <p className="text-light-pink">{selectedCert.issuer}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="text-mid-grey hover:text-black"
                >
                  ×
                </button>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-2 text-dark-grey">
                  <Calendar size={16} />
                  <span>Issued: {selectedCert.date}</span>
                </div>
                <p className="text-dark-grey">{selectedCert.description}</p>
                <div className="bg-grey/20 rounded-lg p-3">
                  <p className="text-sm text-dark-grey">
                    <strong>Credential ID:</strong> {selectedCert.credentialId}
                  </p>
                </div>
              </div>
              
              <Button 
                className="w-full bg-light-pink text-black hover:bg-light-pink/90"
                onClick={() => window.open(selectedCert.verificationUrl, '_blank')}
              >
                <ExternalLink className="mr-2" size={16} />
                Verify Certificate
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CertificationsSection;