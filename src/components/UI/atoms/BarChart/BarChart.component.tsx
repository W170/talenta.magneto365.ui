import React, { useMemo, useRef } from 'react'
import { IBarChart } from './BarChart.interface'
import styles from './BarChart.module.scss'
import { numberToCurrency } from '@utils/currency/currency.util'
import { useHover } from '@components/hooks/useHover.hook'

const Component: React.FC<IBarChart> = ({ bin: range, y: percentage, jobText }) => {
  const barRef = useRef<HTMLDivElement>(null)
  const isHoverBar = useHover(barRef)
  const [minRange, maxRange] = useMemo(() => range, [range])

  const popoverContent = useMemo(
    () =>
      isHoverBar && (
        <div className={styles['magneto-ui-chart-bar__popover']}>
          <div>{`${numberToCurrency(minRange)} - ${numberToCurrency(maxRange)}`}</div>
          <div>{`${percentage * 100}% ${jobText}`}</div>
        </div>
      ),
    [isHoverBar, jobText, maxRange, minRange, percentage]
  )

  return (
    <div
      style={{
        height: percentage * 800
      }}
      ref={barRef}
      className={styles['magneto-ui-chart-bar']}
    >
      {popoverContent}
    </div>
  )
}

export const BarChart = Component
