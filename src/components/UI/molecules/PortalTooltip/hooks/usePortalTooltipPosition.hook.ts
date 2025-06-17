import { useCallback, useEffect, useRef, useState } from 'react'

const usePortalTooltipPosition = (open: boolean, offset: number, position: string) => {
  const [coords, setCoords] = useState({ top: 0, left: 0 })
  const triggerRef = useRef<HTMLDivElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)

  const updatePosition = useCallback(() => {
    if (!triggerRef.current || !tooltipRef.current) return

    const triggerRect = triggerRef.current.getBoundingClientRect()
    const tooltipRect = tooltipRef.current.getBoundingClientRect()

    const scrollY = window.scrollY
    const scrollX = window.scrollX

    let top = 0
    let left = 0

    switch (position) {
      case 'top':
        top = triggerRect.top + scrollY - tooltipRect.height - offset
        left = triggerRect.left + scrollX + triggerRect.width / 2 - tooltipRect.width / 2
        break
      case 'bottom':
        top = triggerRect.bottom + scrollY + offset
        left = triggerRect.left + scrollX + triggerRect.width / 2 - tooltipRect.width / 2
        break
      case 'left':
        top = triggerRect.top + scrollY + triggerRect.height / 2 - tooltipRect.height / 2
        left = triggerRect.left + scrollX - tooltipRect.width - offset
        break
      case 'right':
        top = triggerRect.top + scrollY + triggerRect.height / 2 - tooltipRect.height / 2
        left = triggerRect.right + scrollX + offset
        break
    }

    setCoords({ top, left })
  }, [position, offset])

  useEffect(() => {
    if (open) updatePosition()
  }, [open, updatePosition])

  useEffect(() => {
    const handleResize = () => open && updatePosition()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [open, updatePosition])

  return {
    coords,
    triggerRef,
    tooltipRef
  }
}

export default usePortalTooltipPosition
