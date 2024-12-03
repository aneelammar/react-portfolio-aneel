import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      
      {/* Background Gradient Section */}
      <div className="fixed inset-0 -z-10 h-screen w-screen [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      {/* Main Container */}
      <div className="container mx-auto px-8">
        <Navbar /> {/* Navbar Component */}
        <Hero /> {/* Hero Section */}
        <About /> {/* About Section */}
        <Technologies /> {/* Technologies Section */}
        <Experience /> {/* Experience Section */}
        <Projects /> {/* Projects Section */}
        <Contact /> {/* Contact Section */}
      </div>
    </div>
  );
};

export default App;
