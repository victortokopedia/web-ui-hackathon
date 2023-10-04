import type { SkipperRouteEntry } from '@tokopedia/skipper/router';

import DefaultLayout from '@/layouts/DefaultLayout';

import MainLayout from '@/layouts/MainLayout';
import Home from './Home/Lazy';

const ROUTES: SkipperRouteEntry[] = [
  {
    type: 'layout-route',
    routes: [
      {
        type: 'route',
        name: 'home',
        path: '/',
        layout: [DefaultLayout, MainLayout],
        component: Home,
      },
    ],
  },
];

export default ROUTES;
