import { css } from '@emotion/react';
import { NN0, NN1000S, NN950, addAlpha } from '@tokopedia/nest-color';

export const cssCarouselNav = css({
  position: 'absolute',
  pointerEvents: 'none',
  '>*': { pointerEvents: 'auto' },
  width: '100%',
  top: '50%',
  translate: '0 -50%',
  display: 'flex',
  justifyContent: 'space-between',
  button: {
    border: 'none',
    width: 50,
    height: 50,
    borderRadius: '50%',
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: NN0,
    color: NN950,
    boxShadow: `${addAlpha(NN1000S, 0.12)} 0px 2px 4px`,
    '&:disabled': { opacity: 0 },
    transition: 'opacity .2s ease-out',
  },
});
