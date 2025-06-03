import React, { useState, useEffect, useRef } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

// Import Vanta effects + Three.js
import NET from "vanta/dist/vanta.net.min";
import CLOUDS from "vanta/dist/vanta.clouds.min";
import * as THREE from "three";

// ① Import your profile picture
import ProfilePic from "../../images/Profile_pic.jpg";


const Hero: React.FC = () => {
  // ──────────────────────────────────────────────────────────────────────
  // Refs & state for Vanta instances
  // ──────────────────────────────────────────────────────────────────────
  const netRef = useRef<HTMLDivElement | null>(null);
  const cloudsRef = useRef<HTMLDivElement | null>(null);
  const [netEffect, setNetEffect] = useState<any>(null);
  const [cloudsEffect, setCloudsEffect] = useState<any>(null);

  // ──────────────────────────────────────────────────────────────────────
  // Initialize Vanta.NET (AI/ML “neural‐net” style)
  // ──────────────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!netEffect && netRef.current) {
      setNetEffect(
        NET({
          el: netRef.current,
          THREE,
          color: 0x60a5fa,          // a lighter sky-blue for nodes
          backgroundColor: 0x0f172a, // nearly black (indigo-900)
          // lower opacity so you still see a hint of “clouds”?
          points: 15.0,
          maxDistance: 20.0,
          spacing: 18.0,
          showDots: true,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
        })
      );
    }
    return () => {
      if (netEffect) {
        netEffect.destroy();
        setNetEffect(null);
      }
    };
  }, [netEffect]);

  // ──────────────────────────────────────────────────────────────────────
  // Initialize Vanta.CLOUDS (Cloud‐Computing vibe)
  // ──────────────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!cloudsEffect && cloudsRef.current) {
      setCloudsEffect(
        CLOUDS({
          el: cloudsRef.current,
          THREE,
          skyColor: 0x000000,        // keep the same black base
          cloudColor: 0x1f2937,      // dark‐indigo/gray clouds
          cloudShadowColor: 0x000000,
          sunColor: 0xffffff,        // (unused since it’s dark)
          sunPosition: { x: 1.0, y: 1.0, z: 0.25 },
          speed: 1.0,                // moderate cloud drift
          backgroundColor: 0x000000, // ensure truly black underneath
        })
      );
    }
    return () => {
      if (cloudsEffect) {
        cloudsEffect.destroy();
        setCloudsEffect(null);
      }
    };
  }, [cloudsEffect]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-black"
    >
      {/* ────────────────────────────────────────────────────────────────── */}
      {/* 1. Vanta.NET canvas (AI/ML visualization) */}
      {/* ────────────────────────────────────────────────────────────────── */}
      <div
        ref={netRef}
        className="absolute inset-0 z-0"
        style={{ backgroundColor: "#000000" }}
      ></div>

      {/* ────────────────────────────────────────────────────────────────── */}
      {/* 2. Vanta.CLOUDS canvas (Cloud‐Computing visualization, semi-opaque) */}
      {/* ────────────────────────────────────────────────────────────────── */}
      <div
        ref={cloudsRef}
        className="absolute inset-0 z-10 opacity-50"
        style={{ backgroundColor: "transparent" }}
      ></div>


      {/* ────────────────────────────────────────────────────────────────── */}
      {/* 3. Blurred color “code‐cloud” blobs (to hint Full-Stack + depth) */}
      {/* ────────────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-20">
        <div
          className="
            absolute top-20 right-0 w-96 h-96
            bg-teal-500/20 dark:bg-cyan-800/20
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
      {/* 4. Main content (Full-Stack text, buttons, social icons) */}
      {/* ────────────────────────────────────────────────────────────────── */}
      <div className="container mx-auto px-6 relative z-30 text-center">
        {/* 4a. Profile picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6"
        >
          <img
            src={ProfilePic}
            alt="Dinesh Kannan"
            className="
              w-32 h-32               /* 128×128 px */
              md:w-40 md:h-40          /* 160×160 px on medium screens */
              rounded-full             /* make it a circle */
              border-4 border-teal-400 /* teal ring */
              object-cover             /* cropped to center */
              shadow-lg                /* subtle drop-shadow */
              mx-auto                  /* center horizontally */
            "
          />
        </motion.div>
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

        {/* Social Icons (Full-Stack “contact” links) */}
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
      {/* 5. Scroll-down arrow */}
      {/* ────────────────────────────────────────────────────────────────── */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400 animate-bounce z-30">
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
