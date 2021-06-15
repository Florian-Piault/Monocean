<template>
  <div>
    <button @click="logout()">Logout</button>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class Logout extends Vue {
  private logout(): void {
    this.axios
      .get("http://localhost:3000/auth/logout")
      .then((d) => console.log(d))
      .catch((e) => console.error(e));
  }
}
</script>
