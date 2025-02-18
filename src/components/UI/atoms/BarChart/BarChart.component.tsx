import React, { useEffect, useMemo, useRef, useState } from 'react'
import { IBarChart } from './BarChart.interface'
import styles from './BarChart.module.scss'
import { numberToCurrency } from '@utils/currency/currency.util'
import { useHover } from '@components/hooks/useHover.hook'

const Component: React.FC<IBarChart> = ({ bin: range, y: percentage, jobText, maxHeight = 400, maxPercentage = 1 }) => {
  const barRef = useRef<HTMLDivElement>(null)
  const isHoverBar = useHover(barRef)
  const [minRange, maxRange] = useMemo(() => range, [range])
  const [popoverPosition, setPopoverPosition] = useState<'left' | 'right' | 'center'>('center')

  useEffect(() => {
    if (isHoverBar && barRef.current) {
      // Get the coordinates and dimensions of the bar on the screen
      const rect = barRef.current.getBoundingClientRect()
      // Get the total width of the browser window
      const screenWidth = window.innerWidth
      // Based on the edge, evaluate cases to prevent popover from being cut off
      if (rect.right > screenWidth - 50) {
        setPopoverPosition('left')
      } else if (rect.left < 50) {
        setPopoverPosition('right')
      } else {
        setPopoverPosition('center')
      }
    }
  }, [isHoverBar])

  const popoverContent = useMemo(
    () =>
      isHoverBar && (
        <div className={`${styles['magneto-ui-chart-bar__popover']} ${styles[`popover-${popoverPosition}`]}`}>
          <div>{`${numberToCurrency(minRange)} - ${numberToCurrency(maxRange)}`}</div>
          <div>{`${percentage * 100}% ${jobText}`}</div>
        </div>
      ),
    [isHoverBar, jobText, maxRange, minRange, percentage, popoverPosition]
  )

  return (
    <div
      style={{
        height: Math.max((percentage / maxPercentage) * maxHeight, 1)
      }}
      ref={barRef}
      className={styles['magneto-ui-chart-bar']}
    >
      {popoverContent}
    </div>
  )
}

export const BarChart = Component
