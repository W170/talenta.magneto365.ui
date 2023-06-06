import { ILogoComponent } from '../../atoms'

export interface IHeaderDrawerCompany {
  className?: string
  logoProps: ILogoComponent
  logoCompany: string
  logoCompanySize: number
  logoCompanyAlt?: string
  logo: string
  logoSize: number
  alt: string
  spacing?: number
  flag?: string
  flagAlt?: string
}
