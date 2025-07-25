import { useCallback, useState } from 'react'

export interface Position {
  /**
   * vertical position
   */
  top: number
  /**
   * horizontal position
   */
  left: number
}

type UsePositionCalculationProps = {
  /**
   * reference to the button element
   */
  buttonRef: React.RefObject<HTMLButtonElement>
  /**
   * width of the popover
   */
  popoverWidth?: number
  /**
   * width of the tooltip
   */
  tooltipWidth?: number
}

export const usePositionCalculation = ({
  buttonRef,
  popoverWidth = 280,
  tooltipWidth = 100
}: UsePositionCalculationProps) => {
  const [popoverPosition, setPopoverPosition] = useState<Position>({ top: 0, left: 0 })
  const [tooltipPosition, setTooltipPosition] = useState<Position>({ top: 0, left: 0 })

  const calculatePositions = useCallback(
    (buttonElement?: HTMLButtonElement | null) => {
      const element = buttonElement || buttonRef.current
      if (!element) return

      const rect = element.getBoundingClientRect()
      const viewportWidth = window.innerWidth

      let popoverLeft = rect.left
      if (rect.left + popoverWidth > viewportWidth) {
        popoverLeft = viewportWidth - popoverWidth - 16
      }

      setPopoverPosition({
        top: rect.bottom + 2,
        left: popoverLeft
      })

      setTooltipPosition({
        top: rect.bottom + 2,
        left: rect.left + rect.width / 2 - tooltipWidth / 2
      })
    },
    [popoverWidth, tooltipWidth, buttonRef]
  )

  return {
    popoverPosition,
    tooltipPosition,
    calculatePositions
  }
}
