import { motion } from 'framer-motion';
import { Play, Code2, FileCode } from 'lucide-react';
import { useState, useEffect } from 'react';
import { transpileJanoToJs, sampleJanoCode } from '../utils/transpiler';

export default function Playground() {
  const [janoCode, setJanoCode] = useState(sampleJanoCode);
  const [jsOutput, setJsOutput] = useState('');

  useEffect(() => {
    setJsOutput(transpileJanoToJs(janoCode));
  }, [janoCode]);

  const handleRun = () => {
    setJsOutput(transpileJanoToJs(janoCode));
  };

  return (
    <section id="playground" className="min-h-screen px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Interactive <span className="text-jano-red">Playground</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Write Jano Fidel code and see the JavaScript translation in real-time
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6"
        >
          <div className="bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            <div className="bg-gray-800/90 dark:bg-black/40 px-6 py-3 flex items-center justify-between border-b border-gray-700 dark:border-white/10">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-jano-red" />
                <span className="text-sm text-gray-300 font-semibold">Jano Fidel</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleRun}
                className="flex items-center gap-2 px-3 py-1.5 bg-jano-red hover:bg-red-600 text-white rounded-lg text-sm font-medium transition-all"
              >
                <Play className="w-3 h-3" fill="currentColor" />
                Run
              </motion.button>
            </div>
            <textarea
              value={janoCode}
              onChange={(e) => setJanoCode(e.target.value)}
              className="w-full h-96 bg-gray-900/50 dark:bg-black/30 text-gray-100 p-6 font-mono text-sm resize-none focus:outline-none"
              spellCheck={false}
              style={{ direction: 'ltr', unicodeBidi: 'embed' }}
            />
          </div>

          <div className="bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            <div className="bg-gray-800/90 dark:bg-black/40 px-6 py-3 flex items-center gap-2 border-b border-gray-700 dark:border-white/10">
              <FileCode className="w-4 h-4 text-green-500" />
              <span className="text-sm text-gray-300 font-semibold">JavaScript Output</span>
            </div>
            <pre className="w-full h-96 bg-gray-900/50 dark:bg-black/30 text-green-400 p-6 font-mono text-sm overflow-auto">
              {jsOutput}
            </pre>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400"
        >
          Try editing the Jano code above. The JavaScript translation updates automatically!
        </motion.div>
      </div>
    </section>
  );
}
