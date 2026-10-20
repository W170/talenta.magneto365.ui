import { useContext, useEffect, useState } from 'react'
import { ContextApp } from '../../context/context.component'
import { DimType } from '../../../constants/responsive.constants'
import { buildMediaQueries, resolveResponsiveValue } from '../../../utils/responsive/responsive.util'

type Options<T> = Partial<Record<DimType, T>>

type MediaMatch = DimType | 'default'

/**
 * This hook allow to render a component based on the screen size.
 * Avoid use it to know the device type, only for screen size.
 *
 * @warning prefer always use css media queries instead of this hook.
 * @param defaultValue - The default value to return if no screen size matches the options.
 * @param options - The options to use to determine the screen size.
 * @returns The value to render based on the screen size.
 */
export const useMediaQuery = <T>(defaultValue: T, options?: Options<T>): T => {
  /**
   * This hook never should return or recieve data related to device type, only screen size.
   * Device type should be handled by user-agent or other custom logic.
   * This hooks is only for change bevaior based on screen size, not for device type.
   */
  const { device } = useContext(ContextApp)
  const [match, setMatch] = useState<MediaMatch | null>(null)

  useEffect(() => {
    if (options == undefined || typeof window === 'undefined' || typeof window.matchMedia !== 'function') return

    const queries = buildMediaQueries(options).map(({ query, type }) => ({
      list: window.matchMedia(query),
      type
    }))

    const update = () => {
      const current = queries.find(({ list }) => list.matches)
      setMatch(current ? current.type : 'default')
    }

    update()
    queries.forEach(({ list }) => list.addEventListener('change', update))

    return () => {
      queries.forEach(({ list }) => list.removeEventListener('change', update))
    }
  }, [options])

  if (options == undefined) return defaultValue
  if (match == null || (match !== 'default' && options[match] === undefined)) {
    return resolveResponsiveValue(device === 'mobile' ? 'xs' : 'hd', defaultValue, options)
  }
  if (match === 'default') return defaultValue

  return options[match] as T
}
