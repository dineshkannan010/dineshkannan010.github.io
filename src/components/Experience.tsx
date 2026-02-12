import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  date: string;
  description: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    title: "Software Developer",
    company: "North Carolina State University",
    location: "Raleigh, NC, USA",
    date: "August 2025 - Present",
    description: [
      "Built full-stack geospatial platform with React, Node.js, PostgreSQL serving 100+ students, implementing a custom Timeline Builder with before/after image comparison sliders that increased student research engagement by 35%",
      "Implemented RBAC authentication system with JWT and role-based workflows, reducing instructor approval time by 40%",
      "Reduced page load times by 75% (3.2s → 0.8s) as measured across 100+ student sessions, by migrating media infrastructure to Cloudinary CDN and offloading 60% of database storage operations",
      "Designed automated draft-to-publish pipeline handling 100+ timeline submissions in a semester with 99% accuracy"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "JWT", "Cloudinary", "RBAC", "TypeScript"]
  },
  {
    id: 2,
    title: "Research Assistant",
    company: "North Carolina State University",
    location: "Raleigh, NC, USA",
    date: "July 2024 - April 2025",
    description: [
      "Developed AI teaching assistant serving 500+ students with 99.2% uptime and 1.2s avg response time using React, Flask, MongoDB and AWS",
      "Built RESTful API with FastAPI handling 10,000+ monthly queries, implementing JWT auth and performance optimization strategies including database indexing and query caching for sub-second response times",
      "Engineered RAG-based chatbot using OpenAI, LangChain, improving accessibility by 35% through context-aware responses",
      "Automated CI/CD pipeline with GitHub Actions, reducing deployment time by 40% and eliminating manual release errors",
      "Integrated AWS Cloud Storage for scalable media management, handling 50GB+ of course materials with 99.9% availability",
      "Designed database schema optimization strategy reducing query latency by 55% through indexing and query restructuring"
    ],
    technologies: ["React", "Flask", "FastAPI", "MongoDB", "AWS", "OpenAI", "LangChain", "RAG", "GitHub Actions", "JWT"]
  },
  {
    id: 3,
    title: "Consulting Analyst",
    company: "Deloitte",
    location: "Mumbai, India",
    date: "January 2023 - July 2023",
    description: [
      "Developed .NET plugins for Dynamics 365, reducing query response time by 40% (8s → 4.8s) for 10,000+ record datasets",
      "Accelerated feature delivery by 20% by leading daily stand-ups and refining backlog grooming, successfully shipping 10 core features across 6 sprints with zero post-deployment defects",
      "Identified critical vegetation growth patterns by analyzing 50GB+ of datasets using Python & SQL, directly influencing client resource allocation strategy and reducing projected maintenance costs by 15%",
      "Built custom business automation workflows with Power Automate and Azure Data Factory, streamlining cross-system data processing for 5 client projects and reducing manual effort by 50 hours/month"
    ],
    technologies: [".NET", "Dynamics 365", "Python", "SQL", "Power Automate", "Azure Data Factory", "Agile"]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section dark:bg-dark-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="section-title mb-4 inline-block dark:text-white">Professional Experience</h2>
          <p className="text-lg text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
            My journey in technology, where I've contributed to innovative projects and grown as a software engineer.
          </p>
        </motion.div>

        <div className="relative border-l-4 border-primary-500 dark:border-primary-700 pl-8 ml-4 md:ml-8 space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute -left-12 mt-1.5 h-8 w-8 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 dark:from-primary-600 dark:to-primary-700 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="h-4 w-4 text-white" />
              </div>

              <div className="card p-6 dark:bg-dark-800 hover:shadow-xl hover:shadow-primary-100/30 dark:hover:shadow-primary-900/30 transition-all duration-300 border-l-4 border-transparent hover:border-primary-500 dark:hover:border-primary-600">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-dark-900 dark:text-white">
                      {experience.title}
                    </h3>
                    <div className="text-lg text-primary-600 dark:text-primary-400">
                      {experience.company}
                    </div>
                    <div className="text-dark-500 dark:text-dark-400 text-sm">
                      {experience.location}
                    </div>
                  </div>
                  <div className="flex items-center mt-2 md:mt-0 text-dark-500 dark:text-dark-400">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{experience.date}</span>
                  </div>
                </div>
                
                <ul className="mb-4 space-y-2">
                  {experience.description.map((item, i) => (
                    <li key={i} className="text-dark-700 dark:text-dark-300 flex items-start">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary-500 dark:bg-primary-400 mt-2 mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;