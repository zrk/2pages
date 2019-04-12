import Vue from 'vue';
import Vuex from 'vuex';

import auth from '@/mockAPI';

/* eslint
   no-shadow: ["error", { "allow": ["state", "getters"] }],
   no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["state"] }]
*/

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',

  state: {
    error: '',
    loggedIn: false,
    isLoggingIn: false,
  },

  mutations: {
    loginBegin(state) {
      state.isLoggingIn = true;
      state.error = '';
    },
    loginSuccess(state) {
      state.isLoggingIn = false;
      state.error = '';
      state.loggedIn = true;
    },
    loginFail(state) {
      state.isLoggingIn = false;
      state.error = 'Authentication failed';
      state.loggedIn = false;
    },
  },

  actions: {
    async login({ commit }, { email, password }) {
      try {
        commit('loginBegin');
        await auth(email, password);
        commit('loginSuccess');
      }
      catch {
        commit('loginFail');
        throw Error;
      }
    },
  },
});
