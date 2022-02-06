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

  console.log(sp2.size)
}

export { fetchSPJT }
