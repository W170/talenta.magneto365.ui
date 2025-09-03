import { useEffect } from 'react'

type UseFilterEventListenersProps = {
  /**
   * the filter is displayed horizontally
   */
  horizontal?: boolean
  /**
   * the filter items are currently shown
   */
  showItems: boolean
  /**
   * the tooltip is currently shown
   */
  showTooltip: boolean
  /**
   * the device is mobile
   */
  isMobile: boolean
  /**
   * the index of the filter
   */
  index: number
  /**
   * reference to the button element
   */
  buttonRef: React.RefObject<HTMLButtonElement>
  /**
   * function to set the current open filter index
   */
  setCurrentOpenFilter: (index: number) => void
  /**
   * function to set the visibility of filter items
   */
  setShowItems: (value: boolean) => void
  /**
   * function to set the visibility of the tooltip
   */
  setShowTooltip: (value: boolean) => void
  /**
   * function to set the drag scrolling state
   */
  setIsDragScrolling: (value: boolean) => void
  /**
   * function to calculate the positions of elements
   */
  calculatePositions: (element: HTMLButtonElement | null) => void
}

export const useFilterEventListeners = ({
  horizontal,
  showItems,
  showTooltip,
  isMobile,
  index,
  buttonRef,
  setCurrentOpenFilter,
  setShowItems,
  setShowTooltip,
  setIsDragScrolling,
  calculatePositions
}: UseFilterEventListenersProps) => {
  // Click outside handler
  useEffect(() => {
    if (horizontal && showItems && !isMobile) {
      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as Element

        if (buttonRef.current?.contains(target)) return

        const popover = document.querySelector(`[data-popover-index="${index}"]`)

        if (popover?.contains(target)) return

        setCurrentOpenFilter(99)
        setShowTooltip(false)
      }

      const timeoutId = setTimeout(() => {
        document.addEventListener('click', handleClickOutside, true)
      }, 100)

      return () => {
        clearTimeout(timeoutId)
        document.removeEventListener('click', handleClickOutside, true)
      }
    }
  }, [horizontal, showItems, isMobile, index, buttonRef, setCurrentOpenFilter, setShowTooltip])

  // Window scroll and resize
  useEffect(() => {
    if (horizontal && (showItems || showTooltip)) {
      const handleScroll = () => calculatePositions(buttonRef.current)

      window.addEventListener('scroll', handleScroll, true)
      window.addEventListener('resize', handleScroll)

      return () => {
        window.removeEventListener('scroll', handleScroll, true)
        window.removeEventListener('resize', handleScroll)
      }
    }
  }, [horizontal, showItems, showTooltip, calculatePositions, buttonRef])

  // Container scroll
  useEffect(() => {
    if (horizontal) {
      const handleContainerScroll = () => {
        setCurrentOpenFilter(99)
        setShowItems(false)
        setShowTooltip(false)
        setIsDragScrolling(true)

        setTimeout(() => setIsDragScrolling(false), 100)
      }

      const scrollContainer = document.querySelector('.magneto-ui-horizontal-filter__scroll-container')
      if (scrollContainer) {
        scrollContainer.addEventListener('scroll', handleContainerScroll, { passive: true })

        return () => {
          scrollContainer.removeEventListener('scroll', handleContainerScroll)
        }
      }
    }
  }, [horizontal, setCurrentOpenFilter, setShowItems, setShowTooltip, setIsDragScrolling])
}
