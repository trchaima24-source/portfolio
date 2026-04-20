/* eslint-disable react/prop-types */

const GemCyan = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_20px_rgba(0,245,255,0.8)]">
    <defs>
      <linearGradient id="gem-c-1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00f5ff" />
        <stop offset="100%" stopColor="#0284c7" />
      </linearGradient>
      <linearGradient id="gem-c-2" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#14f195" />
        <stop offset="100%" stopColor="#0369a1" />
      </linearGradient>
    </defs>
    <g stroke="#ffffff" strokeWidth="0.5" strokeLinejoin="round" className="animate-[pulse_3s_ease-in-out_infinite]">
      <polygon points="30,20 70,20 85,45 50,90 15,45" fill="url(#gem-c-2)" opacity="0.8"/>
      <polygon points="30,20 70,20 50,40" fill="url(#gem-c-1)" />
      <polygon points="70,20 85,45 50,40" fill="url(#gem-c-2)" />
      <polygon points="85,45 50,90 50,40" fill="url(#gem-c-1)" />
      <polygon points="50,90 15,45 50,40" fill="url(#gem-c-2)" />
      <polygon points="15,45 30,20 50,40" fill="url(#gem-c-1)" />
      <polygon points="30,20 50,40 40,20" fill="#ffffff" opacity="0.5"/>
    </g>
  </svg>
);

const GemPurple = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_20px_rgba(168,85,247,0.8)]">
    <defs>
      <radialGradient id="gem-p-1" cx="30%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#e879f9" />
        <stop offset="50%" stopColor="#c084fc" />
        <stop offset="100%" stopColor="#7e22ce" />
      </radialGradient>
      <linearGradient id="gem-p-hl" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8"/>
        <stop offset="50%" stopColor="#ffffff" stopOpacity="0"/>
      </linearGradient>
    </defs>
    <g className="animate-[pulse_3s_ease-in-out_infinite_0.5s]">
      <circle cx="50" cy="50" r="40" fill="url(#gem-p-1)" stroke="#f0abfc" strokeWidth="1" />
      <path d="M 20,40 Q 50,20 80,60" fill="none" stroke="#e879f9" strokeWidth="2" opacity="0.7"/>
      <path d="M 30,80 Q 70,80 85,40" fill="none" stroke="#e879f9" strokeWidth="1.5" opacity="0.5"/>
      <circle cx="35" cy="35" r="15" fill="url(#gem-p-hl)" />
      <circle cx="70" cy="65" r="4" fill="#ffffff" opacity="0.6" />
    </g>
  </svg>
);

const GemPink = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_20px_rgba(236,72,153,0.8)]">
    <defs>
      <linearGradient id="gem-pk-1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f472b6" />
        <stop offset="100%" stopColor="#db2777" />
      </linearGradient>
      <linearGradient id="gem-pk-2" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#fda4af" />
        <stop offset="100%" stopColor="#be123c" />
      </linearGradient>
    </defs>
    <g stroke="#ffffff" strokeWidth="0.5" strokeLinejoin="round" className="animate-[pulse_3s_ease-in-out_infinite_1s]">
      <polygon points="50,10 60,35 85,35 65,55 75,80 50,65 25,80 35,55 15,35 40,35" fill="url(#gem-pk-1)" />
      <polygon points="50,10 60,35 50,50" fill="url(#gem-pk-2)" opacity="0.8"/>
      <polygon points="60,35 85,35 50,50" fill="url(#gem-pk-1)" opacity="0.9"/>
      <polygon points="85,35 65,55 50,50" fill="url(#gem-pk-2)" opacity="0.7"/>
      <polygon points="65,55 75,80 50,50" fill="url(#gem-pk-1)" opacity="0.85"/>
      <polygon points="75,80 50,65 50,50" fill="url(#gem-pk-2)" opacity="0.9"/>
      <polygon points="50,65 25,80 50,50" fill="url(#gem-pk-1)" opacity="0.7"/>
      <polygon points="25,80 35,55 50,50" fill="url(#gem-pk-2)" opacity="0.85"/>
      <polygon points="35,55 15,35 50,50" fill="url(#gem-pk-1)" opacity="0.9"/>
      <polygon points="15,35 40,35 50,50" fill="url(#gem-pk-2)" opacity="0.7"/>
      <polygon points="40,35 50,10 50,50" fill="url(#gem-pk-1)" opacity="0.8"/>
      <circle cx="50" cy="50" r="10" fill="#fbcfe8" opacity="0.6"/>
      <circle cx="50" cy="50" r="5" fill="#ffffff" opacity="0.9"/>
    </g>
  </svg>
);

