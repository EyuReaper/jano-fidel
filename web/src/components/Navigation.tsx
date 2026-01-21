import { motion } from 'framer-motion';
import { Moon, Sun, Code2, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import GitHubStarButton from './GitHubStarButton';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl"
    >
      <div className="px-5 py-4 border shadow-2xl bg-white/10 dark:bg-black/20 backdrop-blur-xl border-white/20 dark:border-white/10 rounded-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 pr-4">
            <Code2 className="w-8 h-8 text-jano-red" strokeWidth={2.5} />
            <div className="flex flex-col"></div>
            <span className="text-2xl font-bold leading-none text-transparent bg-gradient-to-r from-jano-red to-red-600 bg-clip-text">
              Jano Fidel
            </span>
            <span className="text-[10px] font-mono text-green-500 dark:text-green-400 mt-1 flex items-center gap-2 border-r">
              {t('navigation.version')} <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            </span>
          </div>

          <div className="items-center hidden gap-8 md:flex">
            <a href="/docs" className="font-medium text-gray-800 transition-colors dark:text-gray-200 hover:text-jano-red dark:hover:text-jano-red">
              {t('navigation.docs')}
            </a>
            <a
              href="#playground"
              className="font-medium text-gray-800 transition-colors dark:text-gray-200 hover:text-jano-red dark:hover:text-jano-red"
            >
              {t('navigation.playground')}
            </a>
            <a
              href="#dictionary"
              className="font-medium text-gray-800 transition-colors dark:text-gray-200 hover:text-jano-red dark:hover:text-jano-red"
            >
              {t('navigation.dictionary')}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <GitHubStarButton />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'am' : 'en')}
              className="relative w-16 h-8 flex items-center justify-center rounded-full bg-gray-200/50 dark:bg-white/10 border border-gray-300 dark:border-white/20"
            >
              <motion.span
                className="absolute w-8 h-8 rounded-full bg-jano-red flex items-center justify-center text-white font-bold"
                layout
                transition={{ type: 'spring', stiffness: 700, damping: 30 }}
                animate={{ x: i18n.language === 'en' ? 8 : -8 }}
              />
              <span className="absolute left-2 text-sm">{i18n.language === 'am' ? 'AM' : ''}</span>
              <span className="absolute right-2 text-sm">{i18n.language === 'en' ? 'EN' : ''}</span>
            </motion.button>

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

            <div className="md:hidden">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleMenu}
                className="p-2 transition-all border border-gray-300 rounded-lg bg-gray-200/50 dark:bg-white/10 hover:bg-gray-300/50 dark:hover:bg-white/20 dark:border-white/20"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            <a
              href="#docs"
              onClick={toggleMenu}
              className="block py-2 font-medium text-gray-800 transition-colors dark:text-gray-200 hover:text-jano-red dark:hover:text-jano-red"
            >
              {t('navigation.docs')}
            </a>
            <a
              href="#playground"
              onClick={toggleMenu}
              className="block py-2 font-medium text-gray-800 transition-colors dark:text-gray-200 hover:text-jano-red dark:hover:text-jano-red"
            >
              {t('navigation.playground')}
            </a>
            <a
              href="#dictionary"
              onClick={toggleMenu}
              className="block py-2 font-medium text-gray-800 transition-colors dark:text-gray-200 hover:text-jano-red dark:hover:text-jano-red"
            >
              {t('navigation.dictionary')}
            </a>
          </div>
        )}
      </div>
    </motion.nav>
  );
}
