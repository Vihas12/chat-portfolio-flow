
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Globe, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  category: "web" | "machine-learning" ;
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<"all" | "web" | "machine-learning">("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "Smart Address Completer",
      description: "A tool that predicts and fills incomplete addresses using machine learning.",
      technologies: ["Next.js", "MongoDB", "Python", "Scikit-learn", "EasyOCR"],
      imageUrl: "https://res.cloudinary.com/dkl2kdu7e/image/upload/v1744737802/Screenshot_2025-04-15_225306_c6gx53.png", // Placeholder
      githubUrl: "https://github.com/Vihas12/Address_Correction-using-AI",
      liveUrl: "#",
      featured: true,
      category: "web",
    },
    {
      id: 2,
      title: "Blogging Website with Abusive Language Detection",
      description: "A blogging platform with integrated AI moderation that detects and filters abusive language from user comments in real-time.",
      technologies: ["PHP Laravel", "Flask", "Machine Learning", "Sklearn", "SQL"],
      imageUrl: "https://res.cloudinary.com/dkl2kdu7e/image/upload/v1744740283/Screenshot_2025-04-15_233420_gomlcz.png",
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
      category: "web",
    },
    {
      id: 3,
      title: "Smart Student ID Generator",
      description: "A React app that generates student ID cards with editable details, template switching, and persistent storage.",
      technologies:  ["React", "TypeScript", "Tailwind CSS"],
      imageUrl: "https://res.cloudinary.com/dkl2kdu7e/image/upload/v1744737567/Screenshot_2025-04-15_224856_bn6ydd.png", // Placeholder
      githubUrl: "https://github.com/Vihas12/card-gen-genius",
      liveUrl: "https://card-gen-genius.lovable.app/",
      featured: true,
      category: "web",
    },
    {
      id: 4,
      title: "Doctor Availability Finder",
      description: "An ML-powered app to predict and rank doctors based on login times, region, specialty, and historical activity, helping optimize survey reach.",
      technologies: ["Next.js", "Python", "Pandas", "Gradio", "Scikit-learn", "Hugging Face"],
      imageUrl: "https://res.cloudinary.com/dkl2kdu7e/image/upload/v1744737108/Screenshot_2025-04-15_220653_velq4u.png",
      githubUrl: "https://github.com/Vihas12/doctor_filter_ML",
      liveUrl: "https://interaspace.vercel.app/",
      featured: true,
      category: "machine-learning",
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A professional portfolio website with animations and interactive elements.",
      technologies: ["React", "Framer Motion", "Tailwind CSS"],
      imageUrl: "", // Placeholder
      githubUrl: "https://github.com/Vihas12/chat-portfolio-flow",
      liveUrl: "https://vihasportfolio.vercel.app/",
      featured: true,
      category: "web",
    },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
          Projects
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-portfolio-light text-lg max-w-2xl mb-12"
        >
          A selection of my recent work, side projects, and open source contributions.
          Each project is a unique piece with its own challenges and solutions.
        </motion.p>

        <div className="flex flex-wrap gap-4 mb-10">
          <Button
            onClick={() => setActiveFilter("all")}
            variant={activeFilter === "all" ? "default" : "outline"}
            className={activeFilter === "all" ? "dark:bg-portfolio-teal dark:text-portfolio-blue bg-black text-white hover:bg-black hover:text-white" : "dark:border-portfolio-teal/30 dark:text-portfolio-light dark:bg-portfolio-blue text-black bg-white border-black hover:bg-black hover:text-white transition-colors duration-300"}
          >
            All Projects
          </Button>
          <Button
            onClick={() => setActiveFilter("web")}
            variant={activeFilter === "web" ? "default" : "outline"}
            className={activeFilter === "web" ? "dark:bg-portfolio-teal dark:text-portfolio-blue bg-black text-white hover:bg-black hover:text-white" : "dark:border-portfolio-teal/30 dark:text-portfolio-light dark:bg-portfolio-blue text-black bg-white border-black hover:bg-black hover:text-white transition-colors duration-300"}
          >
            Web
          </Button>
          <Button
            onClick={() => setActiveFilter("machine-learning")}
            variant={activeFilter === "machine-learning" ? "default" : "outline"}
            className={activeFilter === "machine-learning" ? "dark:bg-portfolio-teal dark:text-portfolio-blue bg-black text-white hover:bg-black hover:text-white" : "dark:border-portfolio-teal/30 dark:text-portfolio-light dark:bg-portfolio-blue text-black bg-white border-black hover:bg-black hover:text-white transition-colors duration-300"}
          >
            Machine Learning
          </Button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className={`project-card ${project.featured ? "md:col-span-2" : ""}`}
                >
                  {project.featured && (
                    <div className="flex items-center mb-3 dark:text-portfolio-teal">
                      <Star size={16} className="mr-1" />
                      <span className="text-sm">Featured Project</span>
                    </div>
                  )}
                  {project.imageUrl && (
                    <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="rounded-lg mb-4 object-cover h-48 w-full"
                    style={{ objectFit: "cover" }}
                  />
                  )}
                  
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-portfolio-light mb-4">{project.description}</p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded bg-black/10 dark:bg-portfolio-teal/10 dark:text-portfolio-teal"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-3 mt-auto">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-portfolio-light hover:text-black dark:hover:text-portfolio-teal"
                    >
                      <Github size={20} />
                    </a>
                    {project.liveUrl != "#" && (
                      <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-portfolio-light hover:text-black dark:hover:text-portfolio-teal"
                    >
                      <ExternalLink size={20} />
                    </a>
                    )}
             
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-portfolio-light mb-6">
            Interested in seeing more of my work?
          </p>
          <a
            href="https://github.com/Vihas12"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center btn-primary text-black bg-white border-black hover:bg-black hover:text-white transition-colors duration-300 dark:btn-primary"
          >
            <Github size={18} className="mr-2" />
            View GitHub Profile
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
