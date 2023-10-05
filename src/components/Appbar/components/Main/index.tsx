import { forwardRef } from 'react';
import { Container } from '@nest-ui/core';
import type { MainProps } from './type';
import { cssMainAppbar } from '../../style';

const Main = forwardRef<HTMLDivElement, MainProps>((props, ref) => {
  const { children, ...restProps } = props;

  return (
    <div ref={ref} css={cssMainAppbar} {...restProps}>
      <Container fluid>{children}</Container>
    </div>
  );
});

export default Main;
