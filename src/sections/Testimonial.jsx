/* eslint-disable react/prop-types */
import { useState, useEffect, useCallback } from "react";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";
import { reviews } from "../constants";

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <motion.figure
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={twMerge(
        "relative w-full cursor-default overflow-hidden rounded-[1.5rem] p-6",
        "bg-white/[0.08] backdrop-blur-xl border border-white/20",
        "shadow-lg flex flex-col gap-4"
      )}
    >
      <div className="flex items-center gap-4 border-b border-white/5 pb-3">
        <div className="w-12 h-12 shrink-0 rounded-lg overflow-hidden border border-white/10">
          <img className="w-full h-full object-cover" alt={name} src={img} />
        </div>
        <div className="flex flex-col">
          <figcaption className="text-base font-black text-white leading-tight">{name}</figcaption>
          <p className="text-[10px] font-bold text-yellow-400 tracking-wider uppercase">{username}</p>
        </div>
      </div>

      <blockquote className="text-base md:text-lg leading-relaxed text-white/80 font-medium italic">
        "{body}"
      </blockquote>
    </motion.figure>
  );
};

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(handleNext, 8000);
    return () => clearInterval(timer);
  }, [handleNext]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <div className="section-spacing c-space py-6 relative overflow-hidden flex flex-col items-center">

      {/* Section Title Background Header */}      <div className="absolute top-10 left-0 w-full flex justify-center opacity-[0.03] pointer-events-none z-0">
         <h2 className="text-5xl md:text-7xl lg:text-[10rem] font-black text-white whitespace-nowrap uppercase tracking-widest">Testimonials</h2>
      </div>

      <div className="flex flex-col items-center text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">What People Say</h2>
        <p className="text-white/60 max-w-xl text-base md:text-lg">
        </p>
      </div>

      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 min-h-[300px] flex items-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
            }}
            className="w-full"
          >
            <ReviewCard {...reviews[currentIndex]} />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 z-20">
          <button 
            onClick={handlePrev}
            className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/30 transition-all shadow-xl backdrop-blur-md"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
        </div>
        <div className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 z-20">
          <button 
            onClick={handleNext}
            className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/30 transition-all shadow-xl backdrop-blur-md"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      </div>

      {/* Pagination Indicators */}
      <div className="flex gap-2 mt-12 relative z-10">
        {reviews.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > currentIndex ? 1 : -1);
              setCurrentIndex(idx);
            }}
            className={twMerge(
              "w-2 h-2 rounded-full transition-all duration-300",
              currentIndex === idx ? "w-8 bg-yellow-400" : "bg-white/20 hover:bg-white/40"
            )}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
