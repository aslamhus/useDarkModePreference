import { useEffect, useState } from 'react';

export const useDarkModePreference = () => {
  const [prefersDark, setPrefersDark] = useState(false);

  const updateColorScheme = () => {
    setPrefersDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
  };

  useEffect(() => {
    let darkModePreference;
    if (window.matchMedia) {
      darkModePreference = window.matchMedia('(prefers-color-scheme: dark)');
      darkModePreference.addEventListener('change', updateColorScheme);
      updateColorScheme();
    }

    return () => {
      if (darkModePreference) {
        darkModePreference.removeEventListener('change', updateColorScheme);
      }
    };
  }, []);

  return { prefersDark };
};
