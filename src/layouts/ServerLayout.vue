<template>
  <q-layout view="lHh Lpr lFf" class="bg-white">
    <q-header elevated>
      <q-toolbar>
        <div>v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <FooterBar />

    <q-drawer side="left" model-value bordered class="bg-grey-2">
      <q-toolbar class="bg-grey-3">
        <q-avatar class="cursor-pointer">
          <img src="~assets/beta-logo.svg" />
        </q-avatar>

        <q-item-label header> {{ $t('server.listTitle') }} </q-item-label>

        <q-space />

        <q-btn round flat icon="more_vert">
          <q-menu auto-close :offset="[110, 8]">
            <q-list style="min-width: 150px">
              <q-item clickable>
                <q-item-section>Pridėti serverį</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>

      <q-list padding>
        <ServerList />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />

      <q-page-scroller position="bottom">
        <q-btn fab icon="keyboard_arrow_up" color="red" />
      </q-page-scroller>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import FooterBar from 'components/FooterBar.vue';
import ServerList from 'components/ServerList.vue';

export default defineComponent({
  name: 'ServerLayout',

  components: {
    FooterBar,
    ServerList,
  },
});
</script>
