import { useEffect, useState } from 'react';

const ThemeSetter = () => {
  const html = document.querySelector('html');
  useEffect(() => {
    const isOsDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    html.dataset.theme = `theme-${!isOsDark ? 'light' : 'dark'}`;
  }, []);

  const [checked, setChecked] = useState(false);
  const switchTheme = () => {
    setChecked(!checked);
    html.dataset.theme = `theme-${
      html.dataset.theme === 'theme-light' ? 'dark' : 'light'
    }`;
  };

  return (
    <button
      className="header__button"
      onClick={() => switchTheme()}
      aria-label="change theme"
    >
      ☀︎
    </button>
  );
};

export default ThemeSetter;
