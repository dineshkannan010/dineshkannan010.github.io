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
    title: 'Programming Languages',
    icon: <Code2 className="h-6 w-6 text-primary-600 dark:text-primary-400" />,
    skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'Ruby', 'SQL', 'HTML', 'CSS']
  },
  {
    id: 'frontend',
    title: 'Frontend Technologies',
    icon: <Globe className="h-6 w-6 text-primary-600 dark:text-primary-400" />,
    skills: ['React', 'Node.js', 'Next.js', 'Flask', 'Ruby on Rails', 'REST APIs', 'Tailwind CSS', 'Material UI']
  },
  {
    id: 'backend',
    title: 'AI & Machine Learning',
    icon: <Server className="h-6 w-6 text-primary-600 dark:text-primary-400" />,
    skills: ['PyTorch', 'TensorFlow', 'RAG Pipelines', 'OpenAI API', 'Scikit-learn', 'CNNs', 'GANs', 'Transformers']
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: <Database className="h-6 w-6 text-primary-600 dark:text-primary-400" />,
    skills: ['MySQL', 'NoSQL', 'MongoDB', 'Firebase', 'Redis', 'PostgreSQL', 'Elasticsearch']
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    icon: <Cloud className="h-6 w-6 text-primary-600 dark:text-primary-400" />,
    skills: ['AWS Cloud', 'Google Cloud', 'Docker', 'CI/CD', 'Heroku', 'Vercel', 'GitHub Actions']
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    icon: <Command className="h-6 w-6 text-primary-600 dark:text-primary-400" />,
    skills: ['Git', 'Jira', 'Postman', 'Power BI', 'Anaconda', 'Stripe', 'Linux']
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card p-6 dark:bg-dark-700 hover:shadow-primary-100/20 dark:hover:shadow-primary-900/20"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full mr-4">
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