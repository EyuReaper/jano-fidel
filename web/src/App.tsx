import AnimatedBackground from './components/AnimatedBackground';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import Playground from './components/Playground';
import Dictionary from './components/Dictionary';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      <Navigation />
      <Hero />
      <Features />
      <Playground />
      <Dictionary/>
    </div>
  );
}

export default App;
