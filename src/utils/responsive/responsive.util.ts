import { DimType, screenSize } from '../../constants/responsive.constants'

/**
 * This utility function is used to get the type of a screen size.
 * the expected order is: xxs, xs, sm, md, lg, xl, hd, xxl.
 */
const breakpointOrder = (Object.entries(screenSize) as [DimType, number][])
  .sort((a, b) => a[1] - b[1])
  .map(([type]) => type)

const queryBreakpoints = breakpointOrder.filter((type) => type !== 'xxs')

export const getType = (width: number): DimType => {
  if (width < screenSize.sm) return 'xs'
  if (width < screenSize.md) return 'sm'
  if (width < screenSize.lg) return 'md'
  if (width < screenSize.xl) return 'lg'
  if (width < screenSize.hd) return 'xl'
  if (width < screenSize.xxl) return 'hd'
  return 'xxl'
}

export const resolveResponsiveValue = <T>(type: DimType, defaultValue: T, options?: Partial<Record<DimType, T>>): T => {
  if (options == undefined) return defaultValue

  const size = screenSize[type]
  // find the first screen size that is greater than or equal to the given size and has a value in the options
  const screen = breakpointOrder.find((key) => screenSize[key] >= size && options[key] !== undefined)
  if (screen != undefined) return options[screen] as T

  return defaultValue
}

export interface MediaQueryOption<T> {
  query: string
  type: DimType
  value: T
}

const nextBreakpoint = (type: DimType): number | null => {
  const next = breakpointOrder[breakpointOrder.indexOf(type) + 1]
  return next ? screenSize[next] : null
}

const toQuery = (min: number, max: number | null): string => {
  if (min <= 0 && max == null) return '(min-width: 0px)'
  if (min <= 0 && max != null) return `(max-width: ${max - 1}px)`
  if (max == null) return `(min-width: ${min}px)`
  return `(min-width: ${min}px) and (max-width: ${max - 1}px)`
}

export const buildMediaQueries = <T>(options?: Partial<Record<DimType, T>>): MediaQueryOption<T>[] => {
  if (options == undefined) return []

  const keys = queryBreakpoints.filter((type) => options[type] !== undefined)

  return keys.map((type, index) => {
    const previous = index > 0 ? keys[index - 1] : undefined
    const min = previous ? nextBreakpoint(previous) ?? 0 : 0
    const max = nextBreakpoint(type)

    return {
      query: toQuery(min, max),
      type,
      value: options[type] as T
    }
  })
}
