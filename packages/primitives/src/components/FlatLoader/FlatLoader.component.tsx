import React, { useMemo } from 'react'
import { IFlatLoader } from './FlatLoader.interface'
import styles from './FlatLoader.module.scss'

const Component: React.FC<IFlatLoader> = ({ color, size, secondColor }) => {
  const loadingSize = useMemo(() => {
    if (size) {
      return {
        width: `${size}px`,
        height: `${size}px`
      }
    }
    return {
      width: '15px',
      height: '15px'
    }
  }, [size])

  return (
    <div
      style={{ ...loadingSize, border: `2px solid ${color || '#090467'}`, borderBottomColor: secondColor || 'white' }}
      className={styles['magneto-ui-flat-loader']}
    />
  )
}

export const FlatLoader = Component
