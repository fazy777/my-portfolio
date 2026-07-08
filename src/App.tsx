import { Navbar } from './components/layout/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Timeline } from './sections/Timeline';
import { Projects } from './sections/Projects';
import { Certificates } from './sections/Certificates';
import { Contact } from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-navy-950 text-steel-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Timeline />
        <Projects />
        <Certificates />
        <Contact />
      </main>
    </div>
  );
}

export default App;

