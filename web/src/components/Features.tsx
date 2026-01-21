import { motion } from 'framer-motion';
import { Languages, Hash, Zap, Shield, Globe, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Languages,
    title: 'Native Ge\'ez Support',
    description: 'Write code in Amharic using the ancient and beautiful Ge\'ez script. Every keyword, every function name feels natural.',
  },
  {
    icon: Hash,
    title: 'Ethiopic Numerals',
    description: 'Full support for traditional Ethiopic numerals alongside modern numbers. Honor your heritage while coding.',
  },
  {
    icon: Zap,
    title: 'Node.js Power',
    description: 'Built on top of Node.js ecosystem. Access millions of npm packages and use familiar JavaScript tools.',
  },
  {
    icon: Shield,
    title: 'Type Safe',
    description: 'Optional type checking ensures your code is robust and maintainable. Catch errors before runtime.',
  },
  {
    icon: Globe,
    title: 'Universal Output',
    description: 'Compiles to standard JavaScript that runs everywhere. Deploy to browsers, servers, and mobile apps.',
  },
  {
    icon: Sparkles,
    title: 'Modern Syntax',
    description: 'Clean, expressive syntax that combines the best of modern JavaScript with Amharic linguistic patterns.',
  },
];

export default function Features() {
  return (
    <section id="docs" className="min-h-screen px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful <span className="text-jano-red">Features</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to build modern applications in your native language
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl hover:border-jano-red/50 transition-all"
              >
                <div className="mb-5 sm:mb-6 inline-flex p-3 sm:p-4 bg-jano-red/10 dark:bg-jano-red/20 rounded-xl group-hover:bg-jano-red/20 dark:group-hover:bg-jano-red/30 transition-all">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-jano-red" strokeWidth={2} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  {feature.title}
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
