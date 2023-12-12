import { useEffect, useRef, useState } from 'react'

const updateWidth = (
  element: HTMLElement,
  width: React.MutableRefObject<number>,
  onChange: React.Dispatch<React.SetStateAction<number>>
) => {
  const clientWidth = element.clientWidth
  const diff = Math.abs(width.current - clientWidth) > 100
  if (!diff) return
  width.current = clientWidth
  onChange((currentWidth) => clientWidth || currentWidth)
}

export const useResizeElement = (selector: string) => {
  const [width, setWidth] = useState(400)
  const refWidth = useRef(400)
  useEffect(() => {
    const element = document.querySelector(selector) as HTMLElement
    const observer = new ResizeObserver(() => updateWidth(element, refWidth, setWidth))
    observer.observe(element)
    setWidth(element.clientWidth)
    return () => {
      observer.unobserve(element)
      observer.disconnect()
    }
  }, [selector])

  return width
}
