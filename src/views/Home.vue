<template>
  <div class="home" :class="filter ? 'is-blurred' : ''">
    <ChatFrame />
    <transition name="disappear">
      <img
        v-if="!$store.getters.firstMsg"
        class="momo"
        src="@/assets/momo.gif"
        alt="Capitaine Momo"
      />
    </transition>
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
