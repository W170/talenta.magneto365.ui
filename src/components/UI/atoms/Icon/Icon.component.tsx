import React, { Fragment, useState, useMemo } from 'react'
import { IconProps } from './Icon.interface'
import styles from './icon.module.scss'
import { classNames } from '@shared/utils/common'

const cx = classNames.bind(styles)

const Component: React.FC<IconProps> = ({
  fallbackIcon,
  showDefaultFallback = true,
  icon,
  hover = false,
  size,
  className,
  alt,
  isRotate
}) => {
  const [imageError, setImageError] = useState<boolean>(false)

  const handleError = () => {
    setImageError(true)
  }

  const iconSrc = useMemo(() => (!imageError ? icon ?? undefined : fallbackIcon), [fallbackIcon, imageError, icon])

  const isHover = hover ? cx('magneto-ui-hover') : ''
  const customStyle = size ? { width: size + 'px' } : {}

  if (!iconSrc && !showDefaultFallback) return null

  return (
    <Fragment>
      {icon && (
        <img
          data-name="icon"
          style={customStyle}
          className={cx('magneto-ui-icon', { 'magneto-ui-rotate': isRotate }, isHover, className)}
          src={iconSrc}
          alt={alt ?? `${icon} icon item`}
          loading="lazy"
          width={'25px'}
          onError={handleError}
        />
      )}
    </Fragment>
  )
}
/**
 * Atom UI component of Icon for general purpose
 */
export const IconItem = Component
