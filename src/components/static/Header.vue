<template>
  <div class="container">
    <!-- PAGES -->
    <div class="sub-container">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <div class="sub-container auth">
      <!-- LOGIN -->
      <div v-if="!checkLogged()">
        <button @click="showLoginBoard()">Login</button>
        <div class="dropdown" v-if="showLogin">
          <Login />
        </div>
      </div>
      <!-- REGISTER -->
      <div v-if="!checkLogged()">
        <button @click="showRegisterBoard()">Register</button>
        <div class="dropdown" v-if="showRegister">
          <Register />
        </div>
      </div>
      <!-- LOGOUT -->
      <template v-if="checkLogged()">
        <Logout />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Register from "../Auth/Register.vue";
import Login from "../Auth/Login.vue";
import Logout from "../Auth/Logout.vue";

@Component({
  components: {
    Login,
    Register,
    Logout,
  },
})
export default class Header extends Vue {
  private showLogin = false;
  private showRegister = false;

  private showLoginBoard(): void {
    this.showLogin = !this.showLogin;
  }

  private showRegisterBoard(): void {
    this.showRegister = !this.showRegister;
  }

  private logout(): void {
    this.$cookies.remove("LOG_TOKEN");
  }

  private checkLogged(): boolean {
    return !!this.$cookies.get("LOG_TOKEN");
  }
}
</script>

<style scoped>
.container {
  display: flex;
  height: 64px;
  background-color: rgb(133, 195, 249);
}

.container > .sub-container {
  display: flex;
  flex: 1;
  align-items: center;
}

.container > .sub-container:nth-child(1) {
  justify-content: flex-start;
}

.container > .sub-container:nth-child(2) {
  justify-content: flex-end;
}

.container > .sub-container > a {
  text-decoration: none;
  color: #2c3e50;
  width: 128px;
  display: flex;
  justify-content: center;
}

.container > .sub-container.auth > div {
  width: 128px;
  display: flex;
  justify-content: center;
}

.dropdown {
  position: absolute;
}
</style>
