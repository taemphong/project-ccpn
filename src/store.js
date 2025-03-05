import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuthenticated: false,
  },
  getters: {
    isAuthenticated: state => state.isAuthenticated,
  },
  mutations: {
    setAuthentication(state, status) {
      state.isAuthenticated = status;
    },
  },
  actions: {
    login({ commit }) {
      commit('setAuthentication', true);
    },
    logout({ commit }) {
      commit('setAuthentication', false);
    },
  },
});