import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Database, Server, Cloud, Command } from 'lucide-react';

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages & Frameworks',
    icon: <Code2 className="h-6 w-6 text-primary-600 dark:text-primary-400" />,
    skills: ['Python', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'Flask', 'FastAPI', 'HTML/CSS', '.NET']
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    icon: <Cloud className="h-6 w-6 text-primary-600 dark:text-primary-400" />,
    skills: ['AWS Lambda', 'AWS S3', 'AWS EC2', 'Google Cloud Platform', 'Docker', 'CI/CD', 'GitHub Actions', 'Distributed Systems', 'Kubernetes']
  },
  {
    id: 'databases',
    title: 'Databases & Tools',
    icon: <Database className="h-6 w-6 text-primary-600 dark:text-primary-400" />,
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Git', 'Agile/Scrum', 'Jest/Pytest', 'Postman']
  },
  {
    id: 'ai',
    title: 'AI & Machine Learning',
    icon: <Server className="h-6 w-6 text-primary-600 dark:text-primary-400" />,
    skills: ['LLMs', 'Agentic AI', 'PyTorch', 'RAG', 'CNNs', 'LangChain', 'Transformers', 'Pandas', 'Scikit-learn']
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills\" className="section bg-gray-50 dark:bg-dark-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="section-title mb-4 inline-block dark:text-white">Technical Skills</h2>
          <p className="text-lg text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
            The technologies, tools, and methodologies I've mastered throughout my career as a software engineer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card p-6 dark:bg-dark-700 hover:shadow-xl hover:shadow-primary-100/30 dark:hover:shadow-primary-900/30 transition-all duration-300 group border border-transparent hover:border-primary-500/30 dark:hover:border-primary-600/30"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-dark-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="m-1 px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-dark-600 dark:text-dark-300 italic">
            Always learning and expanding my skill set with emerging technologies and best practices.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;