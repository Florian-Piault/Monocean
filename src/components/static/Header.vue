<template>
  <!-- <div class="container">
    <div class="sub-container">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <div class="sub-container auth">
      <div v-if="!isLogged">
        <button @click="showLoginBoard()">Login</button>
        <div class="dropdown" v-if="showLogin">
          <Login />
        </div>
      </div>
      <div v-if="!isLogged">
        <button @click="showRegisterBoard()">Register</button>
        <div class="dropdown" v-if="showRegister">
          <Register />
        </div>
      </div>
      <template v-if="isLogged">
        <Logout />
      </template>
    </div>
  </div> -->
  <div class="header-container">
    <div class="header-action left">
      <span class="header-action-item">
        <img src="@/assets/burger.svg" alt="burger menu" />
      </span>
    </div>
    <div class="header-logo">
      <img src="@/assets/logo.svg" alt="Monocean" />
    </div>
    <div class="header-action right">
      <span class="header-action-item">
        <img src="@/assets/heart.svg" alt="favorite" /> Favoris
      </span>
      <span class="header-action-item">
        <img src="@/assets/auth.svg" alt="authentification" /> Connexion
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class Header extends Vue {
  name = "Header";
}
</script>

<style src="../../assets/css/header.css">
/* .container {
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
} */
</style>
