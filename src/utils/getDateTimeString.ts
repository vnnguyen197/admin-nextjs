export default function getDateTimeString(date) {
  return new Date(date)
    .toLocaleString('vi-VN', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })

    .split(',')
}
