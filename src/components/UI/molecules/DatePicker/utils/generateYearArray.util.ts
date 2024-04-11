export function generateYearArray() {
  const currentYear = new Date().getFullYear()
  const startYear = currentYear - 74
  const endYear = currentYear + 26
  const yearsCount = endYear - startYear + 1

  let yearsArray = Array.from({ length: yearsCount }, (_, index) => startYear + index).reverse()

  if (currentYear > endYear) {
    const difference = currentYear - endYear
    yearsArray = yearsArray.slice(difference)
    const newYears = Array.from({ length: difference }, (_, index) => endYear + 1 + index)
    yearsArray = yearsArray.concat(newYears)
  }

  const yearsArraytoString = yearsArray.map((year) => year.toString())

  return { yearsArray, yearsArraytoString }
}
