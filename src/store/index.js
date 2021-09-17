import { createStore } from 'vuex'
import { suratDB, usersDB, auth, db } from '../firebase'
import {
  getDocs,
  query,
  orderBy,
  limit,
  doc,
  getDoc,
  runTransaction
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
    },
    updateSuratTerakhir(state, docSnap) {
      state.suratTerakhir = {
        nomor: docSnap.get('nomor_terakhir'),
        tanggal: {
          ND: docSnap.get('tanggal_terakhir.ND').toDate(),
          S: docSnap.get('tanggal_terakhir.S').toDate()
        }
      }
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
    async fetchSuratTerakhirInfo({ commit }) {
      const docRef = doc(suratDB, '--stats--')
      const docSnap = await getDoc(docRef)
      commit('updateSuratTerakhir', docSnap)
    },
    async fetchUsername({ commit }) {
      const docRef = doc(usersDB, auth.currentUser.uid)
      const docSnapshot = await getDoc(docRef)
      commit('changeUsername', docSnapshot.get('nama'))
    },
    async addSuratTransaction({ dispatch, state }, payload) {
      try {
        // akan direturn untuk diberikan ke DashboardForm / Alert
        let nomor_surat_ditambahkan
        await runTransaction(db, async (transaction) => {
          // get latest document status
          const lastDocRef = doc(suratDB, '--stats--')
          const lastDoc = await transaction.get(lastDocRef)
          let nomor_surat = lastDoc.get(`nomor_terakhir.${payload.jenis_surat}`)
          const tahunTerakhir = lastDoc
            .get(`tanggal_terakhir.${payload.jenis_surat}`)
            .toDate()
          // compare latest doc's year to current doc year, kalo beda nomor reset jadi 1
          if (payload.tahun_surat != tahunTerakhir.getFullYear()) {
            nomor_surat = 1
          } else {
            nomor_surat++
          }
          // write document
          transaction.set(doc(suratDB), {
            ...payload,
            nomor_surat,
            perekam: state.username
          })
          // update --stats-- doc
          transaction.update(
            lastDocRef,
            `nomor_terakhir.${payload.jenis_surat}`,
            nomor_surat,
            `tanggal_terakhir.${payload.jenis_surat}`,
            payload.tanggal_surat
          )
          nomor_surat_ditambahkan = nomor_surat
        })
        dispatch('fetchSuratTerakhirInfo')
        // return nomor surat yg baru aja ditambahin
        return nomor_surat_ditambahkan
      } catch (error) {
        throw 'Error'
      }
    }
  }
})

export default store
