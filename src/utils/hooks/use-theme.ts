import { useState, useRef, useEffect, SetStateAction, Dispatch } from 'react';
import { useIsomorphicLayoutEffect } from './use-isomorphic-layout';

export const useTheme = (): [string, Dispatch<SetStateAction<string>>] => {
  const [setting, setSetting] = useState('system');
  const initial = useRef(true);

  useIsomorphicLayoutEffect(() => {
    const theme = localStorage.theme;
    if (theme === 'light' || theme === 'dark') {
      setSetting(theme);
    }
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (setting === 'system') {
      localStorage.removeItem('theme');
    } else if (setting === 'light' || setting === 'dark') {
      localStorage.theme = setting;
    }
    if (initial.current) {
      initial.current = false;
    } else {
      update();
    }
  }, [setting]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    if (mediaQuery?.addEventListener) {
      mediaQuery.addEventListener('change', update);
    } else {
      mediaQuery.addListener(update);
    }

    function onStorage() {
      update();
      const theme = localStorage.theme;
      if (theme === 'light' || theme === 'dark') {
        setSetting(theme);
      } else {
        setSetting('system');
      }
    }
    window.addEventListener('storage', onStorage);

    return () => {
      if (mediaQuery?.removeEventListener) {
        mediaQuery.removeEventListener('change', update);
      } else {
        mediaQuery.removeListener(update);
      }

      window.removeEventListener('storage', onStorage);
    };
  }, []);

  return [setting, setSetting];
};

function update() {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark', 'changing-theme');
  } else {
    document.documentElement.classList.remove('dark', 'changing-theme');
  }
  window.setTimeout(() => {
    document.documentElement.classList.remove('changing-theme');
  });
}
