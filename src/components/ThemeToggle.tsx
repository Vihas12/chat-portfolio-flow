
import { useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "./ThemeProvider"
import { motion } from "framer-motion"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.button
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-portfolio-teal transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isHovered ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === "dark" ? (
          <Sun className="h-5 w-5 text-portfolio-teal" />
        ) : (
          <Moon className="h-5 w-5 text-portfolio-teal" />
        )}
      </motion.div>
    </motion.button>
  )
}
