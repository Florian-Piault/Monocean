<template>
  <div class="message-container">
    <ul>
      <li
        v-for="(message, index) in messages"
        :key="index"
        :class="message.sender === 'user' ? 'msg-user' : 'msg-reply'"
      >
        {{ message.text }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["discussion"],
  // eslint-disable-next-line
  data() {
    return {
      messages: [],
    };
  },
  // eslint-disable-next-line
  mounted() {
    this.messages = this.discussion;
  },
};
</script>

<style scoped>
.message-container {
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
  border-radius: 666px;
}
.msg-user {
  background-color: #8bc6ec;
  background-image: linear-gradient(135deg, #8bc6ec 0%, #9599e2 100%);

  display: flex;
  align-self: flex-start;
}
.msg-reply {
  background-color: #85ffbd;
  background-image: linear-gradient(45deg, #85ffbd 0%, #fffb7d 100%);
  display: flex;
  align-self: flex-end;
}
</style>
