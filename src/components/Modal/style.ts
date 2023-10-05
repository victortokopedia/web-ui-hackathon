import { css } from '@emotion/react';
import { NN0, NN1000S, addAlpha } from '@tokopedia/nest-color';

export const cssModalWrapper = css({
  background: NN0,
  border: 'none',
  borderRadius: '.625rem',
  width: 1024,
  padding: 0,
  '&:has([data-md-title])': {
    padding: '1.5rem',
  },
  '&::backdrop': {
    background: addAlpha(NN1000S, 0.5),
    opacity: 0,
    transitionProperty: 'opacity, display',
    transition: '.25s ease-out',
    transitionBehavior: 'allow-discrete',
  },

  transform: 'scale(0.8)',
  opacity: 0,

  transitionProperty: 'transform, opacity, display',
  transition: '.25s ease-out',
  transitionBehavior: 'allow-discrete',

  '&:popover-open': {
    '@starting-style': {
      transform: 'scale(0.8)',
      opacity: 0,
      '&::backdrop': { opacity: 0 },
    },
    transform: 'scale(1)',
    opacity: 1,
    '&::backdrop': { opacity: 1 },
  },
});
