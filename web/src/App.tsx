import AnimatedBackground from './components/AnimatedBackground';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import Playground from './components/Playground';
import Dictionary from './components/Dictionary';
import { useTranslation } from 'react-i18next';


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
      <Dictionary />

      <footer className="relative px-4 py-12 border-t border-gray-200 dark:border-white/10">
        <div className="mx-auto text-center max-w-7xl">
          <p className="text-gray-600 dark:text-gray-400">
            {t('footer.made_with')} <a href="https://eyus-portfolio.vercel.app"><span className='text-jano-red '>{t('footer.ethiopian')}</span></a>{t('footer.for_the')} <span className="text-jano-red">{t('footer.developer_community')}</span>
          </p>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-500 font-bold">
            <span className="text-jano-red">{t('footer.copyright', { year: currentYear })}</span>
          </p>
        </div>
      </footer>
  

    </div>


  );
}


export default App;