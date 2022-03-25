<template>
  <q-layout view="lhh LpR lff">
    <FooterBar />

    <q-page-container>
      <router-view />

      <q-page-scroller position="bottom">
        <q-btn fab icon="keyboard_arrow_up" color="red" />
      </q-page-scroller>
    </q-page-container>
  </q-layout>
</template>

<script>
import FooterBar from "components/FooterBar.vue";

export default {
  name: "SelectServer",

  components: {
    FooterBar,
  },
};
</script>
