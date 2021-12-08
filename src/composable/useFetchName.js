import { usersDB, auth } from '../firebase'
import { doc, getDoc } from 'firebase/firestore/lite'

async function useFetchName() {
  const docRef = doc(usersDB, auth.currentUser.uid)
  const docSnapshot = await getDoc(docRef)
  const nama = docSnapshot.get('nama')
  return nama
}

async function fetchName(store) {
  if (!store.state.username) {
    const nama = await useFetchName()
    store.commit('changeUsername', nama)
  }
}

export { useFetchName, fetchName }
