import React, { useState, useEffect } from 'react';

function useSystemTheme() {
  const [systemTheme, setSystemTheme] = useState('dark');

  useEffect(() => {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleThemeChange = (event) => {
      setSystemTheme(event.matches ? 'dark' : 'light');
    };

    darkModeQuery.addEventListener('change', handleThemeChange);
    
    // Initial theme detection
    setSystemTheme(darkModeQuery.matches ? 'dark' : 'light');
    
    return () => {
      darkModeQuery.removeEventListener('change', handleThemeChange);
    };
  }, []);

  return systemTheme;
}
export default useSystemTheme;