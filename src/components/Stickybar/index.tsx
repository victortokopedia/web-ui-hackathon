import { forwardRef, memo, useEffect, useImperativeHandle, useRef } from 'react';
import { css } from '@emotion/react';
import { NN1000S, addAlpha } from '@tokopedia/nest-color';
import type { StickybarProps } from './type';

const cssStickybar = css({
  position: 'sticky',
  zIndex: 20,
  '&[data-n-stack]': {
    zIndex: 21,
    boxShadow: `0 4px 6px -1px ${addAlpha(NN1000S, 0.07)}`,
    '&:has(+[data-n-stack], +* [data-n-stack])': {
      zIndex: 22,
      boxShadow: 'none',
    },
  },
});

export const getStickybarElements = () => {
  return document.querySelectorAll<HTMLDivElement>('[data-n-stickybar="top"]');
};

const calculateSticky = () => {
  const stickybars = getStickybarElements();
  let top = 0;
  for (let i = 0; i < stickybars.length; i++) {
    const stickybar = stickybars[i];
    stickybar.style.top = `${top}px`;
    if (stickybar.hasAttribute('data-n-stack')) top += stickybar.offsetHeight;
  }
};

// Stickybar allows you to create a sticky bar on the top of the page.
const Stickybar = forwardRef<HTMLDivElement, StickybarProps>(
  ({ children, shouldToggleDataFixed, stack, ...restProps }, ref) => {
    const target = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => target.current as HTMLDivElement, []);

    useEffect(() => {
      calculateSticky();
      window.removeEventListener('resize', calculateSticky);
      window.addEventListener('resize', calculateSticky);
      return () => {
        if (!getStickybarElements().length) {
          window.removeEventListener('resize', calculateSticky);
        }
      };
    }, []);

    useEffect(() => {
      const targetDOM = target.current;
      if (shouldToggleDataFixed && targetDOM) {
        const handleScroll = () => {
          if (targetDOM.getBoundingClientRect().top <= parseInt(targetDOM.style.top, 10))
            targetDOM.setAttribute('data-fixed', '');
          else targetDOM.removeAttribute('data-fixed');
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }
      return;
    }, [shouldToggleDataFixed]);

    return (
      <div ref={target} data-n-stickybar="top" data-n-stack={stack ? '' : undefined} css={cssStickybar} {...restProps}>
        {children}
      </div>
    );
  },
);

export default memo(Stickybar);
