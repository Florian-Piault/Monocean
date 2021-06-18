<template>
  <!-- <div class="message-container">
    <ul>
      <li
        v-for="(message, index) in messages"
        :key="index"
        :class="message.sender === 'user' ? 'msg-user' : 'msg-reply'"
      >
        <span v-if="message.type === 'text'">
          {{ message.text }}
        </span>
        <template v-if="message.type === 'button'">
          <div class="message-actions">
            <span>{{ message.text }}</span>
            <div class="message-action">
              <button
                v-for="(action, index) in message.actions"
                :key="index"
                @click="action.action"
              >
                {{ action.label }}
              </button>
            </div>
          </div>
        </template>
      </li>
    </ul>
  </div> -->

  <div>
    <ul>
      <li v-for="(message, index) in messages" :key="index">
        <template v-if="message.type === 'text'">
          <ChatText :text="message.text" :who="message.sender" />
        </template>
        <template v-if="message.type === 'button'">
          <ChatActions :actions="message" />
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
import ChatText from "./ChatText.vue";
import ChatActions from "./ChatActions.vue";
export default {
  props: ["discussion"],
  components: { ChatActions, ChatText },
  // eslint-disable-next-line
  data() {
    return {
      messages: [],
    };
  },
  // eslint-disable-next-line
  mounted() {
    this.messages = this.discussion;
    this.userData = this.user;

    //   this.messages.push({
    //     text: "Vous êtes: \n",
    //     sender: "reply",
    //     type: "button",
    //     actions: [
    //       {
    //         action: () => console.log("button 1"),
    //         label: "button1",
    //       },
    //       {
    //         action: () => console.log("button 2"),
    //         label: "button2",
    //       },
    //       {
    //         action: () => console.log("button 3"),
    //         label: "button3",
    //       },
    //     ],
    //   });
  },
};
</script>

<style scoped>
/* .message-container {
  height: 100%;
  width: 100%;
}

ul {
  display: flex;
  flex-direction: column;
  margin: 0 16px;
}
li {
  padding: 8px 16px;
  margin: 8px;
  list-style: none;
  max-width: 512px;
  border-radius: 16px;
}

.msg-user {
  background-color: #8bc6ec;
  background-image: linear-gradient(135deg, #8bc6ec 0%, #9599e2 100%);

  display: flex;
  align-self: flex-start;
  overflow-wrap: anywhere;
}
.msg-reply {
  background-color: #85ffbd;
  background-image: linear-gradient(45deg, #85ffbd 0%, #fffb7d 100%);
  display: flex;
  align-self: flex-end;
}


.message-actions {
  display: flex;
  flex-direction: column;
}
.message-action {
  display: flex;
  flex-direction: row;
} */
</style>
