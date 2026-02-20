import React, { useState, useEffect } from "react";
import { 
  ArrowDown, Github, Linkedin, Mail, 
  Code, Cpu, Globe, Database, Server, 
  Cloud, Layers, Terminal, GitBranch, Command, 
  Wifi, Shield 
} from "lucide-react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import ProfilePic from "/images/Profile_pic.jpg";

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [index, setIndex] = useState(0);

  const words = [
    { text: "Full-Stack", color: "text-teal-400" },
    { text: "AI/ML", color: "text-indigo-400" },
    { text: "Cloud Native", color: "text-purple-400" },
    { text: "Scalable", color: "text-cyan-400" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500); 
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const floatingShapes = [
    { Icon: Code, top: "15%", left: "10%", size: 40, color: "text-teal-500/40", duration: 15, delay: 0, hideOnMobile: false },
    { Icon: Terminal, top: "25%", left: "20%", size: 30, color: "text-slate-500/40", duration: 18, delay: 1, hideOnMobile: true },
    { Icon: Cloud, top: "12%", left: "80%", size: 45, color: "text-purple-500/40", duration: 20, delay: 0.5, hideOnMobile: false },
    { Icon: Wifi, top: "28%", left: "88%", size: 35, color: "text-indigo-500/40", duration: 22, delay: 2, hideOnMobile: true },
    { Icon: Database, top: "45%", left: "8%", size: 38, color: "text-emerald-500/40", duration: 16, delay: 1.5, hideOnMobile: true },
    { Icon: GitBranch, top: "60%", left: "15%", size: 32, color: "text-orange-500/40", duration: 24, delay: 3, hideOnMobile: false },
    { Icon: Cpu, top: "50%", left: "85%", size: 50, color: "text-indigo-400/40", duration: 19, delay: 1, hideOnMobile: true },
    { Icon: Layers, top: "65%", left: "78%", size: 40, color: "text-pink-500/40", duration: 21, delay: 2.5, hideOnMobile: false },
    { Icon: Server, top: "80%", left: "25%", size: 36, color: "text-blue-500/40", duration: 23, delay: 0, hideOnMobile: false },
    { Icon: Shield, top: "85%", left: "65%", size: 34, color: "text-teal-600/40", duration: 25, delay: 1.5, hideOnMobile: true },
    { Icon: Command, top: "35%", left: "92%", size: 20, color: "text-slate-600/30", duration: 12, delay: 4, hideOnMobile: true },
    { Icon: Globe, top: "10%", left: "50%", size: 24, color: "text-cyan-500/30", duration: 28, delay: 5, hideOnMobile: true },
  ];

  return (
    <section
      id="hero"
      // FIX 1: Changed to flex-col and removed items-center/justify-center
      className="relative min-h-screen flex flex-col overflow-hidden bg-[#030712]"
    >
      {/* LAYER 1: Dynamic Background Grid */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_40px]"
        ></div>
      </div>

      {/* LAYER 2: Mouse Spotlight */}
      <div
        className="absolute z-0 pointer-events-none hidden md:block"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(45, 212, 191, 0.15), transparent 40%)`,
          inset: 0,
        }}
      />

      {/* LAYER 3: Floating 3D Icons */}
      {floatingShapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute z-0 ${shape.color} ${shape.hideOnMobile ? 'hidden md:block' : 'block'}`}
          style={{ top: shape.top, left: shape.left }}
          animate={{
            y: [0, -30, 0],   
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1], 
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay,
          }}
        >
           <shape.Icon size={shape.size} strokeWidth={1.5} />
        </motion.div>
      ))}

      {/* LAYER 4: Main Content */}
      {/* FIX 2: Added my-auto (safe centering) and pt-32 (header clearance) */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center my-auto pt-32 pb-16">
        <div className="inline-block relative w-full max-w-4xl mx-auto">
            
            {/* Profile Pic */}
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-8 relative inline-block"
            >
                <motion.div 
                    className="absolute -inset-3 md:-inset-4 rounded-full border-t-2 border-l-2 border-teal-500/50"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                <motion.div 
                    className="absolute -inset-3 md:-inset-4 rounded-full border-b-2 border-r-2 border-indigo-500/50"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
                <img
                    src={ProfilePic}
                    alt="Dinesh Kannan"
                    className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full border-4 border-slate-900 object-cover shadow-2xl z-10"
                />
            </motion.div>

            {/* Name */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-3 md:mb-4 text-white tracking-tighter">
                Dinesh <span className="text-teal-400">Kannan</span>
            </h1>
            </motion.div>

            {/* Gradient Title Tag */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-6 md:mb-8"
            >
                <span className="px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-teal-300 text-xs sm:text-sm md:text-base font-mono">
                    &lt; Software Engineer /&gt;
                </span>
            </motion.div>

            {/* Description */}
            <motion.div
            className="text-base sm:text-lg md:text-2xl max-w-3xl mx-auto mb-8 md:mb-10 text-slate-400 leading-relaxed flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span>Architecting intelligent systems with</span>
              <span className="relative flex justify-center sm:justify-start w-[140px] sm:w-[180px] h-[1.5em] overflow-hidden text-center sm:text-left mt-1 sm:mt-0">
                  <AnimatePresence mode="wait">
                      <motion.span
                          key={index}
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -20, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className={`absolute font-bold w-full ${words[index].color}`}
                      >
                          {words[index].text}
                      </motion.span>
                  </AnimatePresence>
              </span>
            </motion.div>

            {/* Buttons */}
            <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-10 md:mb-12 px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            >
            <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="group w-full sm:w-auto text-center relative px-8 py-3 bg-teal-500 text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(20,184,166,0.5)] cursor-pointer"
            >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative">Get in Touch</span>
            </Link>
            
            <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="w-full sm:w-auto text-center px-8 py-3 bg-transparent border border-slate-600 text-white font-medium rounded-full hover:border-teal-400 hover:text-teal-400 transition-all cursor-pointer"
            >
                View Projects
            </Link>
            </motion.div>

            {/* Social Icons */}
            <motion.div
            className="flex space-x-6 md:space-x-8 justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            >
            {[
                { Icon: Github, href: "https://github.com/dineshkannan010" },
                { Icon: Linkedin, href: "https://linkedin.com/in/dinesh012" },
                { Icon: Mail, href: "mailto:dineshkannan010@gmail.com" },
            ].map(({ Icon, href }, index) => (
                <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white hover:scale-125 transition-transform duration-300"
                >
                <Icon size={24} className="w-5 h-5 md:w-6 md:h-6" />
                </a>
            ))}
            </motion.div>
        </div>
      </div>

      {/* Scroll Down */}
      <motion.div 
        className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 text-slate-500"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown size={20} className="md:w-6 md:h-6" />
      </motion.div>
    </section>
  );
};

export default Hero;