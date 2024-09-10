import React from 'react'
import { IDivider } from './Divider.interface'
import style from './divider.module.scss'

const Component: React.FC<IDivider> = ({ direction = 'HORIZONTAL' }) => {
  const inlineStyle = direction == 'HORIZONTAL' ? { width: 'calc(100% - 10px)', height: 1 } : { width: 1 }
  return <div style={inlineStyle} className={style.divider} />
}

/**
 * Atom UI Divider Component
 */
export const Divider = Component
