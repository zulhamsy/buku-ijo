import { usersDB, auth } from '../firebase'
import { doc, getDoc } from 'firebase/firestore/lite'

export default async function useFetchName() {
  const docRef = doc(usersDB, auth.currentUser.uid)
  const docSnapshot = await getDoc(docRef)
  const nama = docSnapshot.get('nama')
  return nama
}
