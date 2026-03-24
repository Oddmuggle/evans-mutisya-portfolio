'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data/portfolio-data';
import { Shield, Network, Code, Server } from 'lucide-react';

const categoryIcons = {
  security: Shield,
  infrastructure: Network,
  development: Code,
  systems: Server,
};

const categoryColors = {
  security: 'text-red-400 border-red-400/30',
  infrastructure: 'text-blue-400 border-blue-400/30',
  development: 'text-green-400 border-green-400/30',
  systems: 'text-purple-400 border-purple-400/30',
};

export default function SkillsMatrix() {
  const categories = ['security', 'infrastructure', 'development', 'systems'] as const;

  return (
    <section id="skills" className="py-20 bg-cyber-dark/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-mono text-3xl md:text-4xl font-bold mb-4">
            <span className="text-cyber-blue">&lt;</span>
            Skills Matrix
            <span className="text-cyber-blue">/&gt;</span>
          </h2>
          <p className="cyber-text text-lg max-w-2xl mx-auto">
            Technical expertise across security, infrastructure, development, and systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category, categoryIndex) => {
            const Icon = categoryIcons[category];
            const categorySkills = skills.filter(s => s.category === category);
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className={`cyber-card border-l-4 ${categoryColors[category]}`}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Icon className={`w-6 h-6 ${categoryColors[category].split(' ')[0]}`} />
                  <h3 className="font-mono text-xl font-semibold capitalize">
                    {category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {categorySkills.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="font-mono text-sm text-gray-300">{skill.name}</span>
                        <span className="font-mono text-xs text-cyber-blue">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-cyber-gray rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ delay: index * 0.1, duration: 0.8 }}
                          viewport={{ once: true }}
                          className={`h-full rounded-full ${
                            category === 'security' ? 'bg-red-400' :
                            category === 'infrastructure' ? 'bg-blue-400' :
                            category === 'development' ? 'bg-green-400' :
                            'bg-purple-400'
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}