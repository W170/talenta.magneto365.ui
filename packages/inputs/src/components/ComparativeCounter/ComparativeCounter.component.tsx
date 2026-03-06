import React, { useMemo } from 'react'
import { IComparativeCounter } from './ComparativeCounter.interface'
import styles from './ComparativeCounter.module.scss'

const nf = new Intl.NumberFormat('de-DE')

const Component: React.FC<IComparativeCounter> = ({ current = 0, max = 0, position = 'left', className = '' }) => {
  const currentHigherMax = useMemo(() => {
    return current > max
  }, [current, max])

  return (
    <p
      style={{ textAlign: position }}
      className={`${styles['magneto-ui--comparative-counter']} ${
        currentHigherMax ? styles['error-label'] : ''
      } ${className}`}
    >
      {nf.format(current)}
      <span> / {nf.format(max)}</span>
    </p>
  )
}

export const ComparativeCounter = Component
