import { useEffect } from 'react';

const ScrollToTheTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
};

export default ScrollToTheTop;
