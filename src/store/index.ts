import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    step: 0,
    user: {
      name: "",
      type: "",
    },
  },
  getters: {
    step(state) {
      return state.step;
    },
    user(state) {
      return state.user;
    },
  },
  mutations: {
    nextStep(state, nb = 1) {
      state.step += nb;
    },
  },
  actions: {},
  modules: {},
});
