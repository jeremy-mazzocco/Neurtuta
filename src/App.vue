<script>
import { store } from './store';
import AppHeader from "./components/AppHeader.vue";
import AppMe from "./components/AppMe.vue";
import AppFood from "./components/AppFood.vue";
import AppGraph from "./components/AppGraph.vue";

export default {
  components: {

    AppHeader,
    AppMe,
    AppFood,
    AppGraph

  },
  data() {
    return {
      store,
    }
  },
  methods: {

  }
}


</script>

<template>
  <AppHeader />

  <main>
    <AppMe />
    <AppFood />
    <AppGraph />
  </main>
</template>

<style lang="scss">
@use './components/general.scss' as*;
</style>
