import React, { useMemo } from 'react'
import styles from './BarsChart.module.scss'
import { IBarsChart } from './BarsChart.interface'
import { BarChart } from '@components/UI/atoms'
import { IBarChart } from '@components/UI/atoms/BarChart/BarChart.interface'
import { numberToCurrency } from '@utils/currency/currency.util'

const Component: React.FC<IBarsChart> = ({ maxHeight, data, mean, texts }) => {
  const minValue = useMemo(() => data[0].bin[0], [data])
  const maxValue = useMemo(() => data[data.length - 1].bin[1], [data])

  const { talestBar, shorterBar } = useMemo(() => {
    const getHeightPercentage = ({ heightPercentage }: IBarChart) => heightPercentage
    const shorterBar = Math.min(...data.map(getHeightPercentage))
    const talestBar = Math.max(...data.map(getHeightPercentage))

    return { talestBar, shorterBar }
  }, [data])

  return (
    <div className={styles['magneto-ui-chart-bars']}>
      <div className={styles['magneto-ui-chart-bars__chart']}>
        {data.map((bar: IBarChart, key: number) => (
          <BarChart
            key={key}
            {...bar}
            jobText={texts.jobs}
            maxHeight={maxHeight}
            point={talestBar == bar.heightPercentage || shorterBar == bar.heightPercentage ? '#1a324c' : undefined}
          />
        ))}
      </div>
      <div className={styles['magneto-ui-chart-bars__minmax']}>
        <p> {numberToCurrency(minValue)}</p>
        <p> {texts.mean}</p>
        <p> {numberToCurrency(maxValue)}</p>
      </div>
      <div className={styles['magneto-ui-chart-bars__mean']}>
        <p> {numberToCurrency(mean) + ' / ' + texts.month}</p>
      </div>
    </div>
  )
}

export const BarsChart = Component
