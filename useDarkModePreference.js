import { useEffect, useState, useCallback } from 'react';

export const useDarkModePreference = () => {
  const [prefersDark, setPrefersDark] = useState(false);

  const updateLogoColorScheme = useCallback(() => {
    setPrefersDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
  }, []);

  useEffect(() => {
    let darkModePreference;
    if (window.matchMedia) {
      darkModePreference = window.matchMedia('(prefers-color-scheme: dark)');
      darkModePreference.addEventListener('change', updateLogoColorScheme);

      updateLogoColorScheme();
    }

    return () => {
      if (darkModePreference) {
        darkModePreference.removeEventListener('change', updateLogoColorScheme);
      }
    };
  }, []);

  return { prefersDark };
};
