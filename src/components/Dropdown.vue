<template>
  <div class="dd-wrapper">
    <div class="dd-container">
      <!-- <div class="dd-option" v-for="(option, index) in options" :key="index"> -->
      <button class="dd-option" v-for="(option, index) in options" :key="index">
        <img class="dd-icon" :src="require(`@/assets/${option.icon}`)" />
        <div class="dd-label" v-html="option.label"></div>
      </button>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Dropdown",
  props: ["options", "position"],
  mounted() {
    console.log(this.options);
  },
};
</script>

<style scoped src="../assets/css/dropdown.css"></style>
