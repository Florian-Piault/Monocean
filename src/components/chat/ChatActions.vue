<template>
  <div class="container">
    <span class="text-container">{{ actions.text }}</span>
    <div class="btn-container" v-if="isActive">
      <div v-for="(action, index) in actions.actions" :key="index">
        <button @click="clickAction(action.action)">
          {{ action.label }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "ChatActions",
  props: ["actions"],
  data() {
    return {
      isActive: true,
    };
  },
  methods: {
    clickAction(method) {
      method();
      this.isActive = false;
    },
  },
};
</script>

<style scoped>
.container {
  margin: 0 16px;
  display: flex;
  flex-direction: column;
}

.btn-container {
  display: flex;
  align-self: flex-end;
  max-width: 512px;
}

.text-container {
  padding: 8px 16px;
  margin: 8px;
  list-style: none;

  border-radius: 16px;
  flex-direction: column;
  max-width: 512px;
  background-color: #85ffbd;
  background-image: linear-gradient(45deg, #85ffbd 0%, #fffb7d 100%);
  display: flex;
  align-self: flex-end;
}
</style>
