import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'

Vue.use(Vuex)

const state = {
  count: 0,
  batters: {},
  batterID: 0
}

const getters = {
  batters: (state) => {
    return state.batters
  },
  batterID: (state) => {
    return state.batterID || null
  },
  batter: (state, id) => {
    return state.batters[id]
  },
  nextID: (state) => {
    return _.maxBy(state.batters, 'id') || 1
  }
}

// const mutations = {
//   setCurrentBatterID: function (state, payload) {
//     state.batterID = payload
//   }
// }

const mutations = {
  addBatter: (state, payload) => {
    const batter = {
      'id': payload.id,
      'name': payload.name,
      'position': payload.position,
      'lineup': payload.lineup,
      'gender': payload.gender
    }
    console.log(state)
    state.batters.unshift(batter)
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations
})
