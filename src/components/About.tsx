import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Users, Activity, Cpu } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-gray-50 dark:bg-dark-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="section-title mb-4 inline-block dark:text-white">About Me</h2>
          <p className="text-lg text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
            Master's student in Computer Science with a strong foundation in AI/ML, Cloud Computing, and Full Stack Development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-dark-900 dark:text-white">My Background</h3>
            <p className="mb-4 text-dark-700 dark:text-dark-300">
              Master's student in Computer Science at North Carolina State University with a strong foundation in AI/ML, Cloud Computing, and Full Stack Development. Currently working as a Software Developer building geospatial platforms that serve hundreds of students.
            </p>
            <p className="mb-4 text-dark-700 dark:text-dark-300">
              I've developed AI-powered teaching assistants serving 500+ students with 99.2% uptime, built scalable full-stack applications with React and Node.js, and optimized systems to achieve 75% improvements in page load times. My experience at Deloitte involved developing .NET plugins and analyzing massive datasets to drive strategic decisions.
            </p>
            <p className="text-dark-700 dark:text-dark-300">
              I'm passionate about building scalable, high-performance applications that make a real impact. My expertise spans full-stack development, cloud architecture on AWS, database optimization, and implementing AI/ML solutions with LLMs and RAG pipelines.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-dark-700 rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-6 text-dark-900 dark:text-white">What I Do</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full">
                      <Code className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-dark-900 dark:text-white">Full-Stack Development</h4>
                    <p className="text-dark-600 dark:text-dark-400 text-sm">Building end-to-end web applications</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full">
                      <Server className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-dark-900 dark:text-white">Cloud Architecture</h4>
                    <p className="text-dark-600 dark:text-dark-400 text-sm">Designing scalable cloud solutions</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full">
                      <Database className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-dark-900 dark:text-white">AI & Machine Learning</h4>
                    <p className="text-dark-600 dark:text-dark-400 text-sm">Developing intelligent solutions</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full">
                      <Users className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-dark-900 dark:text-white">Team Collaboration</h4>
                    <p className="text-dark-600 dark:text-dark-400 text-sm">Working effectively in teams</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;