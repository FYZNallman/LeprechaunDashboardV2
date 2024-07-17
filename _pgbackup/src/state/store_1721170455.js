import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    auth: {
      loggedIn: false,
    },
  },
  getters: {
    'auth/loggedIn': state => state.auth.loggedIn,
  },
  actions: {
    'auth/logOut': ({ commit }) => {
      commit('setLoggedIn', false);
    },
  },
  mutations: {
    setLoggedIn(state, loggedIn) {
      state.auth.loggedIn = loggedIn;
    },
  },
});

export default store;
