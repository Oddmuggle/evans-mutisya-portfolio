import { Skill, Project, Experience, Certification, LabChallenge } from '@/types';

export const personalInfo = {
  name: 'Evans Mutisya',
  title: 'IT Systems & Cybersecurity Specialist',
  tagline: 'Securing digital infrastructure through proactive defense and continuous learning',
  email: 'mutisyamuthwii@gmail.com',
  location: 'Nairobi, Kenya',
  phone: '+254 718 524 629',
  linkedin: 'linkedin.com/in/evansmutisya',
  github: 'github.com/Oddmuggle',
  bio: 'IT Systems and Cybersecurity Specialist with over 5 years of experience supporting enterprise infrastructure, security operations, and IT service delivery. Experienced in vulnerability assessment, incident response, security audits, and implementation of cybersecurity policies aligned with ISO 27001 and Kenya Data Protection Act (2019).',
};

export const skills: Skill[] = [
  // Security
  { name: 'ISO 27001 Compliance', category: 'security', level: 90 },
  { name: 'Kenya Data Protection Act', category: 'security', level: 85 },
  { name: 'Vulnerability Assessment', category: 'security', level: 90 },
  { name: 'Incident Response', category: 'security', level: 85 },
  { name: 'SIEM Tools', category: 'security', level: 80 },
  { name: 'IAM', category: 'security', level: 85 },
  { name: 'Penetration Testing', category: 'security', level: 80 },
  { name: 'Digital Forensics', category: 'security', level: 75 },
  
  // Infrastructure
  { name: 'Firewall (Fortinet/Sophos/Cisco)', category: 'infrastructure', level: 85 },
  { name: 'VPN/IPSec', category: 'infrastructure', level: 90 },
  { name: 'IDS/IPS', category: 'infrastructure', level: 80 },
  { name: 'Network Monitoring', category: 'infrastructure', level: 85 },
  { name: 'Cloud Security', category: 'infrastructure', level: 75 },
  { name: 'SQL Server', category: 'infrastructure', level: 85 },
  
  // Development
  { name: 'Python', category: 'development', level: 85 },
  { name: 'Django/Flask', category: 'development', level: 80 },
  { name: 'JavaScript', category: 'development', level: 80 },
  { name: 'SQL', category: 'development', level: 85 },
  { name: 'PowerShell', category: 'development', level: 75 },
  { name: 'HTML/CSS', category: 'development', level: 80 },
  
  // Systems
  { name: 'Microsoft 365', category: 'systems', level: 90 },
  { name: 'ERP (Sage/Salesforce)', category: 'systems', level: 80 },
  { name: 'CRM Systems', category: 'systems', level: 75 },
  { name: 'IT Service Management', category: 'systems', level: 85 },
  { name: 'Asset Management', category: 'systems', level: 85 },
];

