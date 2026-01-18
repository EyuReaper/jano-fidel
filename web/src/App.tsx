import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Playground from './components/Playground';
import Dictionary from './components/Dictionary';
import Features from './components/Features';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <AnimatedBackground />
      <Navigation />
      <Hero />
      <Features />
      <Playground />
      <Dictionary />

      <footer className="relative py-12 px-4 border-t border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Made with <span className="text-jano-red">♥</span> for the Ethiopian developer community
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
            Jano Fidel © 2024 - Code in Amharic, Build for the World
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
