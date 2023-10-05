import { css, keyframes } from '@emotion/react';
import { NN0, NN200 } from '@tokopedia/nest-color';

const fadeIn = keyframes({
  to: { opacity: 1 },
});

export const cssFooter = css({
  marginTop: 50,
  backgroundColor: NN0,
  borderTop: `1px solid ${NN200}`,
  padding: '32px 0',
  opacity: 0,
  animation: `${fadeIn} linear both`,
  animationTimeline: 'view(block)',
  animationRange: 'cover 0 contain 0',
});

export const cssFooterContent = css({
  display: 'flex',
  flexFlow: 'column wrap',
  height: 450,
});

export const cssFooterNav = css({
  marginRight: 16,
  '> div': { marginBottom: 12 },
  ul: {
    padding: 0,
    margin: '0 0 24px',
    minWidth: '200px',
    listStyle: 'none',
    li: { margin: '0 0 12px' },
    '&[data-type="security"], &[data-type="social-media"]': {
      display: 'flex',
      gap: 8,
      li: { margin: 0 },
    },
  },
});

export const cssFooterRight = css({ textAlign: 'center' });
export const cssFooterApps = css({
  display: 'flex',
  justifyContent: 'center',
  gap: 8,
  margin: '16px 0',
});
export const cssFooterYear = css({ fontWeight: 800, margin: '16px 0' });
export const cssFooterLang = css({ width: 175, margin: '16px auto' });

export const placeholderStyle = css({
  marginTop: 50,
  backgroundColor: NN0,
  borderTop: `1px solid ${NN200}`,
  padding: '32px 0',
});
