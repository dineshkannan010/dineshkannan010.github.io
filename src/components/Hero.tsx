import React, { useState, useEffect, useRef } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import NET from "vanta/dist/vanta.net.min";   // Vanta.NET effect
import * as THREE from "three";              // Vanta’s peer dependency

const Hero: React.FC = () => {
  // ──────────────────────────────────────────────────────────────────────
  // 1️⃣ Create a ref and state to hold the Vanta effect instance
  // ──────────────────────────────────────────────────────────────────────
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  // ──────────────────────────────────────────────────────────────────────
  // 2️⃣ Initialize Vanta.NET when component mounts; destroy on unmount
  // ──────────────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,                                 // Pass the Three.js import
          color: 0x22d3ee,                       // Node color (cyan-400)
          backgroundColor: 0x000000,            // Dark background
          backgroundAlpha: 1.0,
          points: 12.0,                          // Density of nodes
          maxDistance: 20.0,                     // Link length
          spacing: 18.0,                         // Node spacing
          showDots: true,                        // Show the nodes themselves
          mouseControls: true,                   // React to mouse hover
          touchControls: true,                   // React on touch devices
          gyroControls: false,
          scale: 1.0,
          scaleMobile: 1.0,
        })
      );
    }
    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
        setVantaEffect(null);
      }
    };
  }, [vantaEffect]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-black"
    >
      {/* ────────────────────────────────────────────────────────────────── */}
      {/* 1. Vanta.NET background container (absolutely positioned) */}
      {/* ────────────────────────────────────────────────────────────────── */}
      <div
        ref={vantaRef}
        className="absolute inset-0 z-0"
        style={{ backgroundColor: "#000000" }}
      ></div>

      {/* ────────────────────────────────────────────────────────────────── */}
      {/* 2. Blurred “cloud” blobs (optional, for extra depth) */}
      {/* ────────────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <div
          className="
            absolute top-20 right-0 w-96 h-96
            bg-teal-400/20 dark:bg-cyan-800/20
            rounded-full mix-blend-overlay filter blur-3xl
            opacity-50 animate-float
          "
        ></div>
        <div
          className="
            absolute bottom-20 left-20 w-96 h-96
            bg-indigo-500/20 dark:bg-indigo-900/20
            rounded-full mix-blend-overlay filter blur-3xl
            opacity-50 animate-float-delayed
          "
        ></div>
      </div>

      {/* ────────────────────────────────────────────────────────────────── */}
      {/* 3. Main content (text, buttons, social icons) */}
      {/* ────────────────────────────────────────────────────────────────── */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            <span className="text-teal-400">Dinesh</span> Kannan
          </h1>
        </motion.div>

        {/* Title */}
        <motion.h2
          className="text-2xl md:text-3xl font-medium mb-6 text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Software Engineer
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Master’s student in Computer Science at NC State University,
          specializing in AI/ML, Cloud Computing, and Full Stack Development.
          Passionate about building innovative solutions and exploring cutting-edge
          technologies.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="btn btn-primary"
          >
            Get in Touch
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="btn btn-outline"
          >
            See My Work
          </Link>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex space-x-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="https://github.com/dineshkannan010"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-teal-400 transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/dinesh012"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-teal-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:dineshkannan010@gmail.com"
            className="text-gray-400 hover:text-teal-400 transition-colors"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </motion.div>
      </div>

      {/* ────────────────────────────────────────────────────────────────── */}
      {/* 4. Scroll-down arrow */}
      {/* ────────────────────────────────────────────────────────────────── */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400 animate-bounce">
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer"
        >
          <ArrowDown size={24} />
        </Link>
      </div>
    </section>
  );
};

export default Hero;