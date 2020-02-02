import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    heroes:[
      {'name': 'Locke', 'HP': 20, },
      {'name': 'Celes', 'HP': 25}
          ],
    enemies: [
      {},
      
    ],
    hitPoints: 20,
    playerAtk: 3,

  },
  mutations: {
    change(state) {

      state.hitPoints = state.hitPoints -1;
  }},
  actions: {},
  modules: {}
});
