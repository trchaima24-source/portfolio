/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

const HeroText = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const lineVariants = {
    hidden: { 
      opacity: 0, 
      y: 60, 
      rotateX: 30, 
      scale: 0.95,
      filter: "blur(10px)"
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0, 
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1] // Super premium, heavy easing
      }
    }
  };
  
  return (
    <div className="z-10 text-left flex flex-col items-start w-full gap-4 max-w-4xl pt-10 md:pt-0" style={{ perspective: "1500px" }}>
      <motion.div
        className="font-black text-5xl sm:text-6xl md:text-[5rem] lg:text-[6.5rem] text-white leading-[0.95] tracking-tight uppercase flex flex-col"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.span className="inline-block drop-shadow-2xl" variants={lineVariants}>POWER</motion.span>
        <motion.span className="inline-block drop-shadow-2xl" variants={lineVariants}>THE</motion.span>
        <motion.span 
            className="inline-block text-yellow-400 drop-shadow-[0_0_20px_rgba(250,204,21,0.4)]" 
            variants={lineVariants}
        >
            STRATEGY
        </motion.span>
      </motion.div>
      
      <motion.p
        className="text-sm md:text-lg font-medium text-[#8c9fc4] mt-6 md:mt-8 max-w-md md:max-w-xl leading-relaxed tracking-wide"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
      >
        AMPLIFY THE IMPACT
      </motion.p>
    </div>
  );
};

export default HeroText;
