'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { personalInfo } from '@/data/portfolio-data';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you'd send this to an API
    window.location.href = `mailto:${personalInfo.email}?subject=Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
  };

  return (
    <section id="contact" className="py-20 bg-cyber-dark/50">
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
            Contact Me
            <span className="text-cyber-blue">{"/>"}</span>
          </h2>
          <p className="cyber-text text-lg max-w-2xl mx-auto">
            Ready to secure your next project? Let's connect.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="cyber-card">
                <h3 className="font-mono text-xl text-cyber-green mb-4">Get in touch</h3>
                <div className="space-y-4">
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
                </div>
              </div>

              <div className="cyber-card">
                <h3 className="font-mono text-xl text-cyber-green mb-4">Follow me</h3>
                <div className="flex space-x-4">
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
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="cyber-card"
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block font-mono text-sm text-cyber-blue mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-2 bg-cyber-gray/50 border border-cyber-blue/30 rounded-lg focus:border-cyber-green outline-none text-gray-300 font-mono"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-mono text-sm text-cyber-blue mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-2 bg-cyber-gray/50 border border-cyber-blue/30 rounded-lg focus:border-cyber-green outline-none text-gray-300 font-mono"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block font-mono text-sm text-cyber-blue mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    className="w-full px-4 py-2 bg-cyber-gray/50 border border-cyber-blue/30 rounded-lg focus:border-cyber-green outline-none text-gray-300 font-mono"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full group relative px-6 py-3 bg-cyber-blue/10 border border-cyber-blue rounded-lg overflow-hidden transition-all duration-300 hover:border-cyber-green"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2 font-mono text-cyber-blue group-hover:text-cyber-green">
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </span>
                  <div className="absolute inset-0 bg-cyber-blue/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}