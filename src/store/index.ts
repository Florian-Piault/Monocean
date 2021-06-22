import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    firstMsg: false,
    step: 0,
    user: {
      name: "user",
      type: "other",
    },
    bot: {
      name: "C. MOMO",
    },
  },
  getters: {
    firstMsg(state) {
      return state.firstMsg;
    },
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
    sendFirstMsg(state) {
      state.firstMsg = true;
    },
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
