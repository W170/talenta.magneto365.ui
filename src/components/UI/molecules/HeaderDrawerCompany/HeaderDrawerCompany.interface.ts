import { ILogoComponent } from '../../atoms'

export interface IHeaderDrawerCompany {
  className?: string
  logoProps: ILogoComponent
  logoCompany: string
  logoCompanyAlt?: string
  logo: string
  alt: string
  spacing?: number
  flag?: string
  flagAlt?: string
}
