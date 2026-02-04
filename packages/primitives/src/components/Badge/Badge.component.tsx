import React from 'react'
import { classNames } from '@magneto365-ui/shared'
import styles from './Badge.module.scss'
import { IBadge } from './Badge.interface'

const cn = classNames.bind(styles)

const Component: React.FC<IBadge> = ({ number = undefined, className }) => {
  return (
    <p className={cn('magneto-ui-badge-count', className)}>
      <span className={cn('magneto-ui-badge-count__animation')} />
      {number && number}
    </p>
  )
}

export const Badge = Component
