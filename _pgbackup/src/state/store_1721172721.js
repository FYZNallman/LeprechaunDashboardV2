import { createStore } from 'vuex';

const store = createStore({
  state: {
    auth: {
      loggedIn: false,
    },
  },
  getters: {
    'auth/loggedIn': state => state.auth.loggedIn,
  },
  actions: {
    'auth/logIn': ({ commit }) => {
      commit('setLoggedIn', true);
    },
    'auth/logOut': ({ commit }) => {
      commit('setLoggedIn', false);
    },
    'auth/validate': ({ getters }) => {
      return new Promise((resolve) => {
        resolve(getters['auth/loggedIn']);
      });
    },
  },
  mutations: {
    setLoggedIn(state, loggedIn) {
      state.auth.loggedIn = loggedIn;
    },
  },
});

export default store;
