<template>
  <div class="chatbot-container">
    <div class="chatbot-story">
      <ChatMessages :discussion="messages" />
    </div>
    <div class="momo"><img src="@/assets/momo.gif" alt="" /></div>
    <div class="chatbot-input">
      <input type="text" v-model="userInput" @keyup.enter="send()" autofocus />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import ChatMessages from "./ChatMessages.vue";

export default {
  name: "ChatBoard",
  components: {
    ChatMessages,
  },
  data() {
    return {
      userInput: "",
      messages: [],
    };
  },
  mounted() {
    const actions = [
      {
        action: () => this.$store.commit("nextStep", 1),
        label: "Recherche",
      },
      {
        action: () => this.$store.commit("nextStep", 10),
        label: "Contact",
      },
    ];
    this.sendReply("Bonjour que recherches-tu ?", "button", actions);
  },
  methods: {
    scriptedReply() {
      const userInput = this.messages[this.messages.length - 1].text;
      const greetings = new RegExp(
        /(bonjour|bjr|salut|slt|hi|hello|coucou|cc|yo)($|\s)/gim
      );

      if (userInput.match(greetings)) return "Bonjour";
      return "je ne comprends pas";
    },
    sendUserMessage(text) {
      this.messages.push({
        text,
        sender: "user",
        type: "text",
        actions: [],
      });
    },
    sendReply(text, type, actions = null) {
      this.messages.push({
        text,
        sender: "reply",
        type,
        actions,
      });
    },
    send() {
      if (this.userInput === "") return;
      this.sendUserMessage(this.userInput);

      this.userInput = "";
      this.$store.commit("nextStep");
    },
    story() {
      // if (this.$store.getters.step === 1) console.log("Premier message");
      this.sendReply(this.scriptedReply(), "text");
    },
  },
  computed: {
    step() {
      return this.$store.getters.step;
    },
  },
  watch: {
    step() {
      this.story();
    },
  },
};
</script>

<style scoped>
.chatbot-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.chatbot-story {
  flex: 10;
  overflow: scroll;
}
.chatbot-input {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 4px 0px 4px 4px rgb(0 0 0 / 24%);
  z-index: 2;
}

.chatbot-input > input {
  width: 75vw;
  height: 100%;
  font-size: 2rem;
  padding: 16px 32px;
  margin: 16px;
  border: none;
  border-radius: 5555px;
}

.chatbot-input > input:active,
.chatbot-input > input:focus,
.chatbot-input > input:target,
.chatbot-input > input:focus-within {
  border: none;
  outline: none;
}

.momo > img {
  width: 256px;
  position: fixed;
  bottom: 63px;
  right: 256px;
}
</style>
