<template>
  <div class="container">
    <div class="text-container" :class="who">
      <span class="text-sender">
        {{ $store.user && $store.user.name ? $store.user.name : "" }}</span
      >
      <span>
        {{ text }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatText",
  props: ["text", "who"],
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  margin: 0 16px;
}

.text-container {
  padding: 8px 16px;
  margin: 8px;
  list-style: none;
  max-width: 512px;
  border-radius: 16px;
  flex-direction: column;
}

.text-sender {
  color: white;
}

.text-container.user {
  background-color: #8bc6ec;
  background-image: linear-gradient(135deg, #8bc6ec 0%, #9599e2 100%);

  display: flex;
  align-self: flex-start;
  overflow-wrap: anywhere;
}

.text-container.bot {
  background-color: #85ffbd;
  background-image: linear-gradient(45deg, #85ffbd 0%, #fffb7d 100%);
  display: flex;
  align-self: flex-end;
}
</style>
