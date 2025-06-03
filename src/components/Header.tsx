import React from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Moon, Sun, Download } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({
  isDarkMode,
  toggleDarkMode,
  mobileMenuOpen,
  toggleMobileMenu,
  closeMobileMenu,
}) => {
  const navLinks = [
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-colors duration-300 ${isDarkMode ? 'bg-dark-900/95 text-white' : 'bg-white/95 text-dark-900'} shadow-sm backdrop-blur-sm`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          <div className="flex-shrink-0">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer"
            >
              <span className="text-xl font-bold text-primary-600">Dinesh Kannan</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="active"
                className="nav-link cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              className="ml-4 btn btn-outline flex items-center"
              download
            >
              <Download size={18} className="mr-2" /> Resume
            </a>
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ml-2 transition-colors ${
                isDarkMode ? 'hover:bg-dark-800' : 'hover:bg-gray-100'
              }`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full mr-2 transition-colors ${
                isDarkMode ? 'hover:bg-dark-800' : 'hover:bg-gray-100'
              }`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={toggleMobileMenu}
              className={`p-2 rounded-md transition-colors ${
                isDarkMode ? 'hover:bg-dark-800' : 'hover:bg-gray-100'
              }`}
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className={`md:hidden ${isDarkMode ? 'bg-dark-900' : 'bg-white'} border-t ${isDarkMode ? 'border-dark-700' : 'border-gray-200'}`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="active"
                className="block py-2 px-3 rounded-md nav-link"
                onClick={closeMobileMenu}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              className="block py-2 px-3 text-primary-600 font-medium flex items-center"
              download
              onClick={closeMobileMenu}
            >
              <Download size={18} className="mr-2" /> Download Resume
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;