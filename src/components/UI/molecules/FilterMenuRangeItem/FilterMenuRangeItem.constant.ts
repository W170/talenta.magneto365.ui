export const MAPPER_RANGE_TYPE = {
  number: {
    validator: (from: string, to: string) => {
      const fromNum = Number(from)
      const toNum = Number(to)
      const result = {
        from: isNaN(fromNum),
        to: isNaN(toNum) || toNum <= fromNum
      }
      if (!result.from && !result.to) return null
      return result
    },
    transformDefaultValue: (val: string | number | null | undefined) =>
      val !== undefined && val !== null ? `${val}` : '0'
  },
  date: {
    validator: (from: string, to: string) => {
      const fromDate = new Date(from)
      const toDate = new Date(to)
      !isNaN(fromDate.getTime()) && !isNaN(toDate.getTime()) && toDate.getTime() >= fromDate.getTime()
      const result = {
        from: isNaN(fromDate.getTime()),
        to: isNaN(toDate.getTime()) || toDate.getTime() < fromDate.getTime()
      }
      if (!result.from && !result.to) return null
      return result
    },
    transformDefaultValue: (val: string | number | null | undefined) =>
      val !== undefined && val !== null ? `${val}` : ''
  }
} as const

export const DEFAULT_RANGE_ERRORS = { from: false, to: false }
