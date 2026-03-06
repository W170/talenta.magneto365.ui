export function parseDate(value: Date) {
  const initialMonth = value.getMonth().toString()
  const initialYear = value.getFullYear().toString()
  return { initialMonth, initialYear }
}
