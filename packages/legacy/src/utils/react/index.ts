import { Children } from 'react'

/**
 * CWheck if it is a ref.
 * @description Check if it is an object (not null) and if it has a current property.
 * @param value
 * @returns
 */
export const isRef = <T = unknown>(value: unknown): value is React.RefObject<T> =>
  value !== null && typeof value === 'object' && 'current' in value

export const renderChildren = (children: React.ReactNode | ((ctx: unknown) => React.ReactNode), { ...props }) => {
  if (Array.isArray(children)) {
    return Children.map(children, (child) => {
      if (typeof child === 'function') {
        return child(props)
      }
      return child
    })
  }
  if (typeof children === 'function') return children(props)
  return children
}
