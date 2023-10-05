import { useEffect, useRef } from 'react';

const SCALE = 2;

const useHoverZoom = <E extends HTMLElement>() => {
  const target = useRef<E>(null);

  useEffect(() => {
    const targetDOM = target.current;

    if (targetDOM) {
      const imageDOM = targetDOM.getElementsByTagName('img')[0];
      let zoomin = false;

      const handleZoomIn = (e: MouseEvent) => {
        const cursorX = e.clientX;
        const cursorY = e.clientY;
        const { top, right, bottom, left } = targetDOM.getBoundingClientRect();

        // Calculate the translation values based on mouse position relative to the target's boundingClientRect
        const translateX = -(cursorX - left - (right - left) / 2) / SCALE;
        const translateY = -(cursorY - top - (bottom - top) / 2) / SCALE;

        // Apply the scale and translation to the image
        imageDOM.style.transform = `scale(${SCALE}) translate(${translateX}px, ${translateY}px)`;
      };

      const handleMouseEnter = (e: MouseEvent) => {
        zoomin = true;
        handleZoomIn(e);
      };

      const handleMouseMove = (e: MouseEvent) => {
        if (zoomin) handleZoomIn(e);
      };

      const handleMouseLeave = () => {
        zoomin = false;

        // Reset the image's transformation
        imageDOM.style.transform = 'none';
      };

      targetDOM.addEventListener('mouseenter', handleMouseEnter);
      targetDOM.addEventListener('mousemove', handleMouseMove);
      targetDOM.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        targetDOM.removeEventListener('mouseenter', handleMouseEnter);
        targetDOM.removeEventListener('mousemove', handleMouseMove);
        targetDOM.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
    return;
  }, []);

  return target;
};

export default useHoverZoom;
