import React, { useEffect, useState } from 'react'
import { OverflowPosition } from './overflowPosition.interface'
import { overflowStrategies } from './overflowStrategies'

export const useElementOverflow = <T extends HTMLElement>(
  ref: React.RefObject<T>,
  position: OverflowPosition,
  deps: React.DependencyList = []
): boolean => {
  const [isOverflown, setIsOverflown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const strategy = overflowStrategies[position]

    const updateOverflow = () => {
      setIsOverflown(strategy(el))
    }

    updateOverflow()

    el.addEventListener('scroll', updateOverflow)
    window.addEventListener('resize', updateOverflow)

    const observer = new ResizeObserver(updateOverflow)
    observer.observe(el)

    return () => {
      el.removeEventListener('scroll', updateOverflow)
      window.removeEventListener('resize', updateOverflow)
      observer.disconnect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, position, ...deps])

  return isOverflown
}
