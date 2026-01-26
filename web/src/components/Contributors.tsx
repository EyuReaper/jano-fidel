import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Users } from 'lucide-react';

interface Contributor {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
}

const Contributors: React.FC = () => {
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    fetch('https://api.github.com/repos/EyuReaper/jano-fidel/contributors')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setContributors(data);
        }
      })
      .catch((err) => {
        console.error('Failed to fetch contributors', err);
      });
  }, []);

  const getAvatarSize = (contributions: number) => {
    const minSize = 24; // 1.5rem
    const maxSize = 48; // 3rem
    const size = minSize + Math.log(contributions + 1) * 5;
    return Math.min(size, maxSize);
  };

  return (
    <div className="flex justify-center items-center">
      {contributors.length > 0 ? (
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center -space-x-4 group"
        >
          {contributors.slice(0, 5).map((contributor, index) => {
            const size = getAvatarSize(contributor.contributions);
            return (
              <motion.a
                key={contributor.id}
                href={contributor.html_url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ zIndex: 1, scale: 1.2, y: -2 }}
                transition={{ duration: 0.2 }}
                style={{
                  zIndex: contributors.length - index,
                  width: size,
                  height: size,
                }}
                className="rounded-full overflow-hidden border-2 border-gray-700 group-hover:border-jano-red transition-all duration-300"
                title={`${contributor.login} (${contributor.contributions} contributions)`}
              >
                <img src={contributor.avatar_url} alt={contributor.login} />
              </motion.a>
            );
          })}
        </motion.div>
      ) : (
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://github.com/EyuReaper/jano-fidel/graphs/contributors"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
        >
          <Users className="w-4 h-4" />
          {t('navigation.become_a_contributor')}
        </motion.a>
      )}
    </div>
  );
};

export default Contributors;
