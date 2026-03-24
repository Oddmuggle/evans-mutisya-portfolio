import Hero from '@/components/Hero';
import SkillsMatrix from '@/components/SkillsMatrix';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Certifications from '@/components/Certifications';
import LabChallenges from '@/components/LabChallenges';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <SkillsMatrix />
      <Projects />
      <Experience />
      <Certifications />
      <LabChallenges />
      <Contact />
    </>
  );
}