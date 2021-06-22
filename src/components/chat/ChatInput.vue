<template>
  <div class="input-container">
    <input
      class="searchbar"
      type="text"
      placeholder="Écrivez votre message…"
      v-model="userInput"
      @focus="setFocus(true)"
      @blur="setFocus(false)"
      @keyup.enter="sendMessage()"
    />
    <button v-if="isFocused" class="btn-send" @click="sendMessage()">
      <img src="@/assets/bottle.svg" height="24px" />
    </button>
    <button ref="ddBtnSend" v-else class="btn-send white" @click="showDrop()">
      <img src="@/assets/up-arrow.svg" width="16px" />
    </button>
  </div>
</template>

<script>
/* eslint-disable */

import Dropdown from "../Dropdown.vue";

export default {
  name: "ChatInput",
  components: { Dropdown },
  data() {
    return {
      userInput: "",
      isFocused: false,
    };
  },
  methods: {
    sendMessage() {
      if (this.userInput === "") return;
      this.$emit("sending", this.userInput).$nextTick((this.userInput = ""));
    },
    setFocus(focus) {
      this.isFocused = focus;
    },
    showDrop() {
      console.log(this.$refs.ddBtnSend);
      const options = [
        {
          label: "Activer le vocal",
          icon: "micro.svg",
        },
        {
          label: "Réinitialiser",
          icon: "reset.svg",
        },
        {
          label: "Effacer l'historique",
          icon: "trash.svg",
        },
      ];
      this.$emit("showevent", options);
    },
  },
};
</script>

<style scope src="../../assets/css/chatInput.css"></style>
