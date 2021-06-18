<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <h1>LOGIN</h1>
      <Login />
      <h1>REGISTER</h1>
      <Register v-if="false" />
    </div>
    <router-view /> -->
    <Header />

    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "./components/static/Header.vue";
// import Login from "./components/Auth/Login.vue";
// import Register from "./components/Auth/Register.vue";
export default Vue.extend({
  components: {
    Header,
    // Login,
    // Register,
  },
});
</script>

<style src="@/assets/css/reset.css">
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
} */
</style>
