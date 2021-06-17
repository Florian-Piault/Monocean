<template>
  <div class="chatbot-container">
    <div class="chatbot-story">
      <ChatMessages :discussion="messages" />
    </div>
    <div class="chatbot-input">
      <input type="text" v-model="userInput" @keyup.enter="send()" autofocus />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ChatMessages from "./ChatMessages.vue";

@Component({
  components: {
    ChatMessages,
  },
})
export default class ChatBoard extends Vue {
  name = "ChatBoard";
  private userInput = "";
  private messages: Array<{ text: string; sender: string }> = [];

  private randomReply(): { text: string; sender: string } {
    const random = Math.floor(Math.random() * 10);
    const reply = [
      "Bonjour je suis un message",
      "Je suis le Capitaine Momo",
      "Êtes-vous un étudiant ?",
      "Êtes-vous un étudiant ?",
      "Are you OK ?",
      "What ??",
      "Je suis en train de manger des pâtes",
      "👻",
      "AHAHAHAHA",
      "Bonjour le monde",
    ];
    return { text: reply[random], sender: "reply" };
  }

  private scriptedReply(): string {
    const greetings = new RegExp(
      /(bonjour|bjr|salut|slt|hi|hello|coucou|cc)($|\s)/gm
    );

    if (this.userInput.match(greetings)) return "Bonjour";
    return "je ne comprends pas";
  }

  private send(): void {
    if (this.userInput === "") return;
    this.messages.push({
      text: this.userInput,
      sender: "user",
    });
    // this.messages.push(this.randomReply());
    this.messages.push({ text: this.scriptedReply(), sender: "reply" });
    this.userInput = "";
  }
}
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
</style>
