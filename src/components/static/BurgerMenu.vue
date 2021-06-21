<template>
  <div class="burger-container">
    <!-- TOP -->
    <div class="burger-top">
      <span class="burger-close" @click="hideMenu()">
        <img src="../../assets/close.svg" alt="close" />
      </span>
    </div>

    <!-- MIDDLE -->
    <div class="burger-mid">
      <span class="burger-items">Accueil</span>
      <span class="burger-items">À propos</span>
      <span class="burger-items">Contact</span>
      <span class="burger-items">Fondation de la mer</span>
    </div>

    <!-- BOTTOM -->
    <div class="burger-bot">
      <button class="button-donation">Faire un don</button>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "BurgerMenu",
  methods: {
    hideMenu() {
      this.$emit("hidemenu");
    },
  },
};
</script>

<style scope src="../../assets/css/BurgerMenu.css"></style>
