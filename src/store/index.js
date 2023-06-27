import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import app from './modules/app';
import user from './modules/user';
import lang from './modules/lang';

Vue.use(Vuex);
export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
  },
  getters: {
    sidebar: (state) => state.app.sidebar,
    account: (state) => state.user.account,
    username: (state) => state.user.username,
    type: (state) => state.user.type,
    token: (state) => state.user.token,
    locale: (state) => state.lang.locale,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    app, user, lang,
  },
});
