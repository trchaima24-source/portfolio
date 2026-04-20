import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';
import { motion } from "framer-motion";

const App = () => {
  const sections = [
    { id: "home", component: <Hero /> },
    { id: "about", component: <About /> },
    { id: "experience", component: <Experiences /> },
    { id: "projects", component: <Projects /> },
    { id: "contact", component: <Contact /> },
    { id: "testimonial", component: <Testimonial /> },
  ];

  return (
    <main className="w-full relative overflow-hidden bg-gradient-to-br from-[#0a1128] via-[#1a2f6c] to-[#000513]">
      {/* Subtle grid overlay to match the UI aesthetic */}
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }}
        />

        {/* Ambient Light Blue Glows to enhance the degradation */}
        <motion.div 
          animate={{
            scale: [1, 1.1, 0.9, 1],
            opacity: [0.3, 0.5, 0.3, 0.3],
            x: [0, 50, -50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#4a72b8] blur-[160px] mix-blend-screen" 
        />

        {/* Ambient Dark Blue Glows */}
        <motion.div 
          animate={{
            scale: [1, 0.9, 1.2, 1],
            opacity: [0.4, 0.6, 0.4, 0.4],
            x: [0, -50, 50, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-[#001242] blur-[150px] mix-blend-screen" 
        />
      </div>

      <Navbar />

      <div className="flex flex-col w-full">
        {sections.map((section) => (
          <div key={section.id}>
            <section 
              id={section.id}
              className={`w-full flex flex-col ${section.id === "home" ? "h-screen" : "py-10 md:py-16"}`}
            >
              <div className={`w-full flex-grow ${section.id === "home" ? "" : "px-6 md:px-16 lg:px-24"}`}>
                {section.component}
              </div>
            </section>

            {/* Insert Video after the first section (Home/Hero) */}
            {section.id === "home" && (
              <div className="w-full relative z-10 h-[60vh] md:h-[80vh] overflow-hidden pointer-events-none -mt-24 -mb-24">
                {/* 
                  Negative top margin pulls video under the header.
                  Negative bottom margin pulls the 'About' section up under the video.
                */}
                <video 
                  src="/assets/DNA.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-screen"
                  style={{ maskImage: 'linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)' }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
      <Footer />
    </main>
  );
};

export default App;
