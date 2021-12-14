function formatDate(tanggal) {
  const dateString = tanggal.toString()
  const [, month, date, year] = dateString.split(' ')
  return `${month} ${date}, ${year}`
}

export default formatDate
