import { css } from '@emotion/react';
import { NN0, NN600, NN900 } from '@tokopedia/nest-color';

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
  display: none;
  position: absolute;
  width: 632px;
  height: 470px;
  margin: auto;
  z-index: 1000;
  background-color: ${NN0};
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 24px 16px;
`;

export const buttonClose = css`
  position: absolute;
  top: 16px;
  right: 16px;
`;
