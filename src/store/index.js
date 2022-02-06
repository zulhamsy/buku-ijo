import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      recentSurat: [],
      sp2: [],
      suratTerakhir: {},
      username: null,
      notifKomitmen: {},
      notifSurat: {}
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
    },
    updateNotifSurat(state, payload) {
      state.notifSurat.content = payload.content
      state.notifSurat.tipe = payload.tipe
    },
    closeNotifSurat(state) {
      state.notifSurat = {}
    },
    addSP2(state, payload) {
      state.sp2.push(payload)
    },
    updateNotifKomitmen(state, payload) {
      state.notifKomitmen.content = payload.content
    }
  }
})

export default store
