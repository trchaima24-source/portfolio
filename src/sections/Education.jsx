import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Education = () => {
  const points = [
    {
      title: "Bachelor’s in Business and Commercial Studies",
      location: "ESSEC Tunis",
      date: "2019 - 2022",
      status: "Foundation",
      eta: "Milestone reached",
    },
    {
      title: "Master’s in International Marketing and E-Commerce",
      location: "University of Sfax",
      date: "2022 - 2024",
      status: "Specialization",
      eta: "Level completed",
    },
    {
      title: "Master’s in Data Science for Business and Economics",
      location: "University of Sousse",
      date: "2024 - Present",
      status: "Advanced Research",
      eta: "In progress",
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % points.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="section-spacing c-space py-6 flex flex-col items-center justify-center relative overflow-hidden">

      {/* Decorative Geographic Map Background */}      <div className="absolute inset-0 pointer-events-none z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid meet">
            {/* Background decorative map lines */}
            <path fill="none" stroke="currentColor" strokeWidth="1" className="text-white/5 mix-blend-screen"
                  d="M 50,150 Q 120,50 200,100 T 350,200 T 500,150 T 650,250 T 800,150 T 950,200 
                     M 100,300 Q 150,200 250,250 T 400,200 T 550,300 T 750,250 T 900,350
                     M 200,50 C 250,150 200,250 250,350 C 300,450 250,550 300,650" 
            />
            
            {/* The Specific Map Line being followed (The Roadmap) */}
            <path d="M 100,300 Q 150,200 250,250 T 400,200 T 550,300 T 750,250 T 900,350" 
                  fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3" strokeDasharray="6,6" />

            {/* The Animated Yellow Progress Line following the exact same map path */}
            <motion.path 
              d="M 100,300 Q 150,200 250,250 T 400,200 T 550,300 T 750,250 T 900,350" 
              fill="transparent" 
              stroke="#fbbf24" 
              strokeWidth="5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: (activeIndex + 1) / points.length }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{ filter: "drop-shadow(0 0 15px rgba(250,204,21,0.8))" }}
            />
            {/* Arrowhead */}
            <motion.polygon 
                points="-8,-8 8,0 -8,8" 
                fill="#ffffff"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                    offsetPath: "path('M 100,300 Q 150,200 250,250 T 400,200 T 550,300 T 750,250 T 900,350')",
                    offsetDistance: `${((activeIndex + 1) / points.length) * 100}%`,
                    offsetRotate: "auto"
                }}
            />
        </svg>
      </div>

      <h2 className="text-heading mb-16 text-center relative z-10">My Educational Roadmap</h2>

      <div className="relative w-full max-w-7xl px-8 flex items-center justify-between min-h-[400px] perspective-[1500px] z-10">
        
        {/* Timeline Content positioned over the SVG path coordinates */}
        <div className="relative z-10 w-full h-full pointer-events-none">
            {points.map((point, index) => {
              const isActive = index === activeIndex;
              const isPassed = index < activeIndex;

              // Coordinates mapped to follow the specific path: M 100,300 ... T 900,350
              const positions = [
                  { left: "10%", top: "50%" },   // Start (100,300)
                  { left: "45%", top: "38%" },   // Middle (~450,220)
                  { left: "90%", top: "58%" }    // End (900,350)
              ];

              return (
                <div
                  key={index}
                  className={`absolute flex flex-col items-center text-center gap-4 transition-all duration-500 -translate-x-1/2 -translate-y-1/2 ${isActive ? 'scale-110 opacity-100' : 'opacity-40 scale-90'}`}
                  style={{ left: positions[index].left, top: positions[index].top }}
                >
                  {/* Waypoint Dot */}
                  <div className="relative flex items-center justify-center pointer-events-auto">
                    <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full border-2 bg-[#0a1128]/80 backdrop-blur-md flex items-center justify-center ${isActive || isPassed ? 'border-yellow-400/80 shadow-[0_0_20px_rgba(250,204,21,0.4)]' : 'border-white/10'}`}>
                        <div className={`w-4 h-4 rounded-full ${isActive || isPassed ? 'bg-yellow-400 shadow-[0_0_15px_#fbbf24]' : 'bg-white/10'}`}></div>
                    </div>
                    
                    {/* ETA/Speed label next to dot */}
                    <AnimatePresence>
                        {isActive && (
                            <motion.span 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="absolute -bottom-6 text-yellow-400/80 text-[10px] font-black tracking-widest whitespace-nowrap"
                            >
                                {point.eta}
                            </motion.span>
                        )}
                    </AnimatePresence>
                  </div>

                  {/* Text Content */}
                  <div className={`flex flex-col items-center mt-2 pointer-events-auto transition-transform ${index === 0 ? 'translate-y-2' : index === 1 ? '-translate-y-36' : 'translate-y-2'}`}>
                    <h3 className={`font-black leading-tight w-[200px] md:w-[250px] mb-2 ${isActive ? 'text-white text-lg md:text-xl drop-shadow-md' : 'text-white/60 text-sm md:text-base'}`}>
                      {point.title}
                    </h3>
                  </div>
                </div>
              );
            })}
        </div>

      </div>
    </div>
  );
};

export default Education;
