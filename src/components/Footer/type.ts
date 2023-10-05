import type { ReactNode } from 'react';
import type React from 'react';
import type { Ratio } from '@nest-ui/core';

export interface FooterLazyProps {
  children?: ReactNode;
}

// raw data
export interface FooterLinkRaw {
  url: string;
  name: string;
  foreignName: string;
}

export interface FooterGroupRaw {
  name: string;
  foreignName: string;
  footerLinks: FooterLinkRaw[];
}

export interface FooterDataRaw {
  seoFooter: {
    footerGroup: FooterGroupRaw[];
  };
}

// mapped data

export interface FooterLink {
  text: string;
  link: string;
  target?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface SecurityLink {
  link: string;
  image: string;
  imageRatio: Ratio;
  imageWidth: string | number;
}

export interface SocialLink {
  link: string;
  icon: string;
  alt: string;
}

export interface FooterGroupLink {
  title: string;
  type: 'footer';
  list: FooterLink[];
}

export interface SecurityGroupLink {
  title: string;
  type: 'security';
  list: SecurityLink[];
}

export interface SocialGroupLink {
  title: string;
  type: 'social-media';
  list: SocialLink[];
}

export type FooterData = Array<FooterGroupLink | SecurityGroupLink | SocialGroupLink>;

export interface DataFooterApp {
  illustration: {
    src: string;
    ratio: Ratio;
    width: Array<string | number | undefined>;
  };
  apps: Array<{
    app: string;
    src: string;
    url: string;
  }>;
}
