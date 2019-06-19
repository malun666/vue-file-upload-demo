import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      id: 1,
      name: "laoma"
    }
  },
  getters: {
    getUserName(state) {
      return state.user.name;
    }
  },
  mutations: {
    updateUserName(state, newName) {
      state.user.name = newName;
    },
    addPropStr(state, val) {
      state.Str = val;
    }
  },
  actions: {
    asyncEditName({ commit }) {
      setTimeout(() => {
        commit("updateUserName", "9999999");
      }, 1000);
    }
  }
});
