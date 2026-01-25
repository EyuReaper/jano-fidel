import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import CountUp from 'react-countup';

const GitHubStarButton: React.FC = () => {
  const [stars, setStars] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchStars = () => {
      fetch('https://api.github.com/repos/EyuReaper/jano-fidel')
        .then((res) => res.json())
        .then((data) => {
          if (data.stargazers_count !== undefined) {
            setStars(data.stargazers_count);
          }
        })
        .catch((err) => {
          console.error('Failed to fetch stars', err);
        });
    };

    fetchStars(); // Initial fetch
    const interval = setInterval(fetchStars, 60000); // Poll every 60 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <motion.a
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      href="https://github.com/EyuReaper/jano-fidel"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-white transition-all duration-300 border border-gray-700 shadow-lg rounded-xl bg-gradient-to-r from-gray-800 to-black hover:from-jano-red hover:to-red-600 hover:border-jano-red hover:shadow-jano-red/30"
    >
      <Github className="w-5 h-5" />
      <motion.div
        whileHover={{ rotate: 15, scale: 1.2 }}
        transition={{ duration: 0.2 }}
      >
        <Star className="w-5 h-5" fill="gold" />
      </motion.div>
      <div className="flex items-center gap-1">
        <CountUp end={stars} duration={2.5} separator="," />
        <span>{t('github.stars_label')}</span>
      </div>
    </motion.a>
  );
};

export default GitHubStarButton;
