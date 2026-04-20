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
                  x: item.position * 300, // Slightly more spread
                  z: isCenter ? 0 : -150 * absPos, // Less depth
                  rotateY: item.position * -15, // Less tilt
                  opacity: isCenter ? 1 : 0.7 / absPos, // More visible side cards
                  scale: isCenter ? 1 : 0.9, 
                }}
                transition={{ type: "spring", stiffness: 150, damping: 20 }}
                className="absolute w-[300px] md:w-[380px] aspect-[4/5] cursor-pointer"
                style={{ zIndex: 10 - absPos }}
                onClick={() => {
                    if (isCenter) setSelectedProject(project);
                    else item.position < 0 ? handlePrev() : handleNext();
                }}
              >
                <div className="w-full h-full rounded-[2.5rem] overflow-hidden border border-white/20 bg-white/[0.05] backdrop-blur-2xl shadow-2xl relative group">
                  
                  {/* Image and Content */}
                  <div className="absolute inset-0 flex flex-col p-5">
                    <div className="w-full h-[70%] rounded-[1.5rem] overflow-hidden mb-6 border border-white/10 shadow-xl">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <div className="flex-1 flex flex-col justify-start">
                      <h3 className="text-white text-xl font-black leading-tight mb-2">{project.title}</h3>
                      <p className="text-white/50 text-xs uppercase tracking-widest font-bold">Project Details</p>
                    </div>
                  </div>

                  {/* HOVER OVERLAY: Description */}
                  <div className="absolute inset-0 p-8 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-[#0a1128]/90 backdrop-blur-md">
                    <h3 className="text-white text-lg font-black mb-4">{project.title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed mb-6">
                        {project.description}
                    </p>
                    <span className="px-6 py-2 rounded-full bg-yellow-400 text-black text-xs font-black uppercase tracking-widest shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        View Details
                    </span>
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
