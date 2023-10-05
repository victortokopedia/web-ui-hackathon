import type { Dispatch, ForwardedRef, HTMLAttributes, MouseEvent, SetStateAction } from 'react';

export interface AppbarMethods {
  setOverlay: Dispatch<SetStateAction<boolean>>;
}

export interface AppbarProps extends HTMLAttributes<HTMLDivElement> {
  methodsRef?: ForwardedRef<AppbarMethods>;
  onOverlayClick?: (e: MouseEvent<HTMLDivElement>) => void;
}
