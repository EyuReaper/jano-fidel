import AnimatedBackground from './components/AnimatedBackground';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import Playground from './components/Playground';
import Contributors from './components/Contributors';
import Dictionary from './components/Dictionary';
import ScrollToTopButton from './components/ScrollToTopButton';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';


function App() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();


  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      <Navigation />
      <Hero />
      <Features />
      <Playground />
      <section id="contributors" className="min-h-screen px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              <span className="text-jano-red">{t('contributors.title')}</span>
            </h2>
          </motion.div>
          <Contributors/>
        </div>
      </section>
      <Dictionary />

      <footer className="relative px-4 py-12 border-t border-gray-200 dark:border-white/10">
        <div className="mx-auto text-center max-w-7xl">
          <p className="text-gray-600 dark:text-gray-400">
            {t('footer.made_with')} <a href="https://eyus-portfolio.vercel.app"><span className='text-jano-red '>{t('footer.ethiopian')}</span></a>{t('footer.for_the')} <span className="text-jano-red">{t('footer.developer_community')}</span>
          </p>
          <p className="mt-2 text-sm font-bold text-gray-500 dark:text-gray-500">
            <span className="text-jano-red">{t('footer.copyright', { year: currentYear })}</span>
          </p>
        </div>
      </footer>
      <ScrollToTopButton />
  

    </div>


  );
}


export default App;