'use client';

import { motion } from 'framer-motion';
import { projects } from '@/data/portfolio-data';
import { Github, ExternalLink, Shield, Code, Network } from 'lucide-react';
import { useState } from 'react';

const categoryIcons = {
  security: Shield,
  development: Code,
  infrastructure: Network,
};

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'security' | 'development' | 'infrastructure'>('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20">
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
            Security Projects
            <span className="text-cyber-blue">{"/>"}</span>
          </h2>
          <p className="cyber-text text-lg max-w-2xl mx-auto">
            Real-world security implementations and development projects
          </p>
        </motion.div>

        {/* Filter buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          {['all', 'security', 'development', 'infrastructure'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f as any)}
              className={`px-4 py-2 font-mono text-sm capitalize rounded-lg transition-all duration-300 ${
                filter === f
                  ? 'bg-cyber-blue text-cyber-dark'
                  : 'border border-cyber-blue/30 text-gray-400 hover:border-cyber-blue'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => {
            const Icon = categoryIcons[project.category as keyof typeof categoryIcons];
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="cyber-card group hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Icon className="w-5 h-5 text-cyber-blue" />
                    <h3 className="font-mono text-lg font-semibold text-cyber-green">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex space-x-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-cyber-blue transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-cyber-blue transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                <div className="space-y-2 mb-4">
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <span className="text-cyber-green mt-1">•</span>
                      <span className="text-gray-300 text-xs">{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-cyber-gray/50 rounded text-xs font-mono text-cyber-blue border border-cyber-blue/20"
                    >
                      {tech}
                    </span>
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