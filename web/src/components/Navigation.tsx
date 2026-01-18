import { motion } from 'framer-motion';
import { Moon, Sun, Github, Code2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl"
    >
      <div className="px-6 py-4 border shadow-2xl bg-white/10 dark:bg-black/20 backdrop-blur-xl border-white/20 dark:border-white/10 rounded-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code2 className="w-8 h-8 text-jano-red" strokeWidth={2.5} />
            <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-jano-red to-red-600 bg-clip-text">
              Jano Fidel
            </span>
          </div>

          <div className="items-center hidden gap-8 md:flex">
            <a
              href="#docs"
              className="font-medium text-gray-800 transition-colors dark:text-gray-200 hover:text-jano-red dark:hover:text-jano-red"
            >
              Docs
            </a>
            <a
              href="#playground"
              className="font-medium text-gray-800 transition-colors dark:text-gray-200 hover:text-jano-red dark:hover:text-jano-red"
            >
              Playground
            </a>
            <a
              href="#dictionary"
              className="font-medium text-gray-800 transition-colors dark:text-gray-200 hover:text-jano-red dark:hover:text-jano-red"
            >
              Dictionary
            </a>
          </div>

          <div className="flex items-center gap-3">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-white transition-all bg-gray-900 border border-gray-700 rounded-lg dark:bg-white/10 dark:text-gray-200 hover:bg-gray-800 dark:hover:bg-white/20 dark:border-white/20"
            >
              <Github className="w-4 h-4" />
              <span className="hidden sm:inline">Star</span>
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 transition-all border border-gray-300 rounded-lg bg-gray-200/50 dark:bg-white/10 hover:bg-gray-300/50 dark:hover:bg-white/20 dark:border-white/20"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
