 
import { useState } from "react";
import { motion } from "motion/react";
function Navigation({ closeMenu }) {
  return (
    <ul className="nav-ul">
      <li className="nav-li text-neutral-400 hover:text-white max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5">
        <a className="nav-link" href="#home" onClick={closeMenu}>
          Home
        </a>
      </li>
      <li className="nav-li text-neutral-400 hover:text-white max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5">
        <a className="nav-link" href="#about" onClick={closeMenu}>
          About
        </a>
      </li>
      <li className="nav-li text-neutral-400 hover:text-white max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5">
        <a className="nav-link" href="#experience" onClick={closeMenu}>
          Experience
        </a>
      </li>
      <li className="nav-li text-neutral-400 hover:text-white max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5">
        <a className="nav-link" href="#education" onClick={closeMenu}>
          Education
        </a>
      </li>
      <li className="nav-li text-neutral-400 hover:text-white max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5">
        <a className="nav-link" href="#projects" onClick={closeMenu}>
          Projects
        </a>
      </li>
      <li className="nav-li text-neutral-400 hover:text-white max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5">
        <a className="nav-link" href="#testimonial" onClick={closeMenu}>
          Testimonials
        </a>
      </li>
      <li className="nav-li text-neutral-400 hover:text-white max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5">
        <a className="nav-link" href="#contact" onClick={closeMenu}>
          Contact
        </a>
      </li>
    </ul>
  );
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);
  
  return (
    <div className="fixed top-0 inset-x-0 z-50 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space w-full px-6 md:px-16 lg:px-24">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
            onClick={closeMenu}
          >
            Chaima
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation closeMenu={closeMenu} />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation closeMenu={closeMenu} />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
