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
    title: "Research Assistant",
    company: "North Carolina State University",
    location: "Raleigh, NC, USA",
    date: "July 2024 - April 2025",
    description: [
      "Developed an AI-powered Teaching Assistant chatbot utilizing OpenAI and RAG, automating responses and enhancing student engagement",
      "Implemented a human-in-the-loop learning pipeline integrated with course materials",
      "Built a responsive full-stack application with React, Flask, and MongoDB",
      "Improved chatbot accuracy by 30% through optimized query caching and embedded academic content"
    ],
    technologies: ["OpenAI", "RAG", "React", "Flask", "MongoDB", "JWT", "Python"]
  },
  {
    id: 2,
    title: "Software Engineering Fellow",
    company: "Headstarter AI",
    location: "Remote, USA",
    date: "July 2024 - September 2024",
    description: [
      "Built core components of a SaaS app using Next.js and OpenAI API",
      "Developed SaaS flashcard app with OAuth2-based login and Stripe integration",
      "Automated CI/CD workflows via GitHub Actions and Vercel",
      "Reduced deployment time by 25% through streamlined build and testing processes"
    ],
    technologies: ["Next.js", "OpenAI API", "OAuth2", "Stripe", "GitHub Actions", "Vercel"]
  },
  {
    id: 3,
    title: "Consulting Analyst",
    company: "Deloitte",
    location: "Mumbai, India",
    date: "January 2023 - July 2023",
    description: [
      "Engineered JavaScript web API scripts for Dynamics CRM, improving data retrieval speeds by 40%",
      "Automated workflows using Power BI and JavaScript, achieving 35% efficiency improvement",
      "Contributed to Agile sprints, reducing feature delivery timelines by 27%",
      "Implemented hybrid MySQL + MongoDB schema to support real-time analytics"
    ],
    technologies: ["JavaScript", "Dynamics CRM", "Power BI", "MySQL", "MongoDB", "Agile"]
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
              className="relative"
            >
              <div className="absolute -left-12 mt-1.5 h-8 w-8 rounded-full bg-primary-500 dark:bg-primary-700 flex items-center justify-center">
                <Briefcase className="h-4 w-4 text-white" />
              </div>
              
              <div className="card p-6 dark:bg-dark-800 hover:shadow-primary-100/20 dark:hover:shadow-primary-900/20">
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