<template>
  <div class="home">
    <ChatFrame />
    <img class="momo" src="@/assets/momo.gif" alt="Capitaine Momo" />
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import ChatFrame from "../components/ChatFrame.vue";

@Component({
  components: { ChatFrame },
})
export default class Home extends Vue {}
</script>

<style scope src="../assets/css/home.css"></style>
