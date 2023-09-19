import React, { Fragment } from 'react'
import { IconProps } from './Icon.interface'
import style from './icon.module.scss'

const Component: React.FC<IconProps> = ({ icon, hover = false, size, className }) => {
  const isHover = hover ? style['magneto-ui-hover'] : ''
  const customStyle = size ? { width: size + 'px' } : {}

  return (
    <Fragment>
      {icon && (
        <img
          style={customStyle}
          className={`${style['magneto-ui-icon']} ${isHover} ${className}`}
          src={icon}
          alt={`${icon} icon item`}
        />
      )}
    </Fragment>
  )
}
/**
 * Atom UI component of Icon for general purpose
 */
export const IconItem = Component
