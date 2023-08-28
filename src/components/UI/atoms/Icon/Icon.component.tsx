import React, { Fragment } from 'react'
import { IconProps } from './Icon.interface'
import style from './icon.module.scss'

const Component: React.FC<IconProps> = ({ icon, hover = false, size, className }) => {
  const isHover = hover ? style['magneto-ui-hover'] : ''
  return (
    <Fragment>
      {icon && (
        <img
          style={{ width: size + 'px' }}
          className={`${style['magneto-ui-icon']} ${isHover} ${className}`}
          src={icon}
        />
      )}
    </Fragment>
  )
}
/**
 * Atom UI component of Icon for general purpose
 */
export const IconItem = Component
