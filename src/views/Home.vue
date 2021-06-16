<template>
  <div class="home">
    <h1>Poisson 🐟</h1>
    <h2>Bloub bloub... 🐠</h2>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Home extends Vue {}
</script>

<style scoped>
.home {
  height: calc(100vh - 64px);
  background-color: #65c5ff66;
  background-image: linear-gradient(353deg, #65c5ff66 0%, #80d0c766 99%);
}
</style>
