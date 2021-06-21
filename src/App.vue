<template>
  <div id="app">
    <Header @showmenu="showMenuEvent(true)" :filter="showMenu" />
    <template v-if="showMenu">
      <transition appear mode="in-out" name="slide">
        <BurgerMenu @hidemenu="showMenuEvent(false)" />
      </transition>
    </template>
    <router-view :filter="showMenu" />
  </div>
</template>

<script>
import Vue from "vue";
import Header from "./components/static/Header.vue";
import BurgerMenu from "./components/static/BurgerMenu.vue";

export default Vue.extend({
  name: "App",
  components: {
    Header,
    BurgerMenu,
  },
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    showMenuEvent(show) {
      this.showMenu = show;
    },
  },
});
</script>

<style src="./assets/css/variables.css">
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
} */
</style>
