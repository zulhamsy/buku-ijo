import { sp2DB } from '../firebase'
import { query, orderBy, where, getDocs } from 'firebase/firestore/lite'

async function fetchSP2(options = {}) {
  const { filter = [], notif } = options
  let q
  if (notif) {
    q = query(
      sp2DB,
      where(...filter),
      where('is_done', '==', false),
      where('tanggal_komitmen', '<=', notif),
      orderBy('tanggal_komitmen', 'asc')
    )
  } else {
    q = query(
      sp2DB,
      where(...filter),
      where('is_done', '==', false),
      orderBy('tanggal_komitmen', 'asc')
    )
  }
  return await getDocs(q)
}

export { fetchSP2 }
