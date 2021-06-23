<template>
  <div class="fm-container">
    <div class="logo">
      <img src="../../assets/logo-light.svg" alt="" />
    </div>
    <div class="message">
      <p>Salut ! Je suis Capitaine MOMO.</p>
      <p>Bienvenue sur Monocean !</p>
      <br />
      <p>
        Vous trouverez ici toutes les ressources pédagogiques concernant l’océan
        et la mer ! Dites-moi ce que vous souhaitez chercher et je m’occupe du
        reste !
      </p>
      <br />
      <p>Avant de hisser les voiles, vous êtes :</p>
    </div>
    <div class="actions">
      <button
        @click="setType('prof')"
        :class="isActive('prof') ? 'active' : ''"
      >
        Enseignant(e)
      </button>
      <button
        @click="setType('student')"
        :class="isActive('student') ? 'active' : ''"
      >
        Élève
      </button>
      <button
        @click="setType('family')"
        :class="isActive('family') ? 'active' : ''"
      >
        Famille
      </button>
      <button
        @click="setType('curious')"
        :class="isActive('curious') ? 'active' : ''"
      >
        Curieux(se)
      </button>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "ChatFirstMsg",
  data() {
    return {
      active: true,
    };
  },
  methods: {
    setType(type) {
      if (type.match(/student/)) this.$store.commit("setUserType", "student");
      if (type.match(/prof/)) this.$store.commit("setUserType", "prof");
      if (type.match(/family/)) this.$store.commit("setUserType", "family");
      if (type.match(/curious/)) this.$store.commit("setUserType", "curious");

      this.active = false;

      this.$emit("typechosen");
    },
    isActive(type) {
      const chosenType = this.$store.getters.user.type;

      if (type.match(/student/) && type === chosenType) return true;
      if (type.match(/prof/) && type === chosenType) return true;
      if (type.match(/family/) && type === chosenType) return true;
      if (type.match(/curious/) && type === chosenType) return true;

      return false;
    },
  },
};
</script>

<style src="../../assets/css/chatFirstMsg.css"></style>
