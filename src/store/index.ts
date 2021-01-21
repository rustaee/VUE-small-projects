import { createStore } from "vuex";

export default createStore({
  state: {
    responsiveMenu: false,
  },
  mutations: {
    menuStatus(state, payload){
      state.responsiveMenu = payload;
    }
  },
  actions: {},
  modules: {}
});
