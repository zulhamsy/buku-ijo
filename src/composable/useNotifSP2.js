import { fetchSP2 } from './useFetchSP2'

function addDays(days) {
  const result = new Date()
  result.setDate(result.getDate() + days)
  return result
}

async function fetchSPJT(uid) {
  const maxdate = addDays(30)
  const sp2 = await fetchSP2({
    filter: ['pj', '==', uid],
    notif: maxdate
  })

  // console.log(sp2.docs[0].data())
  if (sp2.size == 1) {
    return `<span class="font-semibold">${
      sp2.docs[0].data().nama_wp
    }</span> akan jatuh tempo dalam waktu dekat. Semangat ye kerjanya!`
  }

  if (sp2.size > 1) {
    return `<span class="font-semibold">${
      sp2.docs[0].data().nama_wp
    }</span> dan <span class="font-semibold">${
      sp2.size - 1
    } lainnya</span> akan jatuh tempo dalam waktu dekat. Lembur dah lembur!`
  }

  if (!sp2.size) {
    return
  }
}

export { fetchSPJT }
