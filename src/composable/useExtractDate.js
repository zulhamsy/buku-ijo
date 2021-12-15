function extractDate(tanggal) {
  const dateString = tanggal.toString()
  const [day, month, date, year] = dateString.split(' ')
  return {
    day,
    month,
    date,
    year
  }
}

export default extractDate
