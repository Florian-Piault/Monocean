<template>
  <div
    class="dd-wrapper"
    :style="{ top: coordinates.y + 'px', left: coordinates.x + 'px' }"
    ref="ddWrapper"
  >
    <div class="dd-container">
      <button class="dd-option" v-for="(button, index) in buttons" :key="index">
        <img class="dd-icon" :src="require(`@/assets/${button.icon}`)" />
        <div class="dd-label" v-html="button.label"></div>
      </button>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Dropdown",
  props: ["options", "element"],
  data() {
    return {
      elementRect: undefined,
      buttons: undefined,
      coordinates: {
        x: undefined,
        y: undefined,
      },
    };
  },
  created() {
    this.elementRect = this.element.getBoundingClientRect();
    this.buttons = this.options;
  },
  mounted() {
    const wrapperRect = this.$refs.ddWrapper.getBoundingClientRect();

    // ELEMENT POS - HEADER HEIGHT - WRAPPER HEIGHT - PADDING
    this.coordinates.y = this.elementRect.top - 95 - wrapperRect.height - 2;
    this.coordinates.x = this.elementRect.right - wrapperRect.width;
  },
};
</script>

<style scoped src="../assets/css/dropdown.css"></style>