const RoadmapCard = ({ icon, year, title, desc }) => (
  <div className="relative group w-[280px] sm:w-[320px] transition-all duration-500 hover:-translate-y-6 hover:scale-105 perspective-1000 z-10">
    {/* Outer Neon Glow Border Gradient */}
    <div className="absolute -inset-[2px] rounded-[28px] bg-gradient-to-r from-blue-600 via-blue-400 to-blue-800 opacity-60 group-hover:opacity-100 blur-md transition-all duration-500"></div>
    <div className="absolute -inset-[2px] rounded-[28px] bg-gradient-to-r from-blue-600 via-blue-400 to-blue-800 opacity-30 group-hover:opacity-70 blur-2xl transition-all duration-500"></div>
    
    {/* Inner Card background (Subtle glassmorphism) */}
    <div className="relative h-full w-full bg-[#001242]/60 backdrop-blur-md rounded-[26px] p-8 flex flex-col items-center justify-center gap-4 border border-white/10 shadow-2xl transition-transform duration-500 group-hover:rotate-x-12">
      <div className="w-28 h-28 mb-2 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
        {icon}
      </div>
      <h3 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] text-center tracking-tight">
        {year}
      </h3>
      <h4 className="text-blue-400 font-bold text-xl text-center drop-shadow-[0_0_5px_rgba(59,130,246,0.4)]">
        {title}
      </h4>
      <p className="text-blue-100/80 text-sm text-center leading-relaxed">
        {desc}
      </p>
    </div>
  </div>
);

const Roadmap = () => {
  return (
    <section className="c-space section-spacing bg-[#000922] relative overflow-hidden" id="roadmap">
      <h2 className="text-heading mb-16 text-center md:text-left text-white relative z-20">Roadmap</h2>
      
      <div className="relative w-full max-w-7xl mx-auto py-6 px-4 min-h-[700px] flex flex-col justify-center">

        {/* Background Diagonal Ascending Path (Visible on Desktop) */}        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-4 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-800 blur-[15px] -rotate-[18deg] scale-125 z-0 opacity-70"></div>
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-800 blur-[2px] -rotate-[18deg] scale-125 z-0 opacity-90"></div>
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[1px] bg-white -rotate-[18deg] scale-125 z-0 opacity-80"></div>

        <div className="relative w-full h-full flex flex-col md:flex-row justify-between items-center gap-16 md:gap-4 z-10">
          
          {/* Card 1: Bottom Left */}
          <div className="md:mt-auto md:mb-10 w-full flex justify-center md:w-1/3">
            <RoadmapCard 
              icon={<GemCyan />}
              year="2022"
              title="Launch & First Users"
              desc="Built the core foundation and shipped the MVP to our early adopters."
            />
          </div>
          
          {/* Card 2: Middle */}
          <div className="md:my-auto w-full flex justify-center md:w-1/3">
            <RoadmapCard 
              icon={<GemPurple />}
              year="2023"
              title="Growth & Mobile"
              desc="Expanded features, released mobile apps, and scaled infrastructure."
            />
          </div>

          {/* Card 3: Top Right */}
          <div className="md:mb-auto md:mt-10 w-full flex justify-center md:w-1/3">
            <RoadmapCard 
              icon={<GemPink />}
              year="2024"
              title="Advanced Features"
              desc="AI integrations, enterprise security, and global market entry."
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Roadmap;