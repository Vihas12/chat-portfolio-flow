
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code, LayoutGrid, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Typewriter from "@/components/Typewriter";

const Home = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const childVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const services = [
    {
      title: "Web Development",
      icon: Code,
      description: "Creating responsive and performant web applications with modern frameworks.",
    },
    {
      title: "UI/UX Design",
      icon: LayoutGrid,
      description: "Designing intuitive interfaces that provide excellent user experiences.",
    },
    {
      title: "Creative Solutions",
      icon: Sparkles,
      description: "Innovative approaches to solving complex problems with elegant solutions.",
    },
  ];

  return (
    <>
      <div ref={cursorRef} className="hidden lg:block fixed w-64 h-64 pointer-events-none z-0 opacity-10 rounded-full bg-portfolio-teal blur-3xl -translate-x-1/2 -translate-y-1/2" />
      
      {/* Hero Section */}
      <section className="min-h-screen relative flex flex-col justify-center pt-20 pb-16 px-4">
        <div className="container mx-auto relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.p
              variants={childVariants}
              className="text-portfolio-teal mb-4 font-mono"
            >
              Hi, my name is
            </motion.p>
            <motion.h1
              variants={childVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-portfolio-blue dark:text-portfolio-lightest transition-colors duration-300"
            >
              John Doe.
            </motion.h1>
            <motion.h2
              variants={childVariants}
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-portfolio-light mt-2"
            >
              I <Typewriter text={["build things for the web.", "design beautiful interfaces.", "solve complex problems.", "create digital experiences."]} />
            </motion.h2>
            <motion.p
              variants={childVariants}
              className="text-portfolio-light mt-6 max-w-xl text-lg"
            >
              I'm a web developer specializing in building exceptional digital experiences.
              Currently, I'm focused on building accessible, human-centered products.
            </motion.p>
            <motion.div variants={childVariants} className="mt-10">
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary flex items-center"
                >
                  View My Work
                  <ArrowRight className="ml-2" size={16} />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-portfolio-navy/50 transition-colors duration-300">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="section-heading text-center"
          >
            What I Do
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-portfolio-navy p-6 rounded-lg border border-gray-100 dark:border-portfolio-teal/10 hover:border-gray-200 dark:hover:border-portfolio-teal/30 transition-all shadow-sm"
              >
                <div className="h-12 w-12 bg-portfolio-teal/10 flex items-center justify-center rounded-lg mb-4">
                  <service.icon className="text-portfolio-teal" size={24} />
                </div>
                <h3 className="text-xl font-medium text-portfolio-blue dark:text-portfolio-lightest transition-colors duration-300 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-portfolio-light transition-colors duration-300">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-white dark:bg-portfolio-blue transition-colors duration-300">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-portfolio-blue dark:text-portfolio-lightest transition-colors duration-300">Interested in working together?</h2>
            <p className="text-gray-600 dark:text-portfolio-light transition-colors duration-300 text-lg mb-10">
              I'm always open to discussing product design work or partnership opportunities.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8 py-4"
              >
                Get In Touch
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
