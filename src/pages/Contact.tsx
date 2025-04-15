
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, MessageSquare, Send, Phone } from "lucide-react";
import { z } from "zod";
import { useToast } from "@/components/ui/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing again
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Validate form data
      contactFormSchema.parse(formData);
      setErrors({});
      setIsSubmitting(true);
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          const field = err.path[0] as keyof ContactFormData;
          fieldErrors[field] = err.message;
        });
        setErrors(fieldErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
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
          Contact Me
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-portfolio-light text-lg max-w-2xl mb-12"
        >
          Have a question or want to work together? Feel free to reach out!
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-black/10 dark:bg-portfolio-teal/10 p-3 rounded-lg mr-4">
                  <Mail className="dark:text-portfolio-teal" size={24} />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-portfolio-light">vihas.poojari45@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-black/10 dark:bg-portfolio-teal/10 p-3 rounded-lg mr-4">
                  <Phone className="dark:text-portfolio-teal" size={24} />
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-portfolio-light">+91 810877349</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-black/10 dark:bg-portfolio-teal/10 p-3 rounded-lg mr-4">
                  <MapPin className="dark:text-portfolio-teal" size={24} />
                </div>
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-portfolio-light">Navi Mumbai, Maharashtra</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-xl font-medium mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Vihas12"
                  className="bg-portfolio-navy p-3 rounded-lg hover:bg-black/50 dark:hover:bg-portfolio-teal/10 transition-colors"
                >
                  <svg className="w-5 h-5 text-white dark:text-portfolio-teal" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&to=vihas.poojari45@gmail.com"
                  className="bg-portfolio-navy p-3 rounded-lg  hover:bg-black/50 dark:hover:bg-portfolio-teal/10 transition-colors"
                >
                  <svg className="w-5 h-5 text-white dark:text-portfolio-teal" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <Mail className="dark:text-portfolio-teal" size={24} />
                  </svg>
                  
                </a>
                {/* <a
                  href="#"
                  className="bg-portfolio-navy p-3 rounded-lg  hover:bg-black/50 dark:hover:bg-portfolio-teal/10 transition-colors"
                >
                  <svg className="w-5 h-5 text-white dark:text-portfolio-teal" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a> */}
                <a
                  href="https://www.linkedin.com/in/vihas-poojari/"
                  className="bg-portfolio-navy p-3 rounded-lg  hover:bg-black/50 dark:hover:bg-portfolio-teal/10 transition-colors"
                >
                  <svg className="w-5 h-5 text-white dark:text-portfolio-teal" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-portfolio-navy p-6 rounded-lg shadow-lg border border-portfolio-teal/10">
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <MessageSquare className="mr-2 text-portfolio-teal" size={20} />
                Send Me a Message
              </h2>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`bg-portfolio-blue border ${
                      errors.name ? "border-red-500" : "border-portfolio-teal/30"
                    } text-portfolio-lightest rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-portfolio-teal/50`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`bg-portfolio-blue border ${
                      errors.email ? "border-red-500" : "border-portfolio-teal/30"
                    } text-portfolio-lightest rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-portfolio-teal/50`}
                    placeholder="name@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`bg-portfolio-blue border ${
                      errors.subject ? "border-red-500" : "border-portfolio-teal/30"
                    } text-portfolio-lightest rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-portfolio-teal/50`}
                    placeholder="How can I help you?"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                  )}
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`bg-portfolio-blue border ${
                      errors.message ? "border-red-500" : "border-portfolio-teal/30"
                    } text-portfolio-lightest rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-portfolio-teal/50`}
                    placeholder="Your message here..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center btn-primary py-3 relative"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} className="ml-2" />
                    </>
                  )}
                </button>
              </form> 
            </div>
          </motion.div> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
