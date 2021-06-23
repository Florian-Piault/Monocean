<template>
  <div class="mod-wrapper">
    <div class="mod-container">
      <div class="mod-top">
        <span class="mod-close" @click="closeMod()">
          <img src="../assets/close.svg" alt="close" />
        </span>
      </div>
      <div class="mod-mid">
        <iframe
          src="https://www.nausicaa.fr/fiches-animaux/la-tortue-caouanne/"
          width="100%"
          height="100%"
          frameborder="0"
        ></iframe>
      </div>
      <!-- <div class="mod-bot"></div> -->
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Modale",
  props: ["options"],
  methods: {
    closeMod() {
      this.$emit("closeevent");
    },
  },
};
</script>

<style scoped src="../assets/css/modale.css"></style>
