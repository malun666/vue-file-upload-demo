import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
let k = JSON.parse(sessionStorage.getItem(vuex));

const store = new Vuex.Store({
  state: {
    k,
    user: {
      id: 1,
      name: sessionStorage.getItem("name") || ""
    },
    Str: 124
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

store.subscribe((mutation, state) => {
  console.log(mutation, state);
});
export default store;
