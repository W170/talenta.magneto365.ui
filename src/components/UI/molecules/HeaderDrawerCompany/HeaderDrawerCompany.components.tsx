import React from 'react'
import { LogoComponent } from '../../atoms'
import { IHeaderDrawerCompany } from './HeaderDrawerCompany.interface'
import { withStyles } from './HeaderDrawerCompany.styles'

const Component: React.FC<IHeaderDrawerCompany> = ({
  className,
  logo,
  alt,
  logoCompany,
  logoCompanyAlt,
  flag,
  flagAlt
}) => {
  return (
    <div className={className}>
      <LogoComponent logo={logo} alt={alt} />
      <LogoComponent logo={logoCompany} alt={logoCompanyAlt} />
      <img src={flag} alt={flagAlt} />
    </div>
  )
}

export const HeaderDrawerCompany = withStyles(Component)
