import React from 'react'
import { ILoadingDots } from './LoadingDots.interface'
import { classNames } from '@shared/utils/common'
import styles from './LoadingDots.module.scss'

const cx = classNames.bind(styles)

const LoadingDots: React.FC<ILoadingDots> = ({ className, classNames,...props }) => {
  return (
    <div className={cx(styles.dots, className)} {...props}>
      <span className={classNames?.dot}></span>
      <span className={classNames?.dot}></span>
      <span className={classNames?.dot}></span>
    </div>
  )
}

export default LoadingDots
