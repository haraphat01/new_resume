"use client";
import { motion } from 'framer-motion';

export default function Navbar({ activeSection, scrollTo }) {
  const sections = ['home', 'about', 'experience', 'projects', 'contact'];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-10">
      <div className="container mx-auto px-4 py-4">
        <ul className="flex justify-center space-x-6">
          {sections.map((section) => (
            <li key={section}>
              <button
                onClick={() => scrollTo(section)}
                className={`capitalize relative ${
                  activeSection === section ? 'font-bold' : ''
                }`}
              >
                {section}
                {activeSection === section && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 bottom-0 h-0.5 bg-black"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}