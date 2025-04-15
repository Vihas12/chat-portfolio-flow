import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TypewriterProps {
  text: string[];
  delay?: number;
  infinite?: boolean;
  pauseDuration?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  delay = 100,
  infinite = true,
  pauseDuration = 1500,
}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isBlinking, setIsBlinking] = useState(true);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (isDone) return;
  
    let timeout: NodeJS.Timeout;
  
    const fullText = text[currentTextIndex];
  
    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(timeout);
    }
  
    if (!isDeleting && currentIndex <= fullText.length) {
      if (currentIndex === fullText.length) {
        setIsPaused(true);
        setIsBlinking(true);
      } else {
        timeout = setTimeout(() => {
          setCurrentText(fullText.substring(0, currentIndex + 1));
          setCurrentIndex(prev => prev + 1);
          setIsBlinking(false);
        }, delay);
      }
    } else if (isDeleting && currentIndex >= 0) {
      timeout = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentIndex - 1));
        setCurrentIndex(prev => prev - 1);
        setIsBlinking(false);
      }, delay / 2);
    } else if (isDeleting && currentIndex < 0) {
      setIsDeleting(false);
      const nextIndex = currentTextIndex + 1;
  
      const shouldLoop = infinite || nextIndex < text.length;
      if (shouldLoop) {
        setCurrentTextIndex(nextIndex % text.length);
        setCurrentIndex(0);
        setIsDone(false);
      } else {
        setCurrentTextIndex(0);
        setCurrentIndex(0);
        setIsDone(false);
      }
    }
  
    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, isPaused, isDone, text, currentTextIndex, delay, pauseDuration, infinite]);
  
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
        animate={{ opacity: isBlinking || isDone ? [1, 0, 1] : 1 }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-[3px] h-6 bg-portfolio-teal ml-1 align-middle"
      />
    </div>
  );
};

export default Typewriter;
