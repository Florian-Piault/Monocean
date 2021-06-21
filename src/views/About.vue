<template>
  <div class="about" :class="filter ? 'is-blurred' : ''">
    <!-- <h1>This is an about page</h1> -->
    <h1>ABOUT</h1>
  </div>
</template>

<script>
export default {
  name: "About",
  props: ["filter"],
};
</script>

<style scoped src="../assets/css/variables.css">
.about {
  height: calc(100vh - var(--headerHeight));
  background-color: #65c5ff66;
  background-image: linear-gradient(353deg, #65c5ff66 0%, #80d0c766 99%);
}
</style>
