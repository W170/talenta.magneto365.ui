import React, { useEffect, useState } from 'react'
import { Button } from '@components/UI/atoms'
import styles from './ScrollableTab.module.scss'
import { IScrollableTab } from './ScrollableTab.interface'
import { ArrowLeft2, ArrowRight2 } from '@constants/icons.constants'

const Component: React.FC<IScrollableTab> = ({ children, scrollAmount = 100 }) => {
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

  return (
    <div className={styles['magneto-ui-scrollable-tab']} role="tablist">
      {showLeftArrow && (
        <Button
          addHover
          suffixIcon={ArrowLeft2}
          className={`${styles['magneto-ui-scrollable-tab__arrow']} ${styles['magneto-ui-scrollable-tab__arrow--left']}`}
          onClick={() => handleScrollByAmount(-scrollAmount)}
        />
      )}
      <div ref={containerRef} className={styles['magneto-ui-scrollable-tab__container']}>
        {children}
      </div>
      {showRightArrow && (
        <Button
          addHover
          suffixIcon={ArrowRight2}
          className={`${styles['magneto-ui-scrollable-tab__arrow']} ${styles['magneto-ui-scrollable-tab__arrow--right']}`}
          onClick={() => handleScrollByAmount(scrollAmount)}
        />
      )}
    </div>
  )
}

/**
 * Molecule UI for ScrollableTab
 */
export const ScrollableTab = Component
