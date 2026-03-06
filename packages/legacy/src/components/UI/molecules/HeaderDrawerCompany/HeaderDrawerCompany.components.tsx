import React from 'react'
import { LogoComponent } from '../../atoms'
import { IHeaderDrawerCompany } from './HeaderDrawerCompany.interface'
import style from './headerDrawerCompany.module.scss'

const Component: React.FC<IHeaderDrawerCompany> = ({ logo, alt, logoCompany, logoCompanyAlt, flag, flagAlt }) => {
  return (
    <div className={style['header-drawer-company']}>
      <LogoComponent logo={logo} alt={alt} />
      <LogoComponent logo={logoCompany} alt={logoCompanyAlt} />
      <img src={flag} alt={flagAlt} loading="lazy" width={'25px'} height={'20px'} />
    </div>
  )
}

export const HeaderDrawerCompany = Component
