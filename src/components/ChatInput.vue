<template>
  <div class="input-container">
    <input
      type="text"
      autofocus
      placeholder="Écrire votre message…"
      v-model="userInput"
      @keyup.enter="sendMessage()"
    />
    <button @click="sendMessage()">
      <span><img src="@/assets/send.svg" /></span>
      <span>Envoyer</span>
    </button>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "ChatInput",
  data() {
    return {
      userInput: "",
    };
  },
  methods: {
    sendMessage() {
      if (this.userInput === "") return;
      this.$emit("sending", this.userInput).$nextTick((this.userInput = ""));
    },
  },
};
</script>

<style src="../assets/css/chatInput.css"></style>
