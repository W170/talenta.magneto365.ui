export function formatNumber<T>(num: T): T | string {
  if (typeof num !== 'number') return num
  return new Intl.NumberFormat().format(num)
}

export const notNumberRegex = new RegExp('\\D*', 'g')
