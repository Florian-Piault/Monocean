<template>
  <div class="home" :class="filter ? 'is-blurred' : ''">
    <div class="contact"></div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/static/Footer.vue";

export default {
  name: "Contact",
  components: { Footer },
  props: ["filter"],
};
</script>

<style scoped src="../assets/css/contact.css"></style>
