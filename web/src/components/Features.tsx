import { motion } from 'framer-motion';
import { Languages, Hash, Zap, Shield, Globe, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const features = [
  {
    icon: Languages,
    title: 'features.native_geez_support.title',
    description: 'features.native_geez_support.description',
  },
  {
    icon: Hash,
    title: 'features.ethiopic_numerals.title',
    description: 'features.ethiopic_numerals.description',
  },
  {
    icon: Zap,
    title: 'features.nodejs_power.title',
    description: 'features.nodejs_power.description',
  },
  {
    icon: Shield,
    title: 'features.type_safe.title',
    description: 'features.type_safe.description',
  },
  {
    icon: Globe,
    title: 'features.universal_output.title',
    description: 'features.universal_output.description',
  },
  {
    icon: Sparkles,
    title: 'features.modern_syntax.title',
    description: 'features.modern_syntax.description',
  },
];

export default function Features() {
  const { t } = useTranslation();
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
            <span className="text-jano-red">{t('features.powerful_features')}</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('features.subtitle')}
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
                  {t(feature.title)}
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {t(feature.description)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
