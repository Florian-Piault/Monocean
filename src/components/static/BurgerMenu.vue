<template>
  <div class="burger-container">
    <img class="burger-blob" src="../../assets/blob.svg" />
    <!-- TOP -->
    <div class="burger-top">
      <span class="burger-close" @click="hideMenu()">
        <img src="../../assets/close.svg" alt="close" />
      </span>
    </div>

    <!-- MIDDLE -->
    <div class="burger-mid">
      <span class="burger-items pseudo">
        <img src="../../assets/turtle.svg" />
        {{ $store.getters.user.name }}
        <img src="../../assets/edit.svg" />
      </span>
      <span class="burger-items"
        ><router-link to="/">Accueil</router-link></span
      >
      <span class="burger-items">À propos</span>
      <span class="burger-items">
        <router-link to="/contact">Contact</router-link>
      </span>
      <span class="burger-items">Q&A</span>
      <span class="burger-items link" @click="goToFDM()"
        >Fondation de la mer</span
      >
    </div>

    <!-- BOTTOM -->
    <div class="burger-bot">
      <button @click="goToDonation()" class="button-donation">
        Faire un don
      </button>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import router from "../../router";
export default {
  name: "BurgerMenu",
  components: { router },
  methods: {
    hideMenu() {
      this.$emit("hidemenu");
    },
    goToDonation() {
      window.open("https://www.fondationdelamer.org/don.php", "_blank");
    },
    goToFDM() {
      window.open("http://www.fondationdelamer.org/", "_blank");
    },
  },
};
</script>

<style scoped src="../../assets/css/BurgerMenu.css"></style>
