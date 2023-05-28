import { useEffect, useState } from 'react';

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState('');

  useEffect(() => {
    const userAgent = navigator.userAgent;

    const isMobile = /Mobi|Android/i.test(userAgent);
    const isTablet = /Tablet|iPad/i.test(userAgent);

    if (isMobile) {
      setDeviceType('mobile');
    } else if (isTablet) {
      setDeviceType('tablet');
    } else {
      setDeviceType('desktop');
    }
  }, []);

  return deviceType;
};

export default useDeviceType;