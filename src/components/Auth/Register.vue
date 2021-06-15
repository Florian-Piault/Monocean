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

    <button type="submit">Login</button>
  </form>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class Login extends Vue {
  private lastname = "";
  private firstname = "";
  private email = "";
  private password = "";

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
