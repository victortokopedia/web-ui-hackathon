import { css } from '@emotion/react';
import { NN100, NN600, NN950 } from '@tokopedia/nest-color';
import pxToRem from '@/helpers/cssUtils/pxToRem';

export const cssLogo = css({
  display: 'block',
  flexShrink: 0,
  '>img': { display: 'block', objectFit: 'contain' },
});

export const cssTopbarUl = css({
  display: 'flex',
  listStyle: 'none',
  alignItems: 'center',
  gap: pxToRem(32),
  padding: 0,
  margin: 0,
  '>li': {
    '&:first-of-type': { marginRight: 'auto' },
    margin: 0,
    padding: 0,
  },
});

export const cssDownloadMobile = css({
  display: 'flex',
  alignItems: 'center',
});

export const cssActionBtn = css({
  paddingLeft: pxToRem(8),
  paddingRight: pxToRem(8),
  cursor: 'pointer',
});

export const cssSeparator = css({
  height: 24,
  width: 1,
  background: NN100,
});

export const cssSearchSection = css({
  position: 'relative',
});

export const cssRecomSection = css({
  position: 'absolute',
  top: '100%',
  marginTop: pxToRem(8),
  color: NN600,
  fontSize: pxToRem(12),
  lineHeight: 16 / 12,
});

export const cssLocation = css({
  display: 'flex',
  alignItems: 'center',
  marginTop: pxToRem(8),
  color: NN600,
  fontSize: pxToRem(12),
  lineHeight: 16 / 12,
  gap: pxToRem(8),
  strong: {
    display: 'flex',
    alignItems: 'center',
    color: NN950,
  },
});
