import { useEffect, useState, useRef } from 'react';

export const useResize = (myRef: React.RefObject<HTMLElement>) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const resizeObserver = useRef<ResizeObserver | null>(null);

  useEffect(() => {
    if (!myRef.current) return;

    setDimensions({
      width: myRef.current.offsetWidth,
      height: myRef.current.offsetHeight,
    });

    resizeObserver.current = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    resizeObserver.current.observe(myRef.current);

    return () => {
      if (resizeObserver.current) {
        resizeObserver.current.disconnect();
      }
    };
  }, [myRef]);

  return dimensions;
};
