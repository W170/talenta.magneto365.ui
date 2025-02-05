import React, { useEffect, useState } from 'react'

export const useHover = <T extends HTMLElement>(ref: React.RefObject<T>): boolean => {
  const [hover, setHover] = useState<boolean>(false)

  useEffect(() => {
    if (!ref.current) return
    ref.current.addEventListener('mouseenter', () => {
      setHover(true)
    })
    ref.current.addEventListener('mouseleave', () => {
      setHover(false)
    })
  }, [ref])

  return hover
}
