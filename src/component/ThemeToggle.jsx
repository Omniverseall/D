
import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' || 
           (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="theme-toggle ml-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" onClick={toggleTheme}>
      {isDarkMode ? (
        // Sun icon
        <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
          <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2"/>
          <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2"/>
          <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2"/>
          <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ) : (
        // Moon icon
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </div>
  );
};

export default ThemeToggle;
