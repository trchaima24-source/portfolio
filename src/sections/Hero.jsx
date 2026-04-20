/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });

  // Mouse position springs for smooth drifting effect
  const mouseX = useSpring(0, { stiffness: 15, damping: 30 });
  const mouseY = useSpring(0, { stiffness: 15, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative w-full h-full overflow-hidden flex flex-col md:flex-row items-center justify-between pb-13 md:pb-24 pt-20 px-6 md:px-16 lg:px-24">
      
      {/* Full-Screen Background Image without effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Responsive sizing and positioning for mobile, tablet, and laptop */}
        <img 
          src="assets/ch_back.png" 
          alt="background graphic" 
          className="w-full h-[110%] sm:h-[120%] md:h-full object-cover object-[80%_top] md:object-[90%_top] lg:object-center scale-105 md:scale-100 origin-bottom"
        />
        {/* Soft fading gradient at the bottom of the image matching website background */}
        <div className="absolute bottom-0 left-0 w-full h-48 sm:h-64 md:h-48 bg-gradient-to-t from-[#0a1128] via-[#0a1128]/70 to-transparent"></div>
      </div>

      {/* Text on the Left */}
      <div className="w-full md:w-1/2 flex justify-start z-10 relative">
        <HeroText />
      </div>

      <ParallaxBackground />
    </div>
  );
};

export default Hero;
