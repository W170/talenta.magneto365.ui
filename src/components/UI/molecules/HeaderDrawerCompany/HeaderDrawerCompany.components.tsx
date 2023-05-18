import React from 'react'
import { LogoComponent } from '../../atoms/Logo'
import { IHeaderDrawerCompany } from './HeaderDrawerCompany.interface'
import { withStyles } from './HeaderDrawerCompany.styles'

const Component: React.FC<IHeaderDrawerCompany> = ({
  className,
  logo,
  logoSize,
  alt,
  logoCompany,
  logoCompanyAlt,
  logoCompanySize,
  flag,
  flagAlt
}) => {
  return (
    <div className={className}>
      <LogoComponent logoSize={logoSize} logo={logo} alt={alt} />
      <LogoComponent logo={logoCompany} alt={logoCompanyAlt} logoSize={logoCompanySize} />
      <img src={flag} alt={flagAlt} />
    </div>
  )
}

export const HeaderDrawerCompany = withStyles(Component)
