import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiences } from "../constants";

const Experiences = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef(null);

  const AUTOPLAY_SPEED = 5000; 

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % experiences.length);
  };

  useEffect(() => {
    if (!isPaused) {
      timeoutRef.current = setInterval(nextSlide, AUTOPLAY_SPEED);
    }
    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, [isPaused, index]);

  // Helper to get surrounding indices
  const getDifferentIndex = (offset) => (index + offset + experiences.length) % experiences.length;

  return (
    <div className="w-full py-4 relative flex flex-col items-center overflow-hidden">
      {/* Background Section Title */}
      <div className="absolute -top-10 left-0 w-full flex justify-center opacity-[0.03] pointer-events-none z-0">
         <h2 className="text-5xl md:text-7xl lg:text-[10rem] font-black text-white whitespace-nowrap uppercase tracking-widest">Experience</h2>
      </div>

      <div className="relative w-full max-w-6xl px-6 h-[550px] flex flex-col items-center justify-center">
        
        {/* FLYING CONTENT CARDS - Only "In" Animation + Constant Floating */}
        <div className="absolute w-full h-full flex items-center justify-center pointer-events-none z-50">
          
          {/* Card 1: Far Top Left */}
          <AnimatePresence>
            <motion.div
              key={`fly-1-${getDifferentIndex(1)}`}
              initial={{ opacity: 0, scale: 0.1, x: -400, y: -300 }}
              animate={{ 
                opacity: 0.5, 
                scale: 0.6, 
                x: ["-180%", "-185%", "-175%", "-180%"], // Persistent floating
                y: ["-180%", "-185%", "-175%", "-180%"], 
              }}
              transition={{ 
                opacity: { duration: 1 },
                scale: { duration: 1 },
                x: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute w-64 h-24 bg-white/[0.08] backdrop-blur-md border border-white/20 rounded-2xl flex items-center px-4 gap-4 shadow-2xl"
            >
              <img src={experiences[getDifferentIndex(1)].icon} className="w-12 h-12 object-contain bg-black/20 p-2 rounded-xl" alt="" />
              <div className="flex flex-col">
                <p className="text-white/90 text-sm font-bold truncate w-36">{experiences[getDifferentIndex(1)].title}</p>
                <p className="text-white/50 text-[10px] uppercase font-bold truncate w-36">{experiences[getDifferentIndex(1)].job}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Card 2: Far Middle Top */}
          <AnimatePresence>
            <motion.div
              key={`fly-2-${getDifferentIndex(2)}`}
              initial={{ opacity: 0, scale: 0.1, y: -500 }}
              animate={{ 
                opacity: 0.4, 
                scale: 0.5, 
                x: ["40%", "35%", "45%", "40%"], // Persistent floating
                y: ["-280%", "-290%", "-270%", "-280%"],
              }}
              transition={{ 
                opacity: { duration: 1.2 },
                scale: { duration: 1.2 },
                x: { duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                y: { duration: 7, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute w-60 h-20 bg-white/[0.05] backdrop-blur-lg border border-white/10 rounded-2xl flex items-center px-4 gap-3 shadow-2xl"
            >
              <img src={experiences[getDifferentIndex(2)].icon} className="w-10 h-10 object-contain bg-black/30 p-1.5 rounded-xl" alt="" />
              <div className="flex flex-col">
                <p className="text-white/80 text-xs font-bold truncate w-32">{experiences[getDifferentIndex(2)].title}</p>
                <p className="text-white/40 text-[9px] uppercase font-bold truncate w-32">{experiences[getDifferentIndex(2)].job}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Card 3: Far Bottom Right */}
          <AnimatePresence>
            <motion.div
              key={`fly-3-${getDifferentIndex(3)}`}
              initial={{ opacity: 0, scale: 0.1, x: 400, y: 400 }}
              animate={{ 
                opacity: 0.6, 
                scale: 0.7, 
                x: ["180%", "185%", "175%", "180%"], // Persistent floating
                y: ["180%", "175%", "185%", "180%"], 
              }}
              transition={{ 
                opacity: { duration: 1 },
                scale: { duration: 1 },
                x: { duration: 9, repeat: Infinity, ease: "easeInOut" },
                y: { duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }
              }}
              className="absolute w-64 h-24 bg-white/[0.12] backdrop-blur-xl border border-white/20 rounded-2xl flex items-center px-5 gap-4 shadow-2xl"
            >
              <img src={experiences[getDifferentIndex(3)].icon} className="w-12 h-12 object-contain bg-black/40 p-2 rounded-xl" alt="" />
              <div className="flex flex-col">
                 <p className="text-white text-sm font-bold truncate w-36">{experiences[getDifferentIndex(3)].title}</p>
                 <p className="text-white/50 text-[10px] uppercase font-bold truncate w-36">{experiences[getDifferentIndex(3)].job}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Background Depth Cards (Stacked deck effect) */}
        <div className="absolute w-[70%] max-w-2xl bg-white/[0.02] backdrop-blur-[2px] rounded-[3rem] h-[200px] -translate-y-24 border border-white/5 z-0 opacity-50 shadow-2xl"></div>
        <div className="absolute w-[85%] max-w-3xl bg-white/[0.05] backdrop-blur-md rounded-[3rem] h-[250px] -translate-y-12 border border-white/10 z-[1] opacity-80 shadow-2xl"></div>

        {/* Main Active Card */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={`card-${index}`}
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.95 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="relative w-full max-w-4xl bg-white/[0.08] backdrop-blur-xl rounded-[3rem] p-8 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.9)] flex flex-col gap-6 items-start z-10 border border-white/20 cursor-default"
          >
            {/* Top Job Title Badge */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 md:left-24 md:translate-x-0 h-12 bg-[#000513]/80 backdrop-blur-xl rounded-full border border-white/10 px-8 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm whitespace-nowrap tracking-wide">
                {experiences[index].job}
              </span>
            </div>

            {/* Header Area with Original Large Logo */}
            <div className="flex flex-col md:flex-row items-center md:items-center gap-8 w-full">
              <div className="w-28 h-28 md:w-48 md:h-48 shrink-0 flex items-center justify-center">
                <img 
                  src={experiences[index].icon} 
                  alt={experiences[index].title} 
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center py-4">
                <h3 className="text-2xl md:text-4xl font-black text-white leading-tight mb-4 text-center md:text-left">
                  {experiences[index].title}
                </h3>
                
                <ul className="space-y-3">
                  {experiences[index].contents.map((point, i) => (
                    <li key={i} className="text-white/80 text-sm md:text-base leading-relaxed flex items-start">
                      <span className="mr-3 text-yellow-400 mt-1.5 shrink-0 drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]">✦</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
};

export default Experiences;
