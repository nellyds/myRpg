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
    defense: 1,
    name: '',
    class: '',

  },
  mutations: {
    attacked(state, defenseMultiple) {
      console.log(defenseMultiple);
      state.hitPoints = state.hitPoints - (defenseMultiple-1+1)
  },
  name(state, name) {
    state.name = name;
  } 
},
  actions: {},
  modules: {}
});
