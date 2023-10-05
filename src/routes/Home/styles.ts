import { css, keyframes } from '@emotion/react';

const fadeIn = keyframes({
  to: { opacity: 1, translate: '0 0' },
});

export const shopInfoContainer = css`
  display: flex;
  justify-content: space-between;
`;

export const anotherProductContainer = css({
  opacity: 0,
  translate: '0 50px',
  animation: `${fadeIn} linear both`,
  animationTimeline: 'view(block)',
  animationRange: 'cover 0 contain 0',
  scrollMarginTop: 250,
  marginTop: '2rem',
});

export const productSponsorContainer = css({
  opacity: 0,
  translate: '0 50px',
  animation: `${fadeIn} linear both`,
  animationTimeline: 'view(block)',
  animationRange: 'cover 0 contain 0',
  scrollMarginTop: 250,
  marginTop: '3rem',
});
