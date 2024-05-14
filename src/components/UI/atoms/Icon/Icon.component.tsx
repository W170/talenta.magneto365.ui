import React, { Fragment } from 'react'
import { IconProps } from './Icon.interface'
import style from './icon.module.scss'

const Component: React.FC<IconProps> = ({ icon, hover = false, size, className, alt }) => {
  const isHover = hover ? style['magneto-ui-hover'] : ''
  const customStyle = size ? { width: size + 'px' } : {}

  return (
    <Fragment>
      {icon && (
        <img
          style={customStyle}
          className={`${style['magneto-ui-icon']} ${isHover} ${className}`}
          src={icon}
          alt={alt ?? `${icon} icon item`}
          loading="lazy"
          width={'25px'}
        />
      )}
    </Fragment>
  )
}
/**
 * Atom UI component of Icon for general purpose
 */
export const IconItem = Component
