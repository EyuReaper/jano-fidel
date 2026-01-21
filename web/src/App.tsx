import AnimatedBackground from './components/AnimatedBackground';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import Playground from './components/Playground';
import Dictionary from './components/Dictionary';

function App() {
  const currentYear = new Date().getFullYear();

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
            Made with 🔥 by <a href="https://eyus-portfolio.vercel.app"><span className='text-jano-red '> Ethiopian </span></a>for the <span className="text-jano-red">Ethiopian developer community</span>
          </p>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-500 font-bold">
            <span className="text-jano-red">Jano Fidel © {currentYear} - Code in Amharic, Build for the World</span>
          </p>
        </div>
      </footer>
  

    </div>


  );
}


export default App;
