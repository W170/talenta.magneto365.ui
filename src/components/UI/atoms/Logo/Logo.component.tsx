import React from 'react'
import { ILogoComponent } from './Logo.interface'
import style from './logo.module.scss'

const Component: React.FC<ILogoComponent> = ({ isoView = false, logo, isoType, alt }) => {
  const logoWidth = isoView ? 'magneto-ui-isologo' : 'magneto-ui-logo'
  return (
    <img
      className={style[logoWidth]}
      src={isoView ? isoType : logo}
      alt={alt}
      width={isoView ? '25px' : '110px'}
      height={'auto'}
      loading="lazy"
    />
  )
}

export const LogoComponent = Component
