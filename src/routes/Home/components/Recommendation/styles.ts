import { css, keyframes } from '@emotion/react';

const fadeIn = keyframes({
  to: { opacity: 1 },
});

export const wrapper = css({
  opacity: 0,
  animation: `${fadeIn} linear both`,
  animationTimeline: 'view(block)',
  animationRange: 'cover 0 contain 0',
  scrollMarginTop: 250,
});
