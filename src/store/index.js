import { createStore } from 'vuex'
import { suratDB } from '../firebase'
import { getDocs, query, orderBy, limit } from 'firebase/firestore/lite'

const store = createStore({
  state() {
    return {
      recentSurat: []
    }
  },
  mutations: {
    addRecentSurat(state, payload) {
      state.recentSurat.push(payload)
    }
  },
  actions: {
    async fetchRecentSurat({ commit }) {
      const q = query(suratDB, orderBy('tanggal_surat', 'desc'), limit(5))
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        commit('addRecentSurat', doc.data())
      })
    }
  }
})

export default store
