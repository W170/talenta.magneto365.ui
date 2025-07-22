/**
 * CWheck if it is a ref.
 * @description Check if it is an object (not null) and if it has a current property.
 * @param value
 * @returns
 */
export const isRef = <T = unknown>(value: unknown): value is React.RefObject<T> =>
  value !== null && typeof value === 'object' && 'current' in value
