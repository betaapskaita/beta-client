import { boot } from 'quasar/wrappers';
import { createI18n } from 'vue-i18n';

import messages from 'src/i18n';

const i18n = createI18n({
  locale: 'lt-LT',
  messages,
});

const $t = i18n.global.t;

export default boot(({ app }) => {
  // Set i18n instance on app
  app.use(i18n);
});

export { i18n, $t };
