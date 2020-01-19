import { useState, useEffect } from 'react';

const MAX_WIDTH = 920;
const MIN_HEIGHT = 768;

const getIsMobile = () => {
  const { innerWidth: width, innerHeight: height } = window;

  return width < MAX_WIDTH && height >= MIN_HEIGHT;
};

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(getIsMobile);

  useEffect(() => {
    const handleResize = () => setIsMobile(getIsMobile());

    window.addEventListener('resize', handleResize);

    return () => window.addEventListener('resize', handleResize);
  }, [setIsMobile]);

  return isMobile;
};

export default useIsMobile;
