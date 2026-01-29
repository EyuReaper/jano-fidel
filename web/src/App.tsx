import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

// Dynamically import DocsPage
const LazyDocsPage = lazy(() => import('./pages/DocsPage'));

function App() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <Router>
      <div className="relative min-h-screen overflow-x-hidden">
        <AnimatedBackground />
        <Navigation />

        <Routes>
          {/* Main Landing Page Path */}
          <Route path="/" element={
            <>
              <Hero />
              <Features />
              <Playground />
              <section id="contributors" className="min-h-screen px-4 py-20 sm:px-6 lg:px-8 sm:py-28">
                <div className="mx-auto max-w-7xl">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center sm:mb-16"
                  >
                    <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl dark:text-white">
                      <span className="text-jano-red">{t('contributors.title')}</span>
                    </h2>
                  </motion.div>
                  <Contributors/>
                </div>
              </section>
              <Dictionary />
            </>
          } />

          {/* Documentation Page Path */}
          <Route path="/docs" element={
            <Suspense fallback={<div>Loading Documentation...</div>}>
              <LazyDocsPage />
            </Suspense>
          } />
        </Routes>

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
    </Router>
  );
}

export default App;
