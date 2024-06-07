export const isDate = (value: unknown): value is Date => {
  return value instanceof Date && !isNaN(value.valueOf())
}

/**
 * This validation works for Date objects that in its constructor
 * it pass string template as initial value.
 * @param value
 * @returns
 */
export const isInvalidDate = (value: unknown) => {
  return value instanceof Date && isNaN(value.valueOf())
}
