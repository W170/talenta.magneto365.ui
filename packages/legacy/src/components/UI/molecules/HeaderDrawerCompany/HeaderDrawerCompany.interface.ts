import { ILogoComponent } from '../../atoms'

export interface IHeaderDrawerCompany {
  className?: string
  logoProps: ILogoComponent
  logoCompany: string
  logoCompanyAlt?: string
  logo: string
  alt: string
  flag?: string
  flagAlt?: string
}
