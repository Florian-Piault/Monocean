<template>
  <div class="input-container">
    <input
      class="searchbar"
      type="text"
      autofocus
      placeholder="Écrivez votre message…"
      v-model="userInput"
      @keyup.enter="sendMessage()"
    />
    <button class="btn-send" @click="sendMessage()">
      <!-- <span> -->
      <img src="@/assets/send.svg" />
      <!-- </span> -->
      <!-- <span>Envoyer</span> -->
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

<style scope src="../assets/css/chatInput.css"></style>
