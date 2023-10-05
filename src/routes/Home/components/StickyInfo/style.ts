import { css, keyframes } from '@emotion/react';
import { NN0 } from '@tokopedia/nest-color';

const toggleBar = keyframes({
  to: { translate: '0 0', opacity: 1 },
});

export const cssStickyInfo = css({
  width: '100%',
  background: NN0,
  translate: '0 -100%',
  marginBottom: -45,
  '&, &>*': {
    animation: `${toggleBar} linear both`,
    animationTimeline: 'scroll()',
    animationRange: '20px 70px',
  },
  '>*': { opacity: 0 },
});
