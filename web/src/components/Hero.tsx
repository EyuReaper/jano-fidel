import { motion } from 'framer-motion';
import { Copy, Check, Terminal } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const command = 'npm install -g janofidel';

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-32 pb-20">
      <div className="max-w-5xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-gray-900 dark:text-white">Code in </span>
            <span className="bg-gradient-to-r from-jano-red to-red-600 bg-clip-text text-transparent">
              Amharic
            </span>
            <span className="text-gray-900 dark:text-white">.</span>
            <br />
            <span className="text-gray-900 dark:text-white">Build for the </span>
            <span className="bg-gradient-to-r from-jano-red to-red-600 bg-clip-text text-transparent">
              World
            </span>
            <span className="text-gray-900 dark:text-white">.</span>
          </motion.h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto"
        >
          The first programming language that brings the power of Ge'ez script to modern development.
          Write code that feels like home.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-gray-900/90 dark:bg-black/60 backdrop-blur-xl border border-gray-700 dark:border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            <div className="bg-gray-800/90 dark:bg-black/40 px-6 py-3 flex items-center gap-2 border-b border-gray-700 dark:border-white/10">
              <Terminal className="w-4 h-4 text-jano-red" />
              <span className="text-sm text-gray-300 font-mono">Terminal</span>
            </div>
            <div className="p-6 flex items-center justify-between">
              <code className="text-green-400 font-mono text-lg flex-1 text-left">
                $ {command}
              </code>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCopy}
                className="ml-4 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all border border-white/20"
              >
                {copied ? (
                  <Check className="w-5 h-5 text-green-400" />
                ) : (
                  <Copy className="w-5 h-5 text-gray-300" />
                )}
              </motion.button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#playground"
            className="px-8 py-4 bg-jano-red hover:bg-red-600 text-white rounded-xl font-semibold shadow-lg shadow-jano-red/30 dark:shadow-jano-red/50 transition-all"
          >
            Try Playground
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#docs"
            className="px-8 py-4 bg-white/10 dark:bg-white/5 hover:bg-white/20 dark:hover:bg-white/10 text-gray-900 dark:text-white rounded-xl font-semibold backdrop-blur-xl border border-white/20 transition-all"
          >
            Read Docs
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

