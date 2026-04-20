import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { myProjects } from "../constants";

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-6 backdrop-blur-xl bg-black/60"
        >
            <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-2xl bg-[#0a1128] border border-white/20 rounded-[2.5rem] overflow-hidden shadow-2xl p-8 flex flex-col gap-6"
            >
                <div className="flex justify-between items-start">
                    <h3 className="text-3xl font-black text-white">{project.title}</h3>
                    <button onClick={onClose} className="text-white/50 hover:text-white text-2xl">✕</button>
                </div>
                <div className="w-full h-64 rounded-2xl overflow-hidden shadow-lg">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-4">
                    <p className="text-white/80 text-lg leading-relaxed">{project.description}</p>
                    <ul className="space-y-2">
                        {project.subDescription?.map((detail, i) => (
                            <li key={i} className="text-[#8c9fc4] text-sm flex items-start gap-3">
                                <span className="text-yellow-400 mt-1">✦</span> {detail}
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </motion.div>
    );
};

const Projects = () => {
  const [index, setIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleNext = () => setIndex((prev) => (prev + 1) % myProjects.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + myProjects.length) % myProjects.length);

  const visibleProjects = useMemo(() => {
    const prev = (index - 1 + myProjects.length) % myProjects.length;
    const farPrev = (index - 2 + myProjects.length) % myProjects.length;
    const next = (index + 1) % myProjects.length;
    const farNext = (index + 2) % myProjects.length;
    return [
      { id: farPrev, position: -2 },
      { id: prev, position: -1 },
      { id: index, position: 0 },
      { id: next, position: 1 },
      { id: farNext, position: 2 },
    ];
  }, [index]);

  return (
    <div className="section-spacing c-space py-4 flex flex-col items-center overflow-hidden relative">

      {/* Section Title Background Header - Matched to Experience */}      <div className="absolute top-10 left-0 w-full flex justify-center opacity-[0.03] pointer-events-none z-0">
         <h2 className="text-5xl md:text-7xl lg:text-[10rem] font-black text-white whitespace-nowrap uppercase tracking-widest">Projects</h2>
      </div>

      <h2 className="text-heading mb-12 relative z-10">My Projects</h2>

      <div className="relative w-full h-[550px] flex items-center justify-center perspective-[2000px]">
        <AnimatePresence initial={false} mode="popLayout">
          {visibleProjects.map((item) => {
            const project = myProjects[item.id];
            const isCenter = item.position === 0;
            const absPos = Math.abs(item.position);

            return (
              <motion.div
                key={`proj-${project.title}-${item.position}`}
                animate={{
                  x: item.position * 260, // Increased spread for larger cards
                  z: isCenter ? 0 : -200 * absPos, // Reduced depth slightly for a flatter look
                  rotateY: item.position * -20, // Reduced from -35 for less inclination
                  opacity: isCenter ? 1 : 0.6 / absPos, // Increased opacity for side cards
                  scale: isCenter ? 1 : 0.9 - (absPos * 0.05), // Kept side cards slightly larger
                }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                className="absolute w-[280px] md:w-[360px] aspect-[3/4] cursor-pointer"
                style={{ zIndex: 10 - absPos }}
                onClick={() => {
                    if (isCenter) setSelectedProject(project);
                    else item.position < 0 ? handlePrev() : handleNext();
                }}
              >
                <div className="w-full h-full rounded-[2rem] overflow-hidden border border-white/20 bg-white/[0.08] backdrop-blur-xl shadow-2xl relative group">
                  
                  {/* FRONT FACE: Image and Title */}
                  <motion.div 
                    className="absolute inset-0 flex flex-col p-4 transition-all duration-500 group-hover:opacity-0 group-hover:scale-95"
                  >
                    <div className="w-full h-[75%] rounded-xl overflow-hidden mb-4 border border-white/10 shadow-lg">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-center items-center text-center">
                      <h3 className="text-white text-lg font-black tracking-tight">{project.title}</h3>
                    </div>
                  </motion.div>

                  {/* HOVER FACE: Description */}
                  <div className="absolute inset-0 p-6 flex flex-col items-center justify-center text-center opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500">
                    <p className="text-white text-sm leading-relaxed font-medium mb-4">
                        {project.description.substring(0, 150)}...
                    </p>
                    <span className="text-yellow-400 text-xs font-black uppercase tracking-widest">Click to Read More</span>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <div className="flex gap-4 mt-8">
          <button onClick={handlePrev} className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all">←</button>
          <button onClick={handleNext} className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all">→</button>
      </div>

      <AnimatePresence>
        {selectedProject && (
            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
