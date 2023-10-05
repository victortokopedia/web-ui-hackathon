import type { HTMLAttributes } from 'react';

export interface StickybarProps extends HTMLAttributes<HTMLDivElement> {
  shouldToggleDataFixed?: boolean;
  stack?: boolean;
}
