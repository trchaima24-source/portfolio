/* eslint-disable react/no-unescaped-entities */
import { Particles } from "../components/Particles";
import { motion } from "framer-motion";

const Contact = () => {
  const floatingLogos = [
    { size: "w-12 h-12", x: "-150%", y: "-120%", duration: 4.5, delay: 0 },
    { size: "w-24 h-24", x: "140%", y: "-150%", duration: 6, delay: 1 },
    { size: "w-16 h-16", x: "-180%", y: "100%", duration: 5, delay: 0.5 },
    { size: "w-32 h-32", x: "160%", y: "80%", duration: 7, delay: 1.5 },
    { size: "w-10 h-10", x: "0%", y: "-200%", duration: 8, delay: 2 },
  ];

  return (
    <div
      className="section-spacing c-space py-6 relative overflow-hidden flex flex-col items-center justify-center"
      id="contact"
    >
      <Particles
        className="absolute inset-0 -z-50"
        quantity={120}
        ease={80}
        color={"#ffffff"}
        refresh
      />

      {/* Section Title Background Header */}
      <div className="absolute top-20 left-0 w-full flex justify-center opacity-[0.03] pointer-events-none z-0">
         <h2 className="text-5xl md:text-7xl lg:text-[10rem] font-black text-white whitespace-nowrap uppercase tracking-widest">Contact</h2>
      </div>

      {/* Floating Logos Background */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
        {floatingLogos.map((logo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5, x: logo.x, y: logo.y }}
            animate={{ 
              opacity: [0.1, 0.3],
              scale: [1, 1.1],
              x: [logo.x, `calc(${logo.x} + 20px)`],
              y: [logo.y, `calc(${logo.y} - 25px)`],
            }}
            transition={{ 
              opacity: { duration: logo.duration, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: logo.delay },
              scale: { duration: logo.duration * 1.1, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: logo.delay },
              x: { duration: logo.duration * 1.3, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: logo.delay },
              y: { duration: logo.duration, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: logo.delay }
            }}
            className={`absolute ${logo.size} opacity-20`}
          >
            <img src="assets/linkedin_logo.png" alt="" className="w-full h-full object-contain grayscale brightness-200" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col md:flex-row items-center justify-between px-6 gap-8">
        
        {/* Left Logo - Smaller and Higher */}
        <motion.div 
          animate={{ 
            y: [-15, 15],
            rotate: [-4, 4]
          }}
          transition={{ 
            y: { duration: 3.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
            rotate: { duration: 4.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }
          }}
          className="hidden md:flex w-32 h-32 lg:w-44 lg:h-44 justify-center items-center -translate-y-12"
        >
          <img 
            src="assets/linkedin_logo.png" 
            alt="LinkedIn" 
            className="w-full h-full object-contain drop-shadow-[0_0_60px_rgba(0,119,181,0.4)]"
          />
        </motion.div>

        {/* Center Content */}
        <div className="flex flex-col items-center text-center max-w-3xl px-4">
          <h2 className="font-black text-3xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight tracking-tighter uppercase whitespace-nowrap">
            Let's Talk On <span className="text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.4)] ml-3">LinkedIn</span>
          </h2>

          <p className="text-base md:text-xl text-[#8c9fc4] font-medium leading-relaxed mb-12">
            I'm always open to discussing marketing strategies and data-driven projects, 
            and learn from other experiences. Feel free to connect and send a message!
          </p>

          <a 
            href="https://www.linkedin.com/in/triki-chaima/" 
            target="_blank" 
            rel="noreferrer"
            className="group relative inline-flex items-center justify-center px-12 py-5 bg-yellow-400 text-[#0a1128] font-black text-xl rounded-full shadow-[0_20px_40px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(250,204,21,0.6)] hover:-translate-y-1 transition-all duration-300"
          >
            CONNECT NOW
            <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
          </a>
        </div>

        {/* Right Logo - Larger and Lower */}
        <motion.div 
          animate={{ 
            y: [10, -15],
            rotate: [15, 25]
          }}
          transition={{ 
            y: { duration: 4, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 0.5 },
            rotate: { duration: 5.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 0.2 }
          }}
          className="w-56 h-56 lg:w-80 lg:h-80 flex justify-center items-center translate-y-10"
        >
          <img 
            src="assets/linkedin_logo.png" 
            alt="LinkedIn" 
            className="w-full h-full object-contain drop-shadow-[0_0_100px_rgba(0,119,181,0.6)]"
          />
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;