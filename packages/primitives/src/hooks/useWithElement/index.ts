import React, { useEffect, useState } from 'react'

export const useWithElement = <T extends HTMLElement>(ref: React.RefObject<T>) => {
  const [width, setWidth] = useState<number | null>(null)

  useEffect(() => {
    if (!ref.current) return

    const observer = new ResizeObserver(([entry]) => {
      setWidth(entry.contentRect.width)
    })

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [ref])

  return width
}
