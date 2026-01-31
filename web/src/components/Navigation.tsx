import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Code2, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import GitHubStarButton from './GitHubStarButton';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [version, setVersion] = useState('1.0.0');

  useEffect(() => {
    fetch('https://api.github.com/repos/EyuReaper/jano-fidel/tags')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0 && data[0].name) {
          setVersion(data[0].name);
        }
      })
      .catch((err) => console.error('Failed to fetch version', err));
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  const navVariants = prefersReducedMotion
    ? {}
    : {
        initial: { y: -100, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.6, ease: 'easeOut' },
      };

  const mobileMenuVariants = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, height: 0 },
        animate: { opacity: 1, height: 'auto' },
        exit: { opacity: 0, height: 0 },
        transition: { duration: 0.4, ease: 'easeInOut' },
      };

  return (
    <motion.nav
      {...navVariants}
      className="fixed z-50 max-w-6xl mx-auto pointer-events-none top-3 sm:top-4 left-4 right-4 md:left-6 md:right-6 lg:left-8 lg:right-8"
    >
      <div className="px-4 py-3 border shadow-xl pointer-events-auto sm:px-5 sm:py-4 bg-white/10 dark:bg-black/20 backdrop-blur-xl border-white/20 dark:border-white/10 rounded-xl sm:rounded-2xl">
        <div className="flex items-center justify-between">
          {/* Logo + version */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <Code2 className="w-7 h-7 sm:w-8 sm:h-8 text-jano-red" strokeWidth={2.5} />
            <div className="flex flex-col">
              <span className="text-xl font-bold leading-none text-transparent sm:text-2xl bg-gradient-to-r from-jano-red to-red-600 bg-clip-text">
                {t('navigation.title')}
              </span>
              <span className="hidden xs:inline text-[9px] sm:text-[10px] font-mono text-green-500 dark:text-green-400 mt-0.5 flex items-center gap-1.5">
                {t('navigation.version', { version })}
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              </span>
            </div>
          </div>

          {/* Desktop menu */}
          <div className="items-center hidden gap-6 md:flex lg:gap-8">
            <a
              href="/docs"
              className="font-medium text-gray-800 transition-colors dark:text-gray-200 hover:text-jano-red dark:hover:text-jano-red whitespace-nowrap"
            >
              {t('navigation.docs')}
            </a>
            <a
              href="#playground"
              className="font-medium text-gray-800 transition-colors dark:text-gray-200 hover:text-jano-red dark:hover:text-jano-red whitespace-nowrap"
            >
              {t('navigation.playground')}
            </a>
            <a
              href="#contributors"
              className="font-medium text-gray-800 transition-colors dark:text-gray-200 hover:text-jano-red dark:hover:text-jano-red whitespace-nowrap"
            >
              {t('navigation.contributors')}
            </a>
            <a
              href="#dictionary"
              className="font-medium text-gray-800 transition-colors dark:text-gray-200 hover:text-jano-red dark:hover:text-jano-red whitespace-nowrap"
            >
              {t('navigation.dictionary')}
            </a>
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            <GitHubStarButton />

            {/* Language toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'am' : 'en')}
              className="relative flex items-center justify-center w-16 h-8 text-xs font-medium border border-gray-300 rounded-full sm:w-20 bg-gray-200/50 dark:bg-white/10 dark:border-white/20 sm:text-sm"
            >
              <motion.span
                className="absolute font-bold text-white rounded-full shadow-md w-7 sm:w-8 h-7 sm:h-8 bg-jano-red"
                layout
                transition={{ type: 'spring', stiffness: 700, damping: 30 }}
                animate={{ x: i18n.language === 'en' ? 2 : -2 }}
              />
              <span className="z-10 pl-2 sm:pl-3">{i18n.language === 'en' ? 'EN' : ''}</span>
              <span className="z-10 pr-2 sm:pr-3">{i18n.language === 'am' ? 'AM' : ''}</span>
            </motion.button>

            {/* Theme toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 sm:p-2.5 border border-gray-300 rounded-lg bg-gray-200/50 dark:bg-white/10 hover:bg-gray-300/50 dark:hover:bg-white/20 dark:border-white/20"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              )}
            </motion.button>

            {/* Hamburger */}
            <div className="md:hidden">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleMenu}
                className="p-2 border border-gray-300 rounded-lg bg-gray-200/50 dark:bg-white/10 hover:bg-gray-300/50 dark:hover:bg-white/20 dark:border-white/20"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              {...mobileMenuVariants}
              className="mt-4 overflow-hidden border-t md:hidden bg-white/10 dark:bg-black/20 backdrop-blur-lg border-white/10 dark:border-white/5 rounded-b-2xl"
            >
              <div className="flex flex-col gap-2 p-4">
                <a
                  href="/docs"
                  onClick={toggleMenu}
                  className="block px-4 py-3 font-medium text-gray-800 transition-colors rounded-lg dark:text-gray-200 hover:bg-white/10 dark:hover:bg-white/5"
                >
                  {t('navigation.docs')}
                </a>
                <a
                  href="#playground"
                  onClick={toggleMenu}
                  className="block px-4 py-3 font-medium text-gray-800 transition-colors rounded-lg dark:text-gray-200 hover:bg-white/10 dark:hover:bg-white/5"
                >
                  {t('navigation.playground')}
                </a>
                <a
                  href="#contributors"
                  onClick={toggleMenu}
                  className="block px-4 py-3 font-medium text-gray-800 transition-colors rounded-lg dark:text-gray-200 hover:bg-white/10 dark:hover:bg-white/5"
                >
                  {t('navigation.contributors')}
                </a>
                <a
                  href="#dictionary"
                  onClick={toggleMenu}
                  className="block px-4 py-3 font-medium text-gray-800 transition-colors rounded-lg dark:text-gray-200 hover:bg-white/10 dark:hover:bg-white/5"
                >
                  {t('navigation.dictionary')}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}