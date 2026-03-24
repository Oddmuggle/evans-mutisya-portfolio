'use client';

import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import { personalInfo } from '@/data/portfolio-data';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const matrixRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!matrixRef.current) return;
    
    const characters = '01';
    const matrix = matrixRef.current;
    
    for (let i = 0; i < 15; i++) {
      const span = document.createElement('span');
      span.style.left = Math.random() * 100 + '%';
      span.style.animationDelay = Math.random() * 5 + 's';
      span.style.animationDuration = Math.random() * 5 + 5 + 's';
      span.style.opacity = '0.2';
      span.textContent = characters[Math.floor(Math.random() * characters.length)];
      matrix.appendChild(span);
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Matrix Background */}
      <div ref={matrixRef} className="matrix-bg"></div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <span className="font-mono text-cyber-green text-sm">$ whoami</span>
              <h1 className="font-mono text-4xl md:text-5xl lg:text-6xl font-bold mt-2">
                <span className="text-cyber-blue">&lt;</span>
                Evans Mutisya
                <span className="text-cyber-blue">/&gt;</span>
              </h1>
              <h2 className="font-mono text-xl md:text-2xl text-cyber-green mt-2">
                {personalInfo.tagline}
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="cyber-text text-lg mb-8 leading-relaxed"
            >
              {personalInfo.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-3 mb-8"
            >
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-cyber-blue" />
                <span className="font-mono">{personalInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-cyber-blue" />
                <span className="font-mono">{personalInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-cyber-blue" />
                <span className="font-mono">{personalInfo.location}</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="/Evans_Mutisya_Resume.pdf"
                download
                className="group relative px-6 py-3 bg-cyber-blue/10 border border-cyber-blue rounded-lg overflow-hidden transition-all duration-300 hover:border-cyber-green"
              >
                <span className="relative z-10 flex items-center space-x-2 font-mono text-cyber-blue group-hover:text-cyber-green">
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </span>
                <div className="absolute inset-0 bg-cyber-blue/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>

              <a
                href={`https://${personalInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-cyber-blue/30 rounded-lg hover:border-cyber-blue transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-cyber-blue" />
              </a>

              <a
                href={`https://${personalInfo.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-cyber-blue/30 rounded-lg hover:border-cyber-blue transition-all duration-300 group"
              >
                <Github className="w-5 h-5 text-gray-400 group-hover:text-cyber-blue" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-96 h-96 mx-auto">
              {/* Outer glow effect */}
              <div className="absolute inset-0 bg-cyber-blue/20 rounded-full blur-3xl animate-pulse"></div>
              
              {/* Photo circle container */}
              <div className="relative w-full h-full rounded-full border-4 border-cyber-blue/30 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/20 to-transparent z-10"></div>
                
                {/* Profile Image - Add your photo to public/images/profile.jpg */}
                <Image
                  src="/images/profile.jpg"
                  alt="Evans Mutisya - Cybersecurity Specialist"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Animated rings */}
              <div className="absolute -inset-4 border-2 border-cyber-blue/20 rounded-full animate-ping"></div>
              <div className="absolute -inset-8 border border-cyber-green/10 rounded-full animate-pulse"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-cyber-blue/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyber-blue rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
}