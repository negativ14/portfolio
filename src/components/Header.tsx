"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react"

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false); // scrolling down
      } else {
        setShowHeader(true); // scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <motion.nav
        initial={{
          y: -50,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className="max-w-screen-xl mx-auto px-6 sm:px-8 py-4 flex justify-between items-center bg-black/80 backdrop-blur-md rounded-lg shadow-md mt-6">

        <motion.div
          initial={{
            y: -50,
            opacity: 0
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="flex items-center gap-2 font-bold text-2xl sm:text-4xl bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 bg-clip-text text-transparent">
          <span>ROHIT</span>
          <span className="hidden md:block">KUMAR</span>
          <span className="hidden md:block">MEHTA</span>
        </motion.div>


        <motion.ul
          initial={{
            y: -50,
            opacity: 0
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="flex items-center gap-6 sm:gap-10 text-base sm:text-xl font-medium text-white">
          <li>
            <a href="#about" className="hover:text-purple-500 hover:scale-110 transition duration-200">
              About
            </a>
          </li>
          <li>
            <a href="#project" className="hover:text-purple-500 hover:scale-110 transition duration-200">
              Project
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-purple-500 hover:scale-110 transition duration-200">
              Contact
            </a>
          </li>
        </motion.ul>
      </motion.nav>
    </header>
  );
}
