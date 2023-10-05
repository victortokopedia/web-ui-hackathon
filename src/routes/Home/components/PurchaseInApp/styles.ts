import { css } from '@emotion/react';
import { NN0, NN600, NN900, addAlpha } from '@tokopedia/nest-color';

export const modalOverlayWrapper = css`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: NN900;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

export const modalQRWrapper = css`
  width: 632px;
  height: 470px;
  margin: auto;
  background-color: ${NN0};
  padding: 24px 16px;
  border: none;
  border-radius: 0.625rem;
  &::backdrop {
    background: ${addAlpha(NN900, 0.5)};
    opacity: 0;
    transition-property: opacity display;
    transition: 0.25s ease-out;
    transition-behavior: allow-discrete;
  }
  transform: scale(0.8);
  opacity: 0;
  transition-property: transform opacity display;
  transition: 0.25s ease-out;
  transition-behavior: allow-discrete;
  &:popover-open {
    @starting-style {
      transform: scale(0.8);
      opacity: 0;
      &::backdrop {
        opacity: 0;
      }
    }
    transform: scale(1);
    opacity: 1;
    &::backdrop {
      opacity: 1;
    }
  }
`;

export const buttonClose = css`
  position: absolute;
  top: 16px;
  right: 16px;
`;
