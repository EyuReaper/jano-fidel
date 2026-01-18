import { motion } from 'framer-motion';
import { Search, ArrowRight } from 'lucide-react';
import { useState, useMemo } from 'react';
import JANO_KEYWORDS from '../utils/dictionary.js';

export default function Dictionary() {
  const [searchTerm, setSearchTerm] = useState('');

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
    <section id="dictionary" className="min-h-screen px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Language <span className="text-jano-red">Dictionary</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Explore all Jano Fidel keywords and their JavaScript equivalents
          </p>

          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search keywords..."
              className="w-full pl-12 pr-6 py-4 bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-jano-red/50"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {filteredEntries.map((entry, index) => (
            <motion.div
              key={entry.jano}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.02 }}
              whileHover={{ y: -5 }}
              className="bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:border-jano-red/50 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl font-bold text-jano-red">
                  {entry.jano}
                </span>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div>
              <code className="text-lg text-gray-700 dark:text-gray-200 font-mono">
                {entry.js}
              </code>
            </motion.div>
          ))}
        </motion.div>

        {filteredEntries.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-xl text-gray-500 dark:text-gray-400">
              No keywords found matching "{searchTerm}"
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
