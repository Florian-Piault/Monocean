<template>
  <div class="frame">
    <ChatInput @sending="sendMessage($event)" />
    <div ref="messages" class="messages">
      <template v-for="(message, index) in messages">
        <ChatText
          :text="message.text"
          :who="message.sender"
          :key="'text-' + index"
        />
        <template v-if="message.active">
          <ChatActions :actions="message.actions" :key="'actions-' + index" />
        </template>
      </template>
    </div>
  </div>
</template>

<script>
// MODELS
/*
  messages: [{
    text: string,
    type: string,
    sender: string,
    actions: [{
      actions: method,
      label: string
    }]
  }]
*/

import ChatInput from "./ChatInput.vue";
import ChatText from "./ChatText.vue";
import ChatActions from "./ChatActions.vue";
/* eslint-disable */
export default {
  name: "ChatFrame",
  components: {
    ChatInput,
    ChatText,
    ChatActions,
  },
  data() {
    return {
      messages: [],
    };
  },
  methods: {
    setUserMessage(text) {
      this.messages.push({
        text,
        type: "text",
        sender: "user",
        actions: [],
      });
      this.$store.commit("nextStep");
      const divToScroll = this.$refs.messages;
      window.setTimeout(
        () => divToScroll.scrollTo(0, divToScroll.scrollHeight),
        1
      );
    },
    setBotMessage(text, type, actions = []) {
      this.messages.push({
        text,
        type,
        sender: "bot",
        active: type === "button" ? true : false,
        actions,
      });
      const divToScroll = this.$refs.messages;
      window.setTimeout(
        () => divToScroll.scrollTo(0, divToScroll.scrollHeight),
        1
      );
    },
    sendMessage($event) {
      this.setUserMessage($event);
      this.setBotMessage("HAHAHAHA", "text");
    },
  },
  mounted() {
    // WELCOME MESSAGE
    const actions = [
      {
        action: () => this.$store.commit("nextStep", 1),
        label: "Recherche",
      },
      {
        action: () => this.$store.commit("nextStep", 10),
        label: "Contact",
      },
      {
        action: () => this.$store.commit("nextStep", 10),
        label: "Contact",
      },
      {
        action: () => this.$store.commit("nextStep", 10),
        label: "Contact",
      },
      {
        action: () => this.$store.commit("nextStep", 10),
        label: "Contact",
      },
      {
        action: () => this.$store.commit("nextStep", 10),
        label: "Contact",
      },
    ];
    this.setBotMessage(
      `<p>Bonjour, je suis le Capitaine MOMO.<p>
      <br/>
       <p>Comment puis-je vous aider ?</p>`,
      "button",
      actions
    );
  },
  // SET STEP OF STORY
  computed: {
    step() {
      return this.$store.getters.step;
    },
  },
  watch: {
    step() {
      console.log(this.$store.getters.step);
    },
  },
};
</script>

<style scope src="../assets/css/chatFrame.css"></style>
