import { createStore } from 'vuex'
import { suratDB, usersDB, auth } from '../firebase'
import {
  getDocs,
  query,
  orderBy,
  limit,
  addDoc,
  doc,
  getDoc
} from 'firebase/firestore/lite'

const store = createStore({
  state() {
    return {
      recentSurat: [],
      suratTerakhir: {},
      username: null
    }
  },
  mutations: {
    addRecentSurat(state, payload) {
      state.recentSurat.push(payload)
    },
    removeAllRecentSurat(state) {
      state.recentSurat = []
    },
    changeUsername(state, payload) {
      state.username = payload
    }
  },
  actions: {
    async fetchRecentSurat({ commit }) {
      const q = query(
        suratDB,
        orderBy('tanggal_surat', 'desc'),
        orderBy('nomor_surat', 'desc'),
        limit(5)
      )
      const querySnapshot = await getDocs(q)
      commit('removeAllRecentSurat')
      querySnapshot.forEach((doc) => {
        commit('addRecentSurat', doc.data())
      })
    },
    async fetchSuratTerakhirInfo({ state }) {
      const docRef = doc(suratDB, '--stats--')
      const docSnap = await getDoc(docRef)
      state.suratTerakhir = {
        nomor: docSnap.get('nomor_terakhir'),
        tanggal: {
          ND: docSnap.get('tanggal_terakhir.ND').toDate(),
          S: docSnap.get('tanggal_terakhir.S').toDate()
        }
      }
    },
    async addSurat({ dispatch, state }, payload) {
      // add to backend
      await addDoc(suratDB, {
        perekam: state.username,
        ...payload
      })
      // re-fetch historical data
      // dispatch('fetchRecentSurat')
      dispatch('fetchSuratTerakhirInfo')
    },
    async fetchUsername({ commit }) {
      const docRef = doc(usersDB, auth.currentUser.uid)
      const docSnapshot = await getDoc(docRef)
      commit('changeUsername', docSnapshot.get('nama'))
    }
  }
})

export default store
