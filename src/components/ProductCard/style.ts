import pxToRem from '@/helpers/cssUtils/pxToRem';
import { css } from '@emotion/react';
import { NN600 } from '@tokopedia/nest-color';

export const cssContainer = css({
  containerName: 'productgrid',
  containerType: 'inline-size',
  height: '100%',
});

export const cssGrid = css({
  container: 'productgrid / inline-size',
  display: 'block',
  '@container (min-width: 200px)': {
    display: 'flex',
    gap: '.5rem',
    padding: '.75rem',
  },
});

export const cssProductInfo = css({
  container: 'productgrid / inline-size',
  padding: '.5rem',
  '@container (min-width: 200px)': {
    flexGrow: 1,
    padding: 0,
  },
});

export const cssImgWrapper = css({
  width: '100%',
  '@container (min-width: 200px)': {
    flexShrink: 0,
    width: '40%',
  },
});

export const cssProductName = css({
  display: '-webkit-box',
  WebkitLineClamp: 1,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  fontSize: pxToRem(12),
  lineHeight: 18 / 12,
  marginBottom: '.25rem',
  '@container (min-width: 200px)': {
    WebkitLineClamp: 2,
    fontSize: pxToRem(14),
    lineHeight: 20 / 14,
  },
});

export const cssPrice = css({
  fontWeight: 800,
  fontSize: pxToRem(14),
  lineHeight: 20 / 14,
  marginBottom: '.25rem',
  '@container (min-width: 200px)': {
    fontSize: pxToRem(16),
    lineHeight: 20 / 16,
  },
});

export const cssShopInfo = css({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '.25rem',
  fontSize: pxToRem(12),
  lineHeight: 18 / 12,
  color: NN600,
  span: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  '@container (min-width: 200px)': {
    fontSize: pxToRem(14),
    lineHeight: 20 / 14,
  },
});

export const cssBadge = css({
  display: 'block',
  width: 16,
  height: 16,
  marginRight: 4,
});

export const cssRating = css({
  display: 'flex',
  alignItems: 'center',
  fontSize: pxToRem(12),
  lineHeight: 18 / 12,
  color: NN600,
  '@container (min-width: 200px)': {
    fontSize: pxToRem(14),
    lineHeight: 20 / 14,
  },
});

export const cssRatingStar = css({
  display: 'block',
  width: 12,
  height: 12,
  '@container (min-width: 200px)': {
    width: 16,
    height: 16,
  },
});
