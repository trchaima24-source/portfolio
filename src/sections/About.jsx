import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useMemo } from "react";

const About = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yMove = useTransform(scrollYProgress, [0, 1], [50, -50]);

  // Use only unique logos (no repetition)
  const availableLogos = [1, 2, 3, 4, 5, 6, 7, 8, 11, 12, 14, 15];

  // Generate 12 FIXED scatter coordinates using mathematical distribution based on index
  const fixedScatters = useMemo(() => {
    return availableLogos.map((_, i) => {
        // Evenly distributed angles around 360 degrees
        const angle = (i / availableLogos.length) * Math.PI * 2;
        
        // Alternate distances to create a more organic, non-circular look
        const distToggle = i % 2 === 0 ? 1 : 1.35;
        
        // Fixed radii providing a "moderate distance" from the text
        const radiusX = 420 * distToggle; 
        const radiusY = 200 * distToggle;

        const x = Math.cos(angle) * radiusX;
        const y = Math.sin(angle) * radiusY;

        return {
            x,
            y,
            z: (i % 3) * 150 - 150, // Fixed staggered depth levels
            rotateX: i * 30,
            rotateY: i * 45,
            scale: 0.85 + (i % 3) * 0.15 // Consistent sizing
        };
    });
  }, []);

  return (
    <div className="c-space section-spacing flex flex-col py-6 relative" ref={containerRef}>

      {/* 3D Immersive Bio & Skills Section */}
      <div className="relative w-full min-h-[550px] md:min-h-[650px] flex items-center justify-center overflow-visible">
        
        {/* BACKGROUND 3D LOGO SWARM - Fixed and Deterministic */}
        <div 
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ perspective: "2000px" }}
        >
            <motion.div 
                className="relative flex items-center justify-center" 
                animate={{
                    rotateY: [0, 8, -8, 0],
                    rotateX: [0, 4, -4, 0]
                }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                style={{ width: "1px", height: "1px", transformStyle: "preserve-3d" }}
            >
                {fixedScatters.map((scatter, i) => {
                    const num = availableLogos[i]; 

                    return (
                    <motion.div
                        key={`particle-${num}`}
                        animate={{
                            // Continuous gentle drift around the FIXED base positions
                            x: [scatter.x, scatter.x + 15, scatter.x - 15, scatter.x], 
                            y: [scatter.y, scatter.y - 15, scatter.y + 15, scatter.y],
                            rotateX: [scatter.rotateX, scatter.rotateX + 20, scatter.rotateX],
                            rotateY: [scatter.rotateY, scatter.rotateY + 20, scatter.rotateY],
                            opacity: [0.7, 1, 0.7] 
                        }}
                        transition={{
                            duration: 10 + (i % 5), // Fixed deterministic speeds
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        // Increased base dimensions by ~10%
                        className="absolute w-14 h-14 md:w-20 md:h-20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 shadow-2xl"
                        style={{ 
                            background: i % 2 === 0 
                                ? 'rgba(74, 114, 184, 0.3)' 
                                : 'rgba(147, 51, 234, 0.3)',
                            transformStyle: "preserve-3d",
                            scale: scatter.scale
                        }}
                    >
                        <img 
                            src={`assets/logos/${num}-removebg-preview.png`} 
                            alt="" 
                            // Increased inner logo size by ~10%
                            className="w-8 h-8 md:w-12 md:h-12 object-contain opacity-100" 
                        />
                    </motion.div>
                    );
                })}
            </motion.div>
        </div>

        {/* CENTERED BIO CONTENT - Focused */}
        <motion.div 
          style={{ y: yMove }}
          className="z-10 relative flex flex-col items-center text-center max-w-2xl px-6 pointer-events-auto"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-black text-3xl md:text-5xl text-white mb-6" 
          >
            Hi, I'm Chaima TRIKI
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl font-medium text-neutral-400 leading-relaxed" 
          >
            I specialize in developing strong marketing strategies and turning complex 
            data into actionable insights through 
            International Marketing and Data Science
          </motion.p>
        </motion.div>

      </div>
    </div>
  );
};

export default About;
