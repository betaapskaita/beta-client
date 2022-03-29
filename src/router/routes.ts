import { RouteRecordRaw } from 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    // is optional
    // isAdmin?: boolean;
    // must be declared by every route
    requiresServer: boolean;
  }
}

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: { requiresServer: true },
  },
  {
    path: '/server',
    component: () => import('layouts/ServerLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/InfoPage.vue') },
      {
        path: '/server/edit/:id',
        name: 'edit',
        component: () => import('pages/Server/ServerEdit.vue'),
      },
    ],
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('layouts/MainLayout.vue'),
    // children: [],
    meta: { requiresServer: true },
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
