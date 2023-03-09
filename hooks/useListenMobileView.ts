import { useWindowDimensions } from 'hooks/useWindowDimension';
import { useEffect, useState } from 'react';

export const useListenMobileScreen = (breakPoint = 1024) => {
  const [isMobileView, setIsMobileView] = useState(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width <= breakPoint) {
      setIsMobileView(true);
    } else {
      setIsMobileView(false);
    }

    return () => {};
  }, [breakPoint, width]);

  return isMobileView;
};
