export function generateYearArray(additionalYears = 26, pastYears = 74) {
  const currentYear = new Date().getFullYear()
  const startYear = currentYear - pastYears
  const endYear = currentYear + additionalYears
  const yearsCount = endYear - startYear + 1

  let yearsArray = Array.from({ length: yearsCount }, (_, index) => startYear + index).reverse()

  if (currentYear > endYear) {
    const difference = currentYear - endYear
    yearsArray = yearsArray.slice(difference)
    const newYears = Array.from({ length: difference }, (_, index) => endYear + 1 + index)
    yearsArray = yearsArray.concat(newYears)
  }

  const yearsArrayToString = yearsArray.map((year) => year.toString())

  return { yearsArray, yearsArrayToString }
}
