import type { SkipperRouteEntry } from '@tokopedia/skipper/router';

import DefaultLayout from '@/layouts/DefaultLayout';

import Home from './Home/Lazy';

const ROUTES: SkipperRouteEntry[] = [
  {
    type: 'layout-route',
    routes: [
      {
        type: 'route',
        name: 'home',
        path: '/',
        layout: [DefaultLayout],
        component: Home,
      },
    ],
  },
];

export default ROUTES;
