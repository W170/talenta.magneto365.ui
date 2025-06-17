import { useState, useRef, useCallback, useEffect } from 'react'

interface useCarouselScrollProps {
  totalSections: number
  autoScroll: boolean
  scrollInterval: number
  isDisabled?: boolean
}

export const useCarouselScroll = ({
  totalSections,
  autoScroll,
  scrollInterval,
  isDisabled = false
}: useCarouselScrollProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null)

  const setupAutoScrollInterval = useCallback(() => {
    if (autoScrollIntervalRef.current) clearInterval(autoScrollIntervalRef.current)

    if (autoScroll && !isDisabled && totalSections > 1) {
      autoScrollIntervalRef.current = setInterval(
        () => setCurrentIndex((i) => (i + 1) % totalSections),
        scrollInterval * 1000
      )
    }
  }, [autoScroll, scrollInterval, isDisabled, totalSections])

  // Set up auto-scroll interval on mount and when dependencies change
  useEffect(() => {
    setupAutoScrollInterval()

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current)
      }
    }
  }, [setupAutoScrollInterval])

  // Adjust current index if it exceeds total sections
  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, Math.max(totalSections - 1, 0)))
  }, [totalSections])

  const changeSlide = (dir: 1 | -1) => {
    setCurrentIndex((i) => (i + dir + totalSections) % totalSections)
    setupAutoScrollInterval() // Reset interval when manually changing slides
  }

  return {
    currentIndex,
    changeSlide
  }
}
