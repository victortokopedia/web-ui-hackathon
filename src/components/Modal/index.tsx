/* eslint-disable react/no-unknown-property */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { HTMLAttributes } from 'react';
import { Button, Typography } from '@nest-ui/core';
import { Close } from '@nest-ui/icon';
import { cssModalWrapper } from './style';

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  modalTitle?: string;
}

const Modal = (props: ModalProps) => {
  const { id, children, modalTitle, ...restProps } = props;
  return (
    // @ts-expect-error
    <div id={id} popover="" css={cssModalWrapper} {...restProps}>
      {modalTitle && (
        <Typography as="div" data-md-title="" variant="heading5" css={{ marginBottom: '1rem' }}>
          {modalTitle}
        </Typography>
      )}
      <Button
        size="small"
        variant="text"
        icon={<Close />}
        color="alternate"
        // @ts-expect-error
        popovertarget={id}
        popovertargetaction="hide"
        css={{ position: 'absolute', top: '1rem', right: '1rem' }}
      />
      {children}
    </div>
  );
};

export default Modal;
