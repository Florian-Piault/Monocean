<template>
  <div class="frame">
    <ChatInput @sending="sendMessage($event)" />
    <div class="messages">
      <template v-for="(message, index) in messages">
        <ChatText :text="message.text" :who="message.sender" :key="index" />
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
import ChatText from "./chat/ChatText.vue";
/* eslint-disable */
export default {
  name: "ChatFrame",
  components: {
    ChatInput,
    ChatText,
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
    },
    setBotMessage(text, type, actions = []) {
      this.messages.push({
        text,
        type,
        sender: "bot",
        actions,
      });
    },
    sendMessage($event) {
      this.setUserMessage($event);
      this.setBotMessage("HAHAHAHA", "text");
    },
  },
};
</script>

<style scope src="../assets/css/chatFrame.css"></style>
