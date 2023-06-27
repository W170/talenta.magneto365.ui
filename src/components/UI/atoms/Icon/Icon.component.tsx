import React from 'react'
import { IconProps } from './Icon.interface'
import style from './icon.module.scss'

const Component: React.FC<IconProps> = ({ Icon, assetsIcon, hover, size }) => {
  const isHover = hover ? style['magneto-ui-hover'] : ''
  return (
    <div>
      {Icon ? (
        <Icon style={{ width: size ? size + 'px' : '25px' }} className={`${style['magneto-ui-icon']} ${isHover}`} />
      ) : (
        <img className={`${style['magneto-ui-image']} ${isHover}`} src={assetsIcon} />
      )}
    </div>
  )
}
/**
 * Atom UI component of Icon for general purpose
 */
export const IconItem = Component
