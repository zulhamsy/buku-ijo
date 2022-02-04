import { sp2DB } from '../firebase'
import { query, orderBy, where, getDocs } from 'firebase/firestore/lite'

async function fetchSP2(options = {}) {
  const { filter = [] } = options
  const q = query(sp2DB, where(...filter), orderBy('tanggal_komitmen', 'desc'))
  return await getDocs(q)
}

export { fetchSP2 }
