import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageNum: 0,
    initData: [],
  },
  mutations: {
    changeData(state, data) {
      state.initData = data
    },
    addNum(state) {
      state.pageNum += 1
    },
    delNum(state) {
      state.pageNum -= 1
    },
    firNum(state) {
      state.pageNum = 0;
    }
  },
  actions: {
  },
  modules: {
  }
})
