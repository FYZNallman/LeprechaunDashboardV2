import { createStore } from 'vuex';
import layout from './modules/layout.module';

const store = createStore({
  modules: {
    layout,
  },
  state: {
    auth: {
      loggedIn: !!localStorage.getItem('user'),
      user: JSON.parse(localStorage.getItem('user')),
    },
  },
  getters: {
    'auth/loggedIn': state => state.auth.loggedIn,
    'auth/user': state => state.auth.user,
  },
  actions: {
    'auth/logIn': ({ commit }, user) => {
      localStorage.setItem('user', JSON.stringify(user));
      commit('setLoggedIn', true);
      commit('setUser', user);
    },
    'auth/logOut': ({ commit }) => {
      localStorage.removeItem('user');
      commit('setLoggedIn', false);
      commit('setUser', null);
    },
  },
  mutations: {
    setLoggedIn(state, loggedIn) {
      state.auth.loggedIn = loggedIn;
    },
    setUser(state, user) {
      state.auth.user = user;
    },
  },
});

export default store;
