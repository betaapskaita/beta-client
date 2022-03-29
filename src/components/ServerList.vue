<template>
  <div>
    <q-item
      clickable
      v-for="server in servers"
      :key="server.id"
      v-bind="server"
    >
      <q-item-section>
        <q-item-label lines="1">
          <span class="text-weight-medium">{{ server.name }}</span>
        </q-item-label>
        <q-item-label caption lines="1"> {{ getLink(server.id) }}</q-item-label>
      </q-item-section>

      <q-item-section top side>
        <div>
          <q-btn
            class="gt-xs"
            size="12px"
            flat
            round
            icon="power"
            v-on:click="setServer(server.id)"
          />

          <q-btn
            class="gt-xs"
            size="12px"
            flat
            round
            icon="edit"
            :to="{ name: 'edit', params: { id: server.id } }"
          />
        </div>
      </q-item-section>
    </q-item>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { useServersStore } from '../stores/servers-store';
import { storeToRefs } from 'pinia';

const store = useServersStore();

export default defineComponent({
  name: 'ServerList',

  methods: {
    setServer(id: number) {
      store.setActiveLink(id)?.then((ok) => {
        if (ok) {
          this.$router.push('/auth');
        }
      });
    },
  },

  setup() {
    const { linksList } = storeToRefs(store);

    return {
      servers: linksList,
      getLink: store.getLink,
    };
  },
});
</script>
