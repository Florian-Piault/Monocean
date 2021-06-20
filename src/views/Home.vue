<template>
  <div class="home">
    <!-- <ChatBoard /> -->
    <ChatFrame />
    <img class="momo" src="@/assets/momo.gif" alt="Capitaine Momo" />
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import ChatBoard from "../components/chat/ChatBoard.vue";
import ChatFrame from "../components/ChatFrame.vue";

@Component({
  components: { ChatBoard, ChatFrame },
})
export default class Home extends Vue {}
</script>

<style scope src="../assets/css/home.css">
/* .home {
	height: calc(100vh - var(--headerHeight));
	display: flex;
	justify-content: center;
	align-items: center;
}

.container {
	display: flex;
	justify-content: center;
	align-items: center;
} */
</style>
