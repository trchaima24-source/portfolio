import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const ParallaxBackground = () => {
  // If you still want some gentle movement → keep these lines
  // If you want completely static background → you can delete them
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { damping: 80, stiffness: 200 });
  const scale = useTransform(x, [0, 1], [1, 1.08]);        // subtle zoom/breathing effect
  const y = useTransform(x, [0, 1], ["0%", "4%"]);         // very gentle vertical drift

  return (
    <section className="absolute inset-0">
      <motion.div
        className="absolute inset-0 w-full h-full -z-50"
        style={{
          backgroundImage: "url(assets/clean.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          // optional: very subtle parallax/breathing feel
          scale,
          y,
        }}
      />
    </section>
  );
};

export default ParallaxBackground;