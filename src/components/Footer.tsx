'use client';

import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-6 border-t border-cyber-blue/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Shield className="w-5 h-5 text-cyber-blue" />
            <span className="font-mono text-sm text-cyber-green">
              Evans Mutisya - Cybersecurity Specialist
            </span>
          </div>
          <div className="font-mono text-xs text-gray-500">
            © {new Date().getFullYear()} All rights reserved. | Secured with 🔒
          </div>
        </div>
      </div>
    </footer>
  );
}