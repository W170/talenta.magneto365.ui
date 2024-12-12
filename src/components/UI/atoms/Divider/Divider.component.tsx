import React from 'react'
import { IDivider } from './Divider.interface'
import style from './divider.module.scss'

const Component: React.FC<IDivider> = ({ direction = 'HORIZONTAL', spacing = 0 }) => {
  const inlineStyle =
    direction == 'HORIZONTAL'
      ? { width: 'calc(100% - 10px)', height: 1, margin: `${spacing}px 0px` }
      : { width: 1, margin: `0px ${spacing}px ` }
  return <div style={inlineStyle} className={style.divider} />
}

/**
 * Atom UI Divider Component
 */
export const Divider = Component
