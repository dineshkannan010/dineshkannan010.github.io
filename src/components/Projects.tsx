import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronRight, X } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  liveDemo?: string;
  details: string;
}

const projects: Project[] = [
  {
    id: "ellipsis",
    title: "Ellipsis — Podcast Generation Platform",
    description: "A fully automated, AI-driven podcast generation agent capable of producing human-like, high-quality podcasts.",
    image: "https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg",
    technologies: ["Python", "Flask", "React", "Redis", "Orpheus TTS", "Perplexity API"],
    github: "https://github.com/username/ellipsis",
    details: "Developed a fully automated podcast generation platform using AI. Features include intelligent multi-speaker dialogue generation, automated content research, and high-quality text-to-speech synthesis."
  },
  {
    id: "burnout-extreme",
    title: "BurnoutExtreme",
    description: "An integrated fitness platform with AI-powered workout plans and diet tracking.",
    image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg",
    technologies: ["Flask", "React.js", "MongoDB", "Google Maps API", "Chart.js"],
    github: "https://github.com/username/burnout-extreme",
    liveDemo: "https://burnout-extreme.com",
    details: "Built an integrated fitness platform with modular components for diet tracking, real-time step monitoring, and AI-generated workout plans. Implemented an AI chatbot for personalized recommendations and integrated Google Maps API for local fitness events."
  },
  {
    id: "thermal-modeling",
    title: "Sample Efficient Rapid Thermal Modeling of 3D IC",
    description: "A conditional diffusion model for predicting high-resolution thermal maps from power maps.",
    image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg",
    technologies: ["PyTorch", "Diffusion Models", "Python", "Neural Networks"],
    github: "https://github.com/username/thermal-modeling",
    details: "Developed a conditional diffusion model achieving 56% performance improvement over traditional GAN models. Optimized for intricate thermal distributions and diverse 3D IC stack layouts."
  },
  {
    id: "mlops-pipeline",
    title: "End-to-End MLOps Pipeline for Generative AI",
    description: "A scalable MLOps pipeline supporting GPT-4 forks with automated testing and deployment.",
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg",
    technologies: ["PyTorch", "AWS SageMaker", "Docker", "Apache Airflow", "GitHub Actions"],
    github: "https://github.com/username/mlops-pipeline",
    details: "Architected a comprehensive MLOps pipeline using PyTorch and AWS SageMaker. Implemented continuous red teaming tests and automated orchestration via Apache Airflow."
  }
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="section dark:bg-dark-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="section-title mb-4 inline-block dark:text-white">Featured Projects</h2>
          <p className="text-lg text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
            A showcase of my recent work, highlighting my skills and areas of expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card overflow-hidden dark:bg-dark-800 h-full flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-dark-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-dark-600 dark:text-dark-400 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap mb-4">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span 
                      key={i} 
                      className="m-1 px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="m-1 px-2 py-1 bg-gray-100 dark:bg-dark-700 text-dark-500 dark:text-dark-400 text-xs rounded-full">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => openModal(project)}
                    className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors flex items-center"
                  >
                    View Details <ChevronRight size={16} className="ml-1" />
                  </button>
                  <div className="flex space-x-3">
                    {project.github && (
                      <a 
                         
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-dark-600 hover:text-primary-600 dark:text-dark-400 dark:hover:text-primary-400 transition-colors"
                        aria-label="GitHub repository"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.liveDemo && (
                      <a 
                        href={project.liveDemo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-dark-600 hover:text-primary-600 dark:text-dark-400 dark:hover:text-primary-400 transition-colors"
                        aria-label="Live demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {modalOpen && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-dark-800 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="relative">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-64 object-cover"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-dark-900 bg-opacity-70 text-white rounded-full p-2 hover:bg-opacity-100 transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-dark-900 dark:text-white">
                {selectedProject.title}
              </h3>
              <p className="text-dark-600 dark:text-dark-300 mb-6">
                {selectedProject.details}
              </p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2 text-dark-900 dark:text-white">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap">
                  {selectedProject.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="m-1 px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex space-x-4">
                {selectedProject.github && (
                  <a 
                    href={selectedProject.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline flex items-center"
                  >
                    <Github size={18} className="mr-2" /> View Code
                  </a>
                )}
                {selectedProject.liveDemo && (
                  <a 
                    href={selectedProject.liveDemo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary flex items-center"
                  >
                    <ExternalLink size={18} className="mr-2" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Projects;