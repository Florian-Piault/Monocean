<template>
  <div class="home" :class="filter ? 'is-blurred' : ''">
    <ChatFrame />
    <img class="momo" src="@/assets/momo.gif" alt="Capitaine Momo" />
    <!-- <iframe
      src="https://www.fondationdelamer.org/don.php"
      frameborder="0"
    ></iframe> -->
  </div>
</template>

<script>
import ChatFrame from "../components/chat/ChatFrame.vue";
export default {
  name: "Home",
  components: { ChatFrame },
  props: ["filter"],
};
</script>

<style scope src="../assets/css/home.css"></style>
