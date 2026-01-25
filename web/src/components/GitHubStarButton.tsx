// web/src/components/GitHubStarButton.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const GitHubStarButton: React.FC = () => {
  const { t } = useTranslation();
  return (
    <a
      href="https://github.com/your-repo/your-project" // Replace with actual GitHub repo link
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
    >
      {/* You might want to add a GitHub star icon here */}
      <span>{t('github.star')}</span>
    </a>
  );
};

export default GitHubStarButton;
