import { forwardRef } from 'react';
import { Container } from '@nest-ui/core';
import { cssTopAppbar } from '../../style';
import type { TopbarProps } from './type';

const Topbar = forwardRef<HTMLDivElement, TopbarProps>((props, ref) => {
  const { children, ...restProps } = props;

  return (
    <div ref={ref} css={cssTopAppbar} {...restProps}>
      <Container fluid>{children}</Container>
    </div>
  );
});

export default Topbar;
