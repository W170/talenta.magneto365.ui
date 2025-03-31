export const numberToCurrency = (currency: number, withSymbol: boolean = true) => {
  return `${withSymbol ? '$' : ''}${currency.toLocaleString('es-CO', {
    maximumFractionDigits: 3
  })}`
}
