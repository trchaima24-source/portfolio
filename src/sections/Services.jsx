/* eslint-disable react/prop-types */

const Gem1 = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
    <defs>
      <linearGradient id="grad-top" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00f5ff" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
      <linearGradient id="grad-bot-right" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#a855f7" />
        <stop offset="100%" stopColor="#00f5ff" />
      </linearGradient>
      <linearGradient id="grad-bot-left" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#00d4ff" />
        <stop offset="100%" stopColor="#c084fc" />
      </linearGradient>
      <linearGradient id="grad-center" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#00f5ff" />
      </linearGradient>
    </defs>
    <g stroke="#ffffff" strokeWidth="0.5" strokeLinejoin="round">
      <polygon points="30,20 70,20 85,45 50,90 15,45" fill="url(#grad-bot-left)" opacity="0.6"/>
      <polygon points="30,20 70,20 50,40" fill="url(#grad-top)" />
      <polygon points="70,20 85,45 50,40" fill="url(#grad-bot-right)" />
      <polygon points="85,45 50,90 50,40" fill="url(#grad-center)" />
      <polygon points="50,90 15,45 50,40" fill="url(#grad-bot-left)" />
      <polygon points="15,45 30,20 50,40" fill="url(#grad-top)" />
      
      {/* Highlights */}
      <polygon points="30,20 50,40 40,20" fill="#ffffff" opacity="0.4"/>
      <polygon points="15,45 30,35 50,40" fill="#ffffff" opacity="0.2"/>
    </g>
  </svg>
);

const Gem2 = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
    <defs>
      <linearGradient id="cube-top" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#00f5ff" />
        <stop offset="100%" stopColor="#00d4ff" />
      </linearGradient>
      <linearGradient id="cube-left" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00d4ff" />
        <stop offset="100%" stopColor="#0ea5e9" />
      </linearGradient>
      <linearGradient id="cube-right" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#0284c7" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>
    <g stroke="#ffffff" strokeWidth="0.5" strokeLinejoin="round">
      <polygon points="50,15 85,35 50,55 15,35" fill="url(#cube-top)" />
      <polygon points="15,35 50,55 50,90 15,70" fill="url(#cube-left)" />
      <polygon points="50,55 85,35 85,70 50,90" fill="url(#cube-right)" />
      
      {/* Specular highlights */}
      <polygon points="50,15 65,25 50,45 35,25" fill="#ffffff" opacity="0.3"/>
      <polygon points="15,35 30,45 30,75 15,70" fill="#ffffff" opacity="0.15"/>
    </g>
  </svg>
);

const Gem3 = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
    <defs>
      <radialGradient id="orb-grad" cx="30%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#00f5ff" />
        <stop offset="40%" stopColor="#a855f7" />
        <stop offset="80%" stopColor="#c084fc" />
        <stop offset="100%" stopColor="#4c1d95" />
      </radialGradient>
      <linearGradient id="orb-highlight" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8"/>
        <stop offset="50%" stopColor="#ffffff" stopOpacity="0"/>
      </linearGradient>
    </defs>
    {/* Outer glow/rim */}
    <circle cx="50" cy="50" r="40" fill="url(#orb-grad)" stroke="#c084fc" strokeWidth="1" />
    {/* Swirl lines */}
    <path d="M 20,40 Q 50,20 80,60" fill="none" stroke="#00f5ff" strokeWidth="1.5" opacity="0.6"/>
    <path d="M 30,80 Q 70,80 85,40" fill="none" stroke="#00f5ff" strokeWidth="1" opacity="0.4"/>
    {/* Specular */}
    <circle cx="35" cy="35" r="20" fill="url(#orb-highlight)" />
    <circle cx="70" cy="65" r="5" fill="#ffffff" opacity="0.5" />
  </svg>
);

const Gem4 = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
    <defs>
      <linearGradient id="star-1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#c084fc" />
        <stop offset="100%" stopColor="#00f5ff" />
      </linearGradient>
      <linearGradient id="star-2" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#a855f7" />
        <stop offset="100%" stopColor="#0ea5e9" />
      </linearGradient>
    </defs>
    <g stroke="#ffffff" strokeWidth="0.5" strokeLinejoin="round">
      {/* Star polygon base */}
      <polygon points="50,10 60,35 85,35 65,55 75,80 50,65 25,80 35,55 15,35 40,35" fill="url(#star-1)" />
      
      {/* Facets to center */}
      <polygon points="50,10 60,35 50,50" fill="url(#star-2)" opacity="0.8"/>
      <polygon points="60,35 85,35 50,50" fill="url(#star-1)" opacity="0.9"/>
      <polygon points="85,35 65,55 50,50" fill="url(#star-2)" opacity="0.7"/>
      <polygon points="65,55 75,80 50,50" fill="url(#star-1)" opacity="0.85"/>
      <polygon points="75,80 50,65 50,50" fill="url(#star-2)" opacity="0.9"/>
      <polygon points="50,65 25,80 50,50" fill="url(#star-1)" opacity="0.7"/>
      <polygon points="25,80 35,55 50,50" fill="url(#star-2)" opacity="0.85"/>
      <polygon points="35,55 15,35 50,50" fill="url(#star-1)" opacity="0.9"/>
      <polygon points="15,35 40,35 50,50" fill="url(#star-2)" opacity="0.7"/>
      <polygon points="40,35 50,10 50,50" fill="url(#star-1)" opacity="0.8"/>
      
      {/* Center gem */}
      <circle cx="50" cy="50" r="10" fill="#00f5ff" opacity="0.6"/>
      <circle cx="50" cy="50" r="5" fill="#ffffff" opacity="0.9"/>
    </g>
  </svg>
);

const GlowingCard = ({ title, icon }) => (
  <div className="relative group w-full h-full rounded-[24px] p-[2px] transition-all duration-300 hover:scale-105 z-0 cursor-pointer mt-10">
    {/* Glow blur behind everything */}
    <div className="absolute -inset-1 rounded-[24px] blur-xl bg-gradient-to-br from-blue-600/30 to-blue-400/30 group-hover:from-blue-500/60 group-hover:to-blue-300/60 transition-all duration-500 z-0 opacity-70 group-hover:opacity-100"></div>
    
    {/* Gradient border container with slow spin */}
    <div className="absolute inset-0 rounded-[24px] overflow-hidden z-0">
       <div className="absolute inset-[-150%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3b82f6_0%,#1d4ed8_50%,#3b82f6_100%)]"></div>
    </div>
    
    {/* Inner Card Background */}
    <div className="relative h-full w-full bg-[#001242]/95 backdrop-blur-md rounded-[22px] p-8 flex flex-col items-center justify-center gap-6 z-10 shadow-inner border border-white/5">
      <div className="w-24 h-24 relative flex items-center justify-center drop-shadow-[0_0_15px_rgba(59,130,246,0.4)] group-hover:drop-shadow-[0_0_30px_rgba(37,99,235,0.8)] transition-all duration-500">
        {icon}
      </div>
      <h3 className="text-white font-semibold text-lg md:text-xl text-center tracking-wide leading-tight">
        {title}
      </h3>
    </div>
  </div>
);

const Services = () => {
  return (
    <section className="c-space section-spacing" id="services">
      <h2 className="text-heading mb-12">My Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        <GlowingCard title="Web Developer" icon={<Gem1 />} />
        <GlowingCard title="React Native Developer" icon={<Gem2 />} />
        <GlowingCard title="Backend Developer" icon={<Gem3 />} />
        <GlowingCard title="Content Creator" icon={<Gem4 />} />
      </div>
    </section>
  );
};

export default Services;
