
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  const skills = [
    "JavaScript/TypeScript", 
    "React", 
    "Next.js", 
    "Node.js", 
    "CSS/Tailwind", 
    "UI/UX Design", 
    "Framer Motion",
    "API Integration",
    "GraphQL",
    "Responsive Design"
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
                Hello! I'm John, a web developer with a passion for creating beautiful,
                functional, and user-centered digital experiences. I enjoy 
                transforming complex problems into simple, intuitive designs.
              </p>
              
              <p className="text-lg text-portfolio-light">
                With over 5 years of experience in the field, I've had the opportunity
                to work with a diverse range of clients from startups to large corporations.
                My approach combines technical expertise with creative problem-solving.
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
                  <CheckCircle2 className="mr-2 text-portfolio-teal" size={18} />
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
            <div className="relative z-10 rounded-lg overflow-hidden border-2 border-portfolio-teal">
              <div className="aspect-[4/5] bg-gray-700 w-full">
                {/* Placeholder for profile image */}
                <div className="w-full h-full flex items-center justify-center bg-portfolio-navy">
                  <span className="text-portfolio-teal text-lg">Profile Image</span>
                </div>
              </div>
            </div>
            <div className="absolute -z-0 top-5 left-5 w-full h-full border-2 border-portfolio-teal rounded-lg"></div>
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
              <h3 className="text-xl font-medium">Senior Web Developer</h3>
              <p className="text-portfolio-teal">TechCorp Inc. • 2020 - Present</p>
              <p className="mt-2 text-portfolio-light">
                Lead developer for enterprise client projects, managing a team of 5 developers.
                Implemented modern CI/CD practices and improved site performance by 40%.
              </p>
            </div>
            
            <div className="relative pl-8 border-l-2 border-portfolio-teal/30">
              <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-portfolio-teal"></div>
              <h3 className="text-xl font-medium">Front-end Developer</h3>
              <p className="text-portfolio-teal">Digital Agency • 2018 - 2020</p>
              <p className="mt-2 text-portfolio-light">
                Developed responsive websites and applications for various clients.
                Specialized in animation and interactive user experiences.
              </p>
            </div>
            
            <div className="relative pl-8 border-l-2 border-portfolio-teal/30">
              <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-portfolio-teal"></div>
              <h3 className="text-xl font-medium">Bachelor's Degree, Computer Science</h3>
              <p className="text-portfolio-teal">University of Technology • 2014 - 2018</p>
              <p className="mt-2 text-portfolio-light">
                Focused on web technologies and human-computer interaction.
                Graduated with honors.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
