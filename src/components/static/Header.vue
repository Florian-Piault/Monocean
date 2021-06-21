<template>
  <div class="header-container" :class="filter ? 'is-blurred' : ''">
    <!-- LEFT LOGOS -->
    <div class="header-action left">
      <span class="header-action-item" @click="showMenu()">
        <img src="@/assets/burger.svg" alt="burger menu" />
      </span>
    </div>

    <!-- CENTER LOGO -->
    <div class="header-logo">
      <img src="@/assets/logo.svg" alt="Monocean" />
    </div>

    <!-- RIGHT LOGOS -->
    <div class="header-action right">
      <span class="header-action-item">
        <img src="@/assets/auth.svg" alt="authentification" />
        <span class="action-label">Connexion </span>
      </span>
      <span class="header-action-item">
        <img src="@/assets/info.svg" alt="help" />
        <span class="action-label">Aide </span>
      </span>
      <span class="header-action-item">
        <span class="action-label">FR </span>
        <img src="@/assets/down-arrow.svg" alt="language" />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  /* eslint-disable */
  name: "Header",
  props: ["filter"],
  methods: {
    showMenu() {
      this.$emit("showmenu");
    },
  },
};
</script>

<style src="../../assets/css/header.css"></style>
