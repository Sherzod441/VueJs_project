import { createStore } from 'vuex'

export default createStore({
  state: {
    likes: 0,
  },
  getters: {
    
  },
  mutations: {
    plus(state){
      state.likes+=1
    },
    minus(state){
      state.likes-=1
    }
  },
  actions: {
  },
  modules: {
  }
})
