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

    displayMe() {
      activeApp = 'me'
      console.log(activeApp);
    },
    displayFood() {
      activeApp = 'food'
      console.log(activeApp);
    },
    displayGraph() {
      activeApp = 'graph'
      console.log(activeApp);
    }
  },
}
</script>

<template>
  <AppHeader @changePageMe="displayMe" @changePageFood="displayFood" @changePageGraph="displayGraph" />

  <main>
    <AppMe />
    <AppFood />
    <AppGraph />
  </main>
</template>

<style lang="scss">
@use './components/general.scss' as*;
</style>
