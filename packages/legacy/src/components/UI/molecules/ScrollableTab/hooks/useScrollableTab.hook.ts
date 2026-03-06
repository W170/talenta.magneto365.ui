import React, { useState, useEffect } from 'react'

const useScrollableTab = () => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(false)

  const handleScrollByAmount = (amount: number) => containerRef.current?.scrollBy({ left: amount, behavior: 'smooth' })

  const updateArrowsVisibility = () => {
    const container = containerRef.current
    if (container) {
      const scrollLeft = container.scrollLeft
      const scrollWidth = container.scrollWidth
      const clientWidth = container.clientWidth

      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth)
    }
  }

  useEffect(() => {
    updateArrowsVisibility()
    const container = containerRef.current
    if (container) {
      container.addEventListener('scroll', updateArrowsVisibility)
      window.addEventListener('resize', updateArrowsVisibility)
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', updateArrowsVisibility)
        window.removeEventListener('resize', updateArrowsVisibility)
      }
    }
  }, [])

  return {
    showLeftArrow,
    showRightArrow,
    containerRef,
    handleScrollByAmount
  }
}

export default useScrollableTab
