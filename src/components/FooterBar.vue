<template>
  <q-footer>
    <q-toolbar>
      <div>
        {{ $t("footer.name") }} @ {{ year }}. {{ $t("footer.copyright") }}
      </div>
    </q-toolbar>
  </q-footer>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const startYear = 2022;
    const nowYear = new Date().getFullYear();

    let year = startYear.toString();
    if (startYear != nowYear) {
      year += " - " + nowYear.toString();
    }

    return {
      year,
    };
  },
});
</script>
