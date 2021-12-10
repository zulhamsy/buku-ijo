import { suratDB } from '../firebase'
import { query, orderBy, limit, where, getDocs } from 'firebase/firestore/lite'

async function fetchSurat(options = {}) {
  const { batas = 5, filter = [] } = options
  let q

  if (filter.length) {
    q = query(
      suratDB,
      where(...filter),
      orderBy('tanggal_surat', 'desc'),
      orderBy('nomor_surat', 'desc'),
      limit(batas)
    )
  } else {
    q = query(
      suratDB,
      orderBy('tanggal_surat', 'desc'),
      orderBy('nomor_surat', 'desc'),
      limit(batas)
    )
  }
  return await getDocs(q)
}

export { fetchSurat }
