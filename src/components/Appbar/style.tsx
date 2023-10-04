import { css } from '@emotion/react';
import { NN0, NN1000S, NN50, NN600, addAlpha } from '@tokopedia/nest-color';
import pxToRem from '@/helpers/cssUtils/pxToRem';

export const cssHeader = css({
  display: 'flex',
  flexDirection: 'column-reverse',
});

export const cssOverlay = css({
  zIndex: 19,
  position: 'fixed',
  backgroundColor: addAlpha(NN1000S, 0.5),
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
});

export const cssTopAppbar = css({
  background: NN50,
  padding: `${pxToRem(4)} 0`,
  fontSize: pxToRem(12),
  lineHeight: 16 / 12,
  color: NN600,
});

export const cssMainAppbar = css({
  background: NN0,
  padding: `${pxToRem(12)} 0`,
});
