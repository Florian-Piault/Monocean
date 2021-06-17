<template>
  <div class="home">
    <ChatBoard />
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import ChatBoard from "../components/chat/ChatBoard.vue";

@Component({
  components: { ChatBoard },
})
export default class Home extends Vue {}
</script>

<style scoped>
.home {
  height: calc(100vh - 64px);
  background-color: #65c5ff66;
  background-image: linear-gradient(353deg, #65c5ff66 0%, #80d0c766 99%);
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