export const projects: Project[] = [
  {
    id: 'material-requisition',
    title: 'Material Requisition System',
    description: 'Secure web-based material requisition system with Role-Based Access Control (RBAC), data encryption, and audit logging.',
    technologies: ['Python', 'Django', 'Flask', 'SQL', 'RBAC', 'Encryption'],
    category: 'development',
    githubUrl: 'https://github.com/Oddmuggle',
    liveUrl: '',
    highlights: [
      'Implemented RBAC for user permissions and approval workflows',
      'Integrated data encryption and secure authentication',
      'Developed audit logging for compliance and security review',
      'Improved procurement efficiency by 40% through automated tracking'
    ]
  },
  {
    id: 'geolocation-attendance',
    title: 'Geo-Location Time & Attendance System',
    description: 'GPS-based attendance system for remote engineers with payroll integration, eliminating manual timesheet processing.',
    technologies: ['Python', 'GPS', 'Payroll Integration', 'Mobile'],
    category: 'development',
    githubUrl: '',
    liveUrl: '',
    highlights: [
      'Enabled GPS verification for remote clock-in/out across 5 project sites',
      'Integrated with payroll system for automated reporting',
      'Improved workforce accountability by 95%',
      'Reduced manual timesheet processing by 80%'
    ]
  },
  {
    id: 'ipsec-vpn',
    title: 'IPSec VPN Infrastructure',
    description: 'Secure multi-site IPSec VPN solution for power meter connectivity across Kenya and Uganda, ensuring reliable remote monitoring.',
    technologies: ['IPSec', 'VPN', 'Teltonika Routers', 'Network Security'],
    category: 'infrastructure',
    githubUrl: '',
    liveUrl: '',
    highlights: [
      'Implemented secure IPSec tunneling for 5+ remote sites across East Africa',
      'Configured Teltonika industrial routers for encrypted communication',
      'Enabled centralized power consumption monitoring for 100+ meters',
      'Improved remote infrastructure security and reliability by 99%'
    ]
  },
  {
    id: 'perfecto-adventures',
    title: 'Perfecto Adventures & Safaris Website',
    description: 'Responsive tourism website with booking integration and SEO optimization.',
    technologies: ['JavaScript', 'HTML/CSS', 'SEO', 'Responsive Design'],
    category: 'development',
    githubUrl: 'https://github.com/Oddmuggle/perfecto-adventures',
    liveUrl: 'https://perfectoadventures.co.ke/',
    highlights: [
      'Designed responsive UI for all devices',
      'Integrated tour inquiry and booking forms',
      'Implemented SEO optimization',
      'Enhanced online customer engagement'
    ]
  },
  {
    id: 'senrans',
    title: 'Senrans Website',
    description: 'Business website for Senrans with modern design and functionality.',
    technologies: ['JavaScript', 'HTML/CSS', 'UI/UX'],
    category: 'development',
    githubUrl: 'https://github.com/Oddmuggle/senrans',
    liveUrl: 'https://senrans.com/',
    highlights: [
      'Modern responsive design',
      'Business-focused UI/UX',
      'Performance optimized'
    ]
  }
];

export const experiences: Experience[] = [
  {
    title: 'IT Executive',
    company: 'Classic Mouldings',
    period: '04/2025 - Present',
    location: 'Nairobi, Kenya',
    description: [
      'Provide direct user support and troubleshooting for system, network, and application issues',
      'Manage and maintain IT infrastructure including hardware, software, and network systems',
      'Conduct cybersecurity audits and ensure ISO 27001 and DPA 2019 compliance',
      'Perform vulnerability assessments and manage endpoint protection systems',
      'Administer SQL Server databases and ensure data integrity',
      'Lead asset management, vendor coordination, and IT procurement'
    ]
  },
  {
    title: 'IT Officer',
    company: 'Imevolutions LTD',
    period: '09/2023 - 04/2025',
    location: 'Nairobi, Kenya',
    description: [
      'Responded to user-reported issues and ensured timely resolution',
      'Conducted network and system audits ensuring compliance',
      'Performed vulnerability scans and implemented patch management',
      'Supported MS 365 administration and network configurations',
      'Ensured ISO 27001 and DPA 2019 compliance',
      'Managed CCTV systems and firewall/antivirus configurations'
    ]
  },
  {
    title: 'IT Manager',
    company: 'ABD Limited',
    period: '04/2023 - 08/2023',
    location: 'Nairobi, Kenya',
    description: [
      'Supervised IT team and coordinated cybersecurity initiatives',
      'Oversaw network and system infrastructure security',
      'Performed IT risk assessments and compliance reporting',
      'Ensured business continuity and disaster recovery'
    ]
  },
  {
    title: 'Cybersecurity Analyst',
    company: '159 Ventures',
    period: '06/2022 - 01/2023',
    location: 'Nairobi, Kenya',
    description: [
      'Conducted vulnerability assessments and penetration testing',
      'Monitored network activity using SIEM tools',
      'Assisted in incident response and digital forensics',
      'Configured firewall policies and endpoint protection',
      'Prepared detailed vulnerability and incident response reports'
    ]
  },
  {
    title: 'IT Technician',
    company: 'Jivarson Investment',
    period: '05/2020 - 05/2021',
    location: 'Machakos, Kenya',
    description: [
      'Maintained and secured computing devices',
      'Performed hardware diagnostics and system upgrades',
      'Supported local networks and security policies',
      'Implemented antivirus solutions'
    ]
  }
];

