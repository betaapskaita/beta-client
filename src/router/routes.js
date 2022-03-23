const routes = [
  {
    path: "/",
    component: () => import("layouts/SelectServer.vue"),
    children: [{ path: "", component: () => import("pages/ServerList.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
