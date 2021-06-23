<template>
  <div class="contact-container" :class="filter ? 'is-blurred' : ''">
    <div class="contact">
      <img class="abs-blob" :src="require('@/assets/blob.svg')" />
      <img class="abs-blob2" :src="require('@/assets/blob2.svg')" />
      <img class="abs-momo" :src="require('@/assets/momo.gif')" />
      <div class="contact-item">
        <h2>Contactez-nous !</h2>
      </div>
      <div class="contact-item">
        <input class="half" type="text" placeholder="Prénom" />
        <input class="half" type="text" placeholder="Nom" />
      </div>
      <div class="contact-item">
        <input type="text" placeholder="N° téléphone" />
      </div>
      <div class="contact-item">
        <input type="text" placeholder="E-mail*" required />
      </div>
      <div class="contact-item">
        <textarea placeholder="Message*" required />
      </div>

      <div class="contact-item">
        <button class="send">
          <img src="../assets/bottle.svg" width="16px" />
          <span>Envoyer</span>
        </button>
      </div>
    </div>
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
