<template>
  <q-item clickable v-on:click="connect(link)">
    <q-item-section>
      <q-item-label>{{ name }}</q-item-label>
      <q-item-label caption>
        {{ link }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ServerLink",

  props: {
    name: {
      type: String,
      required: true,
    },

    link: {
      type: String,
      required: true,
    },
  },

  methods: {
    connect: (connTo) => {
      console.log("connect", connTo);
    },
  },
});
</script>
