import React, { useEffect, useMemo, useRef, useState } from 'react'
import { IBarChart } from './BarChart.interface'
import styles from './BarChart.module.scss'
import { numberToCurrency } from '@utils/currency/currency.util'
import { TPopoverPosition } from './interfaces'
import { EPositions } from './enums'

const Component: React.FC<IBarChart> = ({
  bin: range,
  heightPercentage: percentage,
  jobText,
  maxHeight = 400,
  maxPercentage = 1
}) => {
  const barRef = useRef<HTMLDivElement>(null)
  const [isHover, setIsHover] = useState(false)
  const [minRange, maxRange] = useMemo(() => range, [range])
  const [popoverPosition, setPopoverPosition] = useState<TPopoverPosition>(EPositions.center)

  useEffect(() => {
    if (isHover && barRef.current) {
      const rect = barRef.current.getBoundingClientRect()
      const screenWidth = window.innerWidth
      if (rect.right > screenWidth - 50) {
        setPopoverPosition(EPositions.left)
      } else if (rect.left < 50) {
        setPopoverPosition(EPositions.right)
      } else {
        setPopoverPosition(EPositions.center)
      }
    }
  }, [isHover])

  const popoverContent = useMemo(
    () =>
      isHover && (
        <div className={`${styles['magneto-ui-chart-bar__popover']} ${styles[`popover-${popoverPosition}`]}`}>
          <div>{`${numberToCurrency(minRange)} - ${numberToCurrency(maxRange)}`}</div>
          <div>{`${Math.round(percentage * 100)}% ${jobText}`}</div>
        </div>
      ),
    [isHover, jobText, maxRange, minRange, percentage, popoverPosition]
  )

  return (
    <div
      style={{
        height: Math.max((percentage / maxPercentage) * maxHeight, 1)
      }}
      ref={barRef}
      className={styles['magneto-ui-chart-bar']}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {popoverContent}
    </div>
  )
}

export const BarChart = Component
