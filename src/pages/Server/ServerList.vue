<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md" style="min-width: 350px">
      <q-list bordered separator>
        <q-item-label header>{{ $t('server.listTitle') }}</q-item-label>

        <ServerLink v-for="link in links" :key="link.title" v-bind="link" />
      </q-list>

      <div class="q-pa-md q-gutter-sm text-right">
        <q-btn flat round color="primary" icon="add" v-on:click="addLink" />
      </div>
    </div>
  </q-page>
</template>

<script>
import ServerLink from 'src/components/ServerLink.vue';

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ServerList',

  components: {
    ServerLink,
  },

  // computed: {
  //   ...mapGetters('link', ['links']),
  // },

  // methods: {
  //   addLink: (event) => {
  //     console.log('ok', event);
  //   },
  // },

  // created() {
  //   this.$store.dispatch('link/getLinks');
  // },
});
</script>
