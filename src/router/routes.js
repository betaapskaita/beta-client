// Layouts
import ServerLayout from "layouts/ServerLayout";

// Pages
import { ServerList, ServerEdit } from "pages/Server";

// Error
import Error404 from "pages/Error404";

const routes = [
  {
    path: "/",

    component: ServerLayout,

    children: [
      { path: "", component: ServerList },
      { path: "edit", component: ServerEdit, meta: { requireAuth: false } },
    ],
    meta: { requireServer: false },
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: Error404,
  },
];

export default routes;
