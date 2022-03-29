import { boot } from 'quasar/wrappers';
import { useServersStore } from '../stores/servers-store';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ router }) => {
  const store = useServersStore();

  router.beforeEach(async (to, from, next) => {
    if (to.meta.requiresServer && !store.isServerSet) {
      next('/server');
    } else {
      next();
    }
  });
});
