import React from 'react'
import styles from './Badge.modules.scss'
import { IBadge } from './Badge.interface'

const Component: React.FC<IBadge> = ({ number }) => {
  return (
    <p className={styles['badge-count']}>
      <span className={styles['badge-count__animation']} />
      {number && number}
    </p>
  )
}

export const Badge = Component
