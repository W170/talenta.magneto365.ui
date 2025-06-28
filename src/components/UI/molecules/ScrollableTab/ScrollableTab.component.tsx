import React from 'react'
import { Button } from '@components/UI/atoms'
import styles from './ScrollableTab.module.scss'
import { IScrollableTab } from './ScrollableTab.interface'
import useScrollableTab from './hooks/useScrollableTab.hook'
import { ArrowLeft2, ArrowRight2 } from '@constants/icons.constants'

const Component: React.FC<IScrollableTab> = ({ children, scrollAmount = 100, className }) => {
  const { containerRef, showLeftArrow, showRightArrow, handleScrollByAmount } = useScrollableTab()

  return (
    <div className={`${styles['magneto-ui-scrollable-tab']} ${className}`} role="tablist">
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
