import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
//import SecureLS from "secure-ls";
import * as Cookies from "js-cookie";

// const ls = new SecureLS({
//   isCompression: false,
// });

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    jobs: [],
    jobForChange: {},
    searchByCategoria: null,
  },
  mutations: {
    jobMutations(state, payload) {
      state.jobs.push({ ...payload });
    },
    newJobMut(state, payload) {
      state.jobs = [];
      state.jobs = payload;
    },
    deleteItem(state, deleteItem) {
      Vue.delete(state.jobs, deleteItem);
    },
    updateItem(state, { index, task }) {
      Vue.set(state.jobs, index, task);
    },
    jobForChange(state, payload) {
      state.jobForChange = payload;
    },
    menuLeft(state, payload) {
      state.searchByCategoria = payload;
    },
  },
  actions: {
    jobsList({ commit }, payload) {
      commit(`jobMutations`, payload);
    },
    // updateJobLocalStorage({ commit }, payload) {

    // }
  },
  getters: {
    getterJobs: (state) => state.jobs,
    getterJobsQuantify: (state) => (id) =>
      state.jobs.filter((value) => value.num === id && value.check !== 1),
    getterJobsForChange: (state) => (id) =>
      state.jobs.find((value) => value.title === id),
    gettersMenuLeft: (state) => state.searchByCategoria,
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: (key) => Cookies.get(key),
        setItem: (key, value) =>
          Cookies.set(key, value, { expires: 3, secure: true }),
        removeItem: (key) => Cookies.remove(key),
      },
    }),
  ],
  modules: {},
});
