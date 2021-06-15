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

  private email = "";
  private password = "";

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
