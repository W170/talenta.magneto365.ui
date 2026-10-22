import { useContext, useEffect, useRef, useState } from 'react'
import { ContextApp } from '@components/context/context.component'

const usePortalTooltip = (visible: boolean, enterDelay?: number, leaveDelay?: number) => {
  const [open, setOpen] = useState(false)
  const { container } = useContext(ContextApp)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const tooltipContainer = container || document.body

  const showTooltip = () => {
    if (!visible) return
    timeoutRef.current && clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setOpen(true)
    }, enterDelay)
  }

  const hideTooltip = () => {
    if (!visible) return
    timeoutRef.current && clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setOpen(false)
    }, leaveDelay)
  }

  useEffect(() => {
    const timeout = timeoutRef.current
    return () => {
      timeout && clearTimeout(timeout)
    }
  }, [])

  return { open, tooltipContainer, showTooltip, hideTooltip }
}

export default usePortalTooltip
