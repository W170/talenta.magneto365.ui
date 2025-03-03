import React, { useMemo } from 'react'
import styles from './BarsChart.module.scss'
import { IBarsChart } from './BarsChart.interface'
import { BarChart } from '@components/UI/atoms'
import { IBarChart } from '@components/UI/atoms/BarChart/BarChart.interface'
import { numberToCurrency } from '@utils/currency/currency.util'

const Component: React.FC<IBarsChart> = ({ maxHeight, data, mean, texts }) => {
  const minValue = useMemo(() => data[0].bin[0], [data])
  const maxValue = useMemo(() => data[data.length - 1].bin[1], [data])
  return (
    <div className={styles['magneto-ui-chart-bars']}>
      <div className={styles['magneto-ui-chart-bars__chart']}>
        {data.map((bar: IBarChart, key: number) => (
          <BarChart key={key} {...bar} jobText={texts.jobs} maxHeight={maxHeight} />
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
