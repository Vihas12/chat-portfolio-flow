
import { motion } from "framer-motion";
import profile from "/src/assets/profile.png"; 
import { CheckCircle2 } from "lucide-react";
import React from "react";
const About = () => {
  const skills = [
    "JavaScript/TypeScript", 
    "React", 
    "Next.js", 
    "Node.js", 
    "CSS/Tailwind", 
    "HTML5",
    "MongoDB",
    "API Integration",
    "Firebase",
    "Python",
    "OpenAI API",
    "Machine Learning",
    "EasyOCR",
    "Git/GitHub",
    "Kinde Auth/OAuth",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="pt-28 pb-16 px-4">
      <div className="container mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          About Me
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6">
              <p className="text-lg text-portfolio-light">
              Hello! I'm Vihas, a web developer with a passion for creating beautiful, functional, and user-centered digital experiences. I enjoy transforming complex problems into simple, intuitive designs.
              </p>
              
              <p className="text-lg text-portfolio-light">
                I've had the opportunity to work on a wide range of projects.
                My approach combines technical expertise with creative problem-solving, and I'm particularly excited about integrating AI-enabled features to make digital experiences smarter and more efficient.
              </p>
              
              <p className="text-lg text-portfolio-light">
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open source projects, or enjoying outdoor activities
                to reset and refresh my creative thinking.
              </p>
            </div>
            
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-2xl font-bold mt-12 mb-6"
            >
              My Skills
            </motion.h2>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 gap-4"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  variants={childVariants}
                  className="flex items-center"
                >
                  <CheckCircle2 className="mr-2 dark:text-portfolio-teal" size={18} />
                  <span>{skill}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <div className="relative z-10 rounded-lg overflow-hidden border-2 dark:border-portfolio-teal">
              <div className="aspect-[4/5] bg-gray-700 w-full">
              <img
                src={profile}
                alt="Vihas Profile"
              />
              </div>
            </div>
            <div className="absolute -z-0 top-5 left-5 w-full h-full border-2 dark:border-portfolio-teal rounded-lg"></div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-20"
        >
          <h2 className="text-2xl font-bold mb-6">Experience & Education</h2>
          
          <div className="space-y-10">
            <div className="relative pl-8 border-l-2 border-portfolio-teal/30">
                <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-portfolio-teal"></div>
                <h3 className="text-xl font-medium">Bachelor of Engineering, Information Technology</h3>
                <p className="dark:text-portfolio-teal">University of Mumbai • 2022 - Present</p>
                <p className="mt-2 text-portfolio-light">
                  Currently pursuing a degree in Information Technology, focusing on web development and AI technologies. 
                </p>
              </div>

            <div className="relative pl-8 border-l-2 border-portfolio-teal/30">
              <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-portfolio-teal"></div>
              <h3 className="text-xl font-medium">Higher Secondary Certificate</h3>
              <p className="dark:text-portfolio-teal">St. Mary's Junior College • 2020 - 2022</p>
              <p className="mt-2 text-portfolio-light">
              </p>
            </div>
            
            <div className="relative pl-8 border-l-2 border-portfolio-teal/30">
              <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-portfolio-teal"></div>
              <h3 className="text-xl font-medium">Secondary School Certificate</h3>
              <p className="dark:text-portfolio-teal">Sai Holy Faith High School  • 2008 - 2020</p>
              <p className="mt-2 text-portfolio-light">
              </p>
            </div>
            
            
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
