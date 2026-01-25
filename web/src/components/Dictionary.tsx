import { motion } from 'framer-motion';
import { Search, ArrowRight } from 'lucide-react';
import { useState, useMemo } from 'react';
import JANO_KEYWORDS from '../utils/dictionary.js';
import { useTranslation } from 'react-i18next';

export default function Dictionary() {
  const [searchTerm, setSearchTerm] = useState('');
  const { t } = useTranslation();

  const dictionaryEntries = useMemo(() => {
    return Object.entries(JANO_KEYWORDS).map(([jano, js]) => ({ jano, js }));
  }, []);

  const filteredEntries = useMemo(() => {
    if (!searchTerm) return dictionaryEntries;
    const term = searchTerm.toLowerCase();
    return dictionaryEntries.filter(
      (entry) =>
        entry.jano.includes(term) ||
        entry.js.toLowerCase().includes(term)
    );
  }, [searchTerm, dictionaryEntries]);

  return (
    <section id="dictionary" className="min-h-screen px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="text-jano-red">{t('dictionary.title')}</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto">
            {t('dictionary.description')}
          </p>

          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={t('dictionary.search_placeholder')}
              className="w-full pl-12 pr-6 py-3 sm:py-4 bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-jano-red/50"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
        >
          {filteredEntries.map((entry, index) => (
            <motion.div
              key={entry.jano}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.02 }}
              whileHover={{ y: -5 }}
              className="bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl p-5 sm:p-6 shadow-lg hover:shadow-2xl hover:border-jano-red/50 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xl sm:text-2xl font-bold text-jano-red">
                  {entry.jano}
                </span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              </div>
              <code className="text-base sm:text-lg text-gray-700 dark:text-gray-200 font-mono">
                {entry.js}
              </code>
            </motion.div>
          ))}
        </motion.div>

        {filteredEntries.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-10 sm:py-20"
          >
            <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400">
              {t('dictionary.no_keywords', { searchTerm: searchTerm })}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
