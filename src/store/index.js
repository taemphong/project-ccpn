import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    formData: {
      mp_name1: "",
      mp_name2: "",
      mp_name3: "",
    },
  },
  mutations: {
    SET_FORM_DATA(state, payload) {
      state.formData = payload;
    },
  },
  actions: {
    saveFormData({ commit }, formData) {
      commit("SET_FORM_DATA", formData);
    },
  },
});
