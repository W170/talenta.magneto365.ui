export const numberToCurrency = (currency: number) => {
  return `$${currency.toLocaleString('es-CO', {
    maximumFractionDigits: 3
  })}`
}
