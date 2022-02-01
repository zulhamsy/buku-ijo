import { suratDB, db } from '../firebase'
import { doc, runTransaction } from 'firebase/firestore/lite'

async function addSuratTransaction(payload) {
  try {
    // akan direturn untuk diberikan ke DashboardForm / Alert
    let nomor_surat_ditambahkan
    await runTransaction(db, async (transaction) => {
      // get latest document status
      const lastDocRef = doc(suratDB, '--stats--')
      const lastDoc = await transaction.get(lastDocRef)
      let nomor_surat = lastDoc.get(`nomor_terakhir.${payload.jenis_surat}`)
      let tanggal_terakhir_nd = lastDoc.get('tanggal_terakhir.ND')
      let tanggal_terakhir_s = lastDoc.get('tanggal_terakhir.S')
      const tahunTerakhir = lastDoc
        .get(`tanggal_terakhir.${payload.jenis_surat}`)
        .toDate()
      // compare latest doc's year to current doc year, kalo beda nomor reset jadi 1
      if (payload.tahun_surat != tahunTerakhir.getFullYear()) {
        nomor_surat = 1
      } else {
        nomor_surat++
      }
      // cek tanggal mana yang perlu diupdate
      if (payload.jenis_surat == 'ND') {
        tanggal_terakhir_nd = payload.tanggal_surat
      } else {
        tanggal_terakhir_s = payload.tanggal_surat
      }
      // write document
      transaction.set(doc(suratDB), {
        ...payload,
        nomor_surat,
        perekam: payload.username
      })
      // update --stats-- doc
      transaction.update(
        lastDocRef,
        `nomor_terakhir.${payload.jenis_surat}`,
        nomor_surat,
        'tanggal_terakhir.ND',
        tanggal_terakhir_nd,
        'tanggal_terakhir.S',
        tanggal_terakhir_s
      )
      nomor_surat_ditambahkan = nomor_surat
    })
    // return nomor surat yg baru aja ditambahin
    return nomor_surat_ditambahkan
  } catch (error) {
    throw 'Error'
  }
}

export { addSuratTransaction }