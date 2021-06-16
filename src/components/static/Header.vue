<template>
  <div class="container">
    <!-- PAGES -->
    <div class="sub-container">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <div class="sub-container auth">
      <!-- LOGIN -->
      <div v-if="!isLogged">
        <button @click="showLoginBoard()">Login</button>
        <div class="dropdown" v-if="showLogin">
          <Login />
        </div>
      </div>
      <!-- REGISTER -->
      <div v-if="!isLogged">
        <button @click="showRegisterBoard()">Register</button>
        <div class="dropdown" v-if="showRegister">
          <Register />
        </div>
      </div>
      <!-- LOGOUT -->
      <template v-if="isLogged">
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
  name = "Header";

  // DATA
  private showLogin = false;
  private showRegister = false;

  // COMPUTED
  get isLogged(): boolean {
    return !!this.$cookies.get("LOG_TOKEN");
  }

  // METHODS
  private showLoginBoard(): void {
    this.showLogin = !this.showLogin;
  }

  private showRegisterBoard(): void {
    this.showRegister = !this.showRegister;
  }
}
</script>

<style scoped>
.container {
  display: flex;
  height: 64px;
  box-shadow: 4px 0px 4px 4px rgba(0, 0, 0, 0.235);
  background-color: #65c5ff;
  background-image: linear-gradient(353deg, #65c5ff 0%, #80d0c7 99%);
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
  align-items: center;
  height: 64px;
  flex: 1;
}

.container > .sub-container > a:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.container > .sub-container.auth > div {
  width: 128px;
  display: flex;
  justify-content: center;
}

.dropdown {
  position: absolute;
  width: 128px;
  top: 64px;
  background-color: #65c5ff;
  background-image: linear-gradient(155deg, #65c5ff 0%, #80d0c7 99%);
}
</style>
