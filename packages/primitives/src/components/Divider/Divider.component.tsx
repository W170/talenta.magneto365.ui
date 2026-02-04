import React from 'react'
import { classNames } from '@magneto365-ui/shared'
import { IDivider } from './Divider.interface'
import styles from './Divider.module.scss'

const cn = classNames.bind(styles)

const Component: React.FC<IDivider> = ({ direction = 'HORIZONTAL', spacing = 0 }) => {
  const inlineStyle =
    direction == 'HORIZONTAL'
      ? { width: 'calc(100% - 10px)', height: 1, margin: `${spacing}px 0px` }
      : { width: 1, margin: `0px ${spacing}px ` }
  return <div style={inlineStyle} className={cn('magneto-ui-divider')} />
}

/**
 * Atom UI Divider Component
 */
export const Divider = Component
