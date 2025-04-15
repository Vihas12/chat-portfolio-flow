
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TypewriterProps {
  text: string[];
  delay?: number;
  infinite?: boolean;
}

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  delay = 100,
  infinite = true,
}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isBlinking, setIsBlinking] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (currentTextIndex < text.length) {
      if (!isDeleting && currentIndex <= text[currentTextIndex].length) {
        timeout = setTimeout(() => {
          setCurrentText(text[currentTextIndex].substring(0, currentIndex));
          setCurrentIndex(currentIndex + 1);
          setIsBlinking(false);
        }, delay);
      } else if (isDeleting && currentIndex >= 0) {
        timeout = setTimeout(() => {
          setCurrentText(text[currentTextIndex].substring(0, currentIndex));
          setCurrentIndex(currentIndex - 1);
          setIsBlinking(false);
        }, delay / 2);
      } else if (currentIndex >= text[currentTextIndex].length && !isDeleting) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
          setIsBlinking(true);
        }, 1500);
      } else if (currentIndex === 0 && isDeleting) {
        setIsDeleting(false);
        setCurrentTextIndex((prevIndex) => 
          infinite ? (prevIndex + 1) % text.length : Math.min(prevIndex + 1, text.length - 1)
        );
      }
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, currentTextIndex, delay, infinite, isDeleting, text]);

  return (
    <div className="inline-block">
      <motion.span 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="inline-block"
      >
        {currentText}
      </motion.span>
      <motion.span
        animate={{ opacity: isBlinking ? [1, 0, 1] : 1 }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-[3px] h-6 bg-portfolio-teal ml-1 align-middle"
      />
    </div>
  );
};

export default Typewriter;
