import React from 'react'
import styles from './LoadingDots.module.scss'
import { ILoadingDots } from './LoadingDots.interface'

const LoadingDots: React.FC<ILoadingDots> = ({ ...props }) => {
  return (
    <div className={styles.dots} {...props}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default LoadingDots
