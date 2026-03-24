'use client';

import { motion } from 'framer-motion';
import { certifications } from '@/data/portfolio-data';
import { Award, Calendar } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-mono text-3xl md:text-4xl font-bold mb-4">
            <span className="text-cyber-blue">{"<"}</span>
            Certifications & Education
            <span className="text-cyber-blue">{"/>"}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="cyber-card flex flex-col items-center text-center group hover:border-cyber-green"
            >
              <Award className="w-12 h-12 text-cyber-blue mb-4 group-hover:text-cyber-green transition-colors" />
              <h3 className="font-mono text-lg font-semibold text-cyber-green mb-2">
                {cert.name}
              </h3>
              <p className="text-cyber-blue text-sm mb-2">{cert.issuer}</p>
              <div className="flex items-center text-gray-400 text-sm">
                <Calendar className="w-4 h-4 mr-1" />
                {cert.date}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}