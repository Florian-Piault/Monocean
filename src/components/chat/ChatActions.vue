<template>
  <div class="btn-container">
    <button
      v-for="(button, index) in buttons"
      :key="index"
      class="btn-action"
      @click="button.action"
    >
      {{ button.label }}
    </button>
  </div>
</template>

<script>
export default {
  /* eslint-disable */
  name: "ChatActions",
  props: ["actions"],
  data() {
    return {
      buttons: undefined,
    };
  },
  mounted() {
    this.buttons = this.actions;
  },
};
</script>

<style scope src="../../assets/css/chatActions.css"></style>