export const certifications: Certification[] = [
  {
    name: 'Cybersecurity',
    issuer: 'Cybershujaa, Serianu',
    date: '01/2026 - 04/2026',
  },
  {
    name: 'CCNA Certification',
    issuer: 'Cisco Networking Academy',
    date: '06/2022 - 04/2023',
  },
  {
    name: 'Information Security and Forensics',
    issuer: 'KCA University',
    date: '09/2018 - 12/2022',
  },
  {
    name: 'Google Project Management Certificate',
    issuer: 'Coursera',
    date: '08/2022 - 10/2022',
  },
  {
    name: 'Youth Development Project',
    issuer: 'PAC University',
    date: '01/2018 - 04/2018',
  }
];

export const labChallenges: LabChallenge[] = [
  {
    id: 'sql-injection',
    title: 'SQL Injection Vulnerability Analysis',
    platform: 'TryHackMe',
    difficulty: 'Medium',
    problemStatement: 'A web application was vulnerable to SQL injection attacks, allowing unauthorized database access. The challenge required identifying the vulnerability and extracting sensitive data.',
    approach: [
      'Performed reconnaissance to identify input fields',
      'Tested for SQL injection using manual payloads',
      'Used sqlmap to automate exploitation',
      'Extracted database schema and sensitive data',
      'Documented findings and remediation steps'
    ],
    tools: ['Burp Suite', 'sqlmap', 'MySQL', 'Python'],
    screenshots: [],
    lessonsLearned: [
      'Understanding parameterized queries is crucial for prevention',
      'Input validation alone is insufficient against sophisticated attacks',
      'Regular penetration testing helps identify vulnerabilities early',
      'Principle of least privilege should apply to database accounts'
    ],
    dateCompleted: '2025-02-15'
  },
  {
    id: 'xss-attack',
    title: 'Cross-Site Scripting (XSS) Attack Vectors',
    platform: 'HackTheBox',
    difficulty: 'Easy',
    problemStatement: 'A social media platform was vulnerable to stored XSS attacks, allowing malicious scripts to execute in users\' browsers. The challenge involved discovering the vulnerability and crafting a proof-of-concept.',
    approach: [
      'Identified input fields that reflect user content',
      'Tested various XSS payloads to bypass filters',
      'Successfully executed alert() to confirm vulnerability',
      'Demonstrated cookie theft potential',
      'Proposed mitigation strategies'
    ],
    tools: ['Browser DevTools', 'Burp Suite', 'JavaScript'],
    screenshots: [],
    lessonsLearned: [
      'Content Security Policy (CSP) is essential for XSS prevention',
      'Proper output encoding prevents script execution',
      'Never trust user input, even from authenticated users',
      'Regular security headers audit helps maintain protection'
    ],
    dateCompleted: '2025-02-20'
  },
  {
    id: 'network-scanning',
    title: 'Network Reconnaissance & Enumeration',
    platform: 'Cybrary',
    difficulty: 'Medium',
    problemStatement: 'A corporate network required security assessment to identify open ports, services, and potential vulnerabilities before external attackers could exploit them.',
    approach: [
      'Performed network mapping using Nmap',
      'Identified open ports and running services',
      'Conducted service version enumeration',
      'Detected misconfigurations and outdated software',
      'Created comprehensive vulnerability report'
    ],
    tools: ['Nmap', 'Wireshark', 'Nessus', 'Metasploit'],
    screenshots: [],
    lessonsLearned: [
      'Regular network scanning helps maintain security posture',
      'Service version detection is critical for vulnerability management',
      'Misconfigured services are often the biggest security gaps',
      'Defense-in-depth approach requires layered security controls'
    ],
    dateCompleted: '2025-03-01'
  }
];

export const academicBackground = {
  degree: 'Information Security and Forensics',
  institution: 'KCA University',
  period: '2018 - 2022',
  location: 'Nairobi, Kenya',
  achievements: [
    'Specialized in digital forensics and incident response',
    'Research project on IoT security vulnerabilities',
    'Graduated with honors'
  ]
};