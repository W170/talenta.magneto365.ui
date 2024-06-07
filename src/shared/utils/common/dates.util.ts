export const isDate = (value: unknown): value is Date => {
  return value instanceof Date && !isNaN(value.valueOf())
}

export const isInvalidDate = (value: unknown) => {
  return value instanceof Date && isNaN(value.valueOf())
}
