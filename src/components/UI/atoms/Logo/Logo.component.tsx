import React, { useState, useMemo } from 'react'
import { ILogoComponent } from './Logo.interface'
import style from './logo.module.scss'

const Component: React.FC<ILogoComponent> = ({
  fallbackImage,
  showDefaultFallback = true,
  isoView = false,
  logo,
  isoType,
  alt
}) => {
  const [imageError, setImageError] = useState<boolean>(false)

  const handleError = () => {
    setImageError(true)
  }

  const logoSrc = useMemo(
    () => (!imageError ? (isoView ? isoType : logo) : fallbackImage),
    [fallbackImage, imageError, isoType, isoView, logo]
  )

  const logoWidth = useMemo(() => (isoView ? 'magneto-ui-isologo' : 'magneto-ui-logo'), [isoView])

  if (!logoSrc && !showDefaultFallback) return null

  return (
    <img
      className={style[logoWidth]}
      src={logoSrc}
      alt={alt}
      width={isoView ? '25px' : '110px'}
      height="auto"
      loading="lazy"
      onError={handleError}
    />
  )
}

export const LogoComponent = Component
