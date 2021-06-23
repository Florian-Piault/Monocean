<template>
  <div class="container">
    <div class="search-container">
      <div
        class="card"
        v-for="(search, index) in searches"
        :key="index"
        @click="showModale(search)"
      >
        <div
          class="card-img"
          :style="{
            'background-image':
              'url(' + require('@/assets/img/' + search.image) + ')',
          }"
        ></div>
        <div class="card-text">
          <div class="card-type">{{ search.type }}</div>
          <div class="card-title">{{ search.titre }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "ChatSearches",
  props: ["searches"],
  methods: {
    showModale(search) {
      this.$emit("showmodale", search);
    },
  },
};
</script>

<style scoped src="../../assets/css/chatSearches.css"></style>
