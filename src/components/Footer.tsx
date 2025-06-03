import React from 'react';
import { Link } from 'react-scroll';
import { ChevronUp, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-2xl font-bold text-primary-500 cursor-pointer"
            >
              Dinesh Kannan
            </Link>
            <p className="mt-2 text-dark-400 max-w-md">
              Software Engineer specializing in AI/ML, Cloud Computing, and Full Stack Development.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="p-3 bg-dark-800 hover:bg-dark-700 rounded-full text-white transition-colors mb-4 cursor-pointer"
              aria-label="Back to top"
            >
              <ChevronUp size={24} />
            </Link>
            <p className="text-dark-400 text-sm">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
        
        <div className="border-t border-dark-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-dark-400 text-sm mb-4 md:mb-0">
            © {currentYear} Dinesh Kannan. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a 
              href="#" 
              className="text-dark-400 hover:text-primary-500 transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-dark-400 hover:text-primary-500 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;