import React from 'react'
import { IconProps } from './Icon.interface'
import style from './icon.module.scss'

const Component: React.FC<IconProps> = ({ icon, hover = false, size }) => {
  const isHover = hover ? style['magneto-ui-hover'] : ''
  return <img style={{ width: size + 'px' }} className={`${style['magneto-ui-icon']} ${isHover}`} src={icon} />
}
/**
 * Atom UI component of Icon for general purpose
 */
export const IconItem = Component
