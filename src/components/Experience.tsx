'use client';

import { motion } from 'framer-motion';
import { experiences } from '@/data/portfolio-data';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-cyber-dark/50">
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
            Professional Experience
            <span className="text-cyber-blue">{"/>"}</span>
          </h2>
          <p className="cyber-text text-lg max-w-2xl mx-auto">
            5+ years in IT security and systems administration
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-12 border-l-2 border-cyber-blue/30 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-cyber-dark border-2 border-cyber-blue"></div>
              
              {/* Content */}
              <div className="cyber-card">
                <div className="flex flex-wrap items-start justify-between mb-4">
                  <div>
                    <h3 className="font-mono text-xl font-semibold text-cyber-green">
                      {exp.title}
                    </h3>
                    <p className="font-mono text-cyber-blue">{exp.company}</p>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.period}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start space-x-2 text-gray-300">
                      <span className="text-cyber-green mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}