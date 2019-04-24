import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store =  new Vuex.Store({
  state: {
    count: 52,
    todos: [
      {
        id:2, 
        text: 'sdkdsjflsajfkdl',
        done: true
      },{
        id: 33,
        text: '我IE经纪人南方',
        done: false
      }
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)[0].text
    },
    doneTodoCount: state => {
      return state.todos.filter(todo => todo.done).length
    },
    anotherGetter :state => {
      return state.todos.filter(todo => !todo.done)
    },

  },
  mutations: {
      increment(state) {
        state.count ++
      },
      decrement(state){
        state.count --
      }
  },
  actions: {
    incrementAsync (context) {
      setTimeout((resolve) => {
        context.commit('increment')
        resolve()
      }, 1000);
    },

    // acitonA ({ commit }) {
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       commit('increment')
    //       resolve()
    //     }, 1000);
    //   })
    // }
  }
})


export default store
