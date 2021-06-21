<template>
  <div class="container">
    <!-- LEFT -->
    <div class="profile-pic-left">
      <template v-if="who === 'bot'">
        <img class="profile-pic" src="../assets/profile-pic.svg" />
        <span class="profile-pseudo">{{ $store.getters.bot.name }}</span>
      </template>
    </div>

    <!-- MIDDLE -->
    <div class="text-container" :class="who" v-html="text"></div>

    <!-- RIGHT -->
    <div class="profile-pic-right">
      <template v-if="who === 'user'">
        <img class="profile-pic" src="../assets/profile-pic-user.svg" />
        <span class="profile-pseudo">{{ $store.getters.user.name }}</span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatText",
  props: ["text", "who"],
};
</script>

<style src="../assets/css/chatText.css"></style>
