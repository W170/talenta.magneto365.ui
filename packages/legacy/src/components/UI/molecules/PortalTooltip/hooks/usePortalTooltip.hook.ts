import { useContext, useEffect, useRef, useState } from 'react'
import { ContainerContext } from '@components/context/container/container.context'

const usePortalTooltip = (visible: boolean, enterDelay?: number, leaveDelay?: number) => {
  const [open, setOpen] = useState(false)
  const { container } = useContext(ContainerContext)
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
