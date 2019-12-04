import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    frutas: [
      { nombre: 'Manzana', cantidad:0, },
      { nombre: 'Pera', cantidad:1, },
      { nombre: 'Banana', cantidad:0, },
    ]
  },
  mutations: {
    aumentar(state, index){
      state.frutas[index].cantidad ++
    },
    clear(state) {
      state.frutas.forEach(fruta => {
        fruta.cantidad = 0
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
