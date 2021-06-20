<template>
  <div class="container">
    <div
      class="profile-pic-left"
      :class="who === 'user' ? 'user' : 'bot'"
    ></div>
    <!-- TEXT -->
    <div class="text-container" :class="who" v-html="text"></div>
    <div
      class="profile-pic-right"
      :class="who === 'user' ? 'user' : 'bot'"
    ></div>
  </div>
</template>

<script>
export default {
  name: "ChatText",
  props: ["text", "who"],
};
</script>

<style src="@/assets/css/chatText.css"></style>
