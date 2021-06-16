<template>
  <form @submit.prevent="checkSubmit()">
    <label for="">Prénom</label>
    <input
      type="firstname"
      name="firstname"
      id="firstname"
      v-model="firstname"
    />

    <label for="">Nom</label>
    <input type="lastname" name="lastname" id="lastname" v-model="lastname" />

    <label for="">E-mail</label>
    <input type="email" name="email" id="email" v-model="email" />

    <label for="">Mot de passe</label>
    <input type="password" name="password" id="password" v-model="password" />

    <button type="submit">Register</button>
  </form>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Register extends Vue {
  name = "Register";

  // DATA
  private lastname = "";
  private firstname = "";
  private email = "";
  private password = "";

  // METHODS
  private checkSubmit(): void {
    Vue.axios
      .post("http://localhost:3000/auth/register", {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password,
      })
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
