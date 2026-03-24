'use client';

import { motion } from 'framer-motion';
import { academicBackground } from '@/data/portfolio-data';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

export default function AcademicBackground() {
  return (
    <section id="academic" className="py-20">
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
            Academic Background
            <span className="text-cyber-blue">{"/>"}</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto cyber-card"
        >
          <div className="flex items-start space-x-4">
            <GraduationCap className="w-12 h-12 text-cyber-blue flex-shrink-0" />
            <div>
              <h3 className="font-mono text-xl text-cyber-green mb-2">
                {academicBackground.degree}
              </h3>
              <p className="text-cyber-blue mb-1">{academicBackground.institution}</p>
              <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {academicBackground.period}
                </span>
                <span className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {academicBackground.location}
                </span>
              </div>
              <ul className="space-y-2">
                {academicBackground.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start space-x-2 text-gray-300">
                    <Award className="w-4 h-4 text-cyber-green mt-0.5" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}