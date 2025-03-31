export const numberToCurrency = (currency: number, withSymbol = true) => {
  return `${withSymbol ? '$' : ''}${currency.toLocaleString('es-CO', {
    maximumFractionDigits: 3
  })}`
}
