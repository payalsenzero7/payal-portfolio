import { Hero } from './sections/Hero';
import { Marquee } from './sections/Marquee';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Credentials } from './sections/Credentials';
import { Contact } from './sections/Contact';

export function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Credentials />
      <Contact />
    </>
  );
}
