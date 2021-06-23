<template>
  <div class="f-wrapper">
    <div class="f-container">
      <div class="newsletter">
        <span class="newsletter-txt"
          >Aimez-vous l’Océan ? Abonnez-vous à la newsletter de la Fondation de
          la mer</span
        >
        <div class="newsletter-btn">
          <input type="email" />
          <button enterkeyhint="send">Hissez les voiles</button>
        </div>
      </div>
      <div class="logos">
        <img src="../../assets/fdm.svg" alt="" />
        <img src="../../assets/educ-nat.svg" alt="" />
        <img src="../../assets/marine-nat.svg" alt="" />
      </div>
      <div class="links">
        <div>RGPD</div>
        <div>Mentions légales</div>
        <div>Fondation de la Mer</div>
        <div>Le Centre d’Études Stratégiques de la Marine</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped src="../../assets/css/footer.css"></style>
