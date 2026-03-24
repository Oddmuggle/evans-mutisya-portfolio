import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Evans Mutisya - Cybersecurity Specialist',
  description: 'IT Systems and Cybersecurity Specialist with over 5 years of experience in enterprise security, compliance, and infrastructure.',
  keywords: 'cybersecurity, IT security, ISO 27001, Kenya, network security, vulnerability assessment',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}