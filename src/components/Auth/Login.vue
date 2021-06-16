<template>
  <form @submit.prevent="checkSubmit()">
    <label for="">E-mail</label>
    <input type="email" name="email" id="email" v-model="email" />

    <label for="">Mot de passe</label>
    <input type="password" name="password" id="password" v-model="password" />

    <button type="submit">Login</button>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Login extends Vue {
  name = "Login";

  // DATA
  private email = "";
  private password = "";

  // METHODS
  private checkSubmit(): void {
    this.axios
      .post(
        "http://localhost:3000/auth/login",
        {
          email: this.email,
          password: this.password,
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => console.error(e));
  }
}
</script>

<style scoped>
input {
  width: 120px;
  margin: 0 4px;
}

label {
  margin: 0 4px;
}

button {
  float: right;
  margin: 4px;
}
</style>
