import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    step: 0,
    user: {
      name: "user",
      type: "autre",
    },
    bot: {
      name: "MOMO",
    },
  },
  getters: {
    step(state) {
      return state.step;
    },
    user(state) {
      return state.user;
    },
    bot(state) {
      return state.bot;
    },
  },
  mutations: {
    nextStep(state, nb = 1) {
      state.step += nb;
    },
    setUserName(state, name) {
      state.user.name = name;
    },
    setUserType(state, type) {
      state.user.type = type;
    },
  },
  actions: {},
  modules: {},
});
