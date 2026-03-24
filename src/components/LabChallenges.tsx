'use client';

import { motion } from 'framer-motion';
import { labChallenges } from '@/data/portfolio-data';
import { Shield, Target, Wrench, BookOpen, Calendar, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export default function LabChallenges() {
  const [selectedChallenge, setSelectedChallenge] = useState<string | null>(null);
  const selected = labChallenges.find(c => c.id === selectedChallenge);

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'Easy': return 'text-green-400 border-green-400/30';
      case 'Medium': return 'text-yellow-400 border-yellow-400/30';
      case 'Hard': return 'text-red-400 border-red-400/30';
      default: return 'text-cyber-blue';
    }
  };

  return (
    <section id="lab-challenges" className="py-20 bg-cyber-dark/50">
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
            Lab Challenges
            <span className="text-cyber-blue">{"/>"}</span>
          </h2>
          <p className="cyber-text text-lg max-w-2xl mx-auto">
            Hands-on cybersecurity challenges and CTF writeups
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Challenge List */}
          <div className="space-y-4">
            {labChallenges.map((challenge, index) => (
              <motion.div
                key={challenge.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedChallenge(challenge.id)}
                className={`cyber-card cursor-pointer transition-all duration-300 ${
                  selectedChallenge === challenge.id ? 'border-cyber-blue' : ''
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Target className="w-4 h-4 text-cyber-blue" />
                      <h3 className="font-mono text-lg font-semibold text-cyber-green">
                        {challenge.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">{challenge.platform}</p>
                    <div className="flex items-center space-x-3 text-xs">
                      <span className={`px-2 py-1 rounded border ${getDifficultyColor(challenge.difficulty)}`}>
                        {challenge.difficulty}
                      </span>
                      <span className="flex items-center text-gray-500">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(challenge.dateCompleted).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <AlertCircle className="w-5 h-5 text-cyber-blue" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Challenge Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="cyber-card"
          >
            {selected ? (
              <div className="space-y-6">
                <div>
                  <h3 className="font-mono text-xl text-cyber-green mb-2">Problem Statement</h3>
                  <p className="text-gray-300">{selected.problemStatement}</p>
                </div>

                <div>
                  <h3 className="font-mono text-xl text-cyber-green mb-2">Approach</h3>
                  <ul className="space-y-2">
                    {selected.approach.map((step, i) => (
                      <li key={i} className="flex items-start space-x-2 text-gray-300">
                        <span className="text-cyber-blue mt-1">→</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-mono text-xl text-cyber-green mb-2">Tools Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selected.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 bg-cyber-gray rounded-full text-sm font-mono text-cyber-blue border border-cyber-blue/20"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-mono text-xl text-cyber-green mb-2">Key Lessons Learned</h3>
                  <ul className="space-y-2">
                    {selected.lessonsLearned.map((lesson, i) => (
                      <li key={i} className="flex items-start space-x-2 text-gray-300">
                        <span className="text-cyber-green mt-1">•</span>
                        <span>{lesson}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <Shield className="w-16 h-16 text-cyber-blue/30 mx-auto mb-4" />
                <p className="text-gray-400">Select a challenge to view the writeup</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}