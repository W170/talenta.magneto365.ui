import React from 'react'
import { ILogoComponent } from './Logo.interface'
import { withStyles } from './Logos.styles'

const Component: React.FC<ILogoComponent> = ({ isoView = false, logo, isoLogo, alt, className }) => {
  return <div className={className}>{isoView ? <img src={isoLogo} alt={alt} /> : <img src={logo} alt={alt} />}</div>
}

export const LogoComponent = withStyles(Component)
