import { forwardRef, useImperativeHandle, useState } from 'react';

import { Portal } from '@nest-ui/core';

import Main from './components/Main';
import Topbar from './components/Topbar';
import type { AppbarProps } from './type';
import { cssOverlay, cssHeader } from './style';

const Appbar = forwardRef<HTMLDivElement, AppbarProps>((props, ref) => {
  const { children, methodsRef, onOverlayClick, ...restProps } = props;
  const [overlay, setOverlay] = useState(false);

  useImperativeHandle(methodsRef, () => ({ setOverlay }), []);

  return (
    <>
      <header ref={ref} css={cssHeader} {...restProps}>
        {children}
      </header>
      {overlay && (
        <Portal>
          <div css={cssOverlay} onClick={onOverlayClick} />
        </Portal>
      )}
    </>
  );
});

export { Main, Topbar };

export default Appbar;
