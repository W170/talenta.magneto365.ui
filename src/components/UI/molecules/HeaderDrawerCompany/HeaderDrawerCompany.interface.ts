import { ILogoComponent } from '../../atoms/Logo/Logo.interface'

export interface IHeaderDrawerCompany {
  className?: string
  logoProps: ILogoComponent
  logoCompany: string
  logoCompanySize: number
  logoCompanyAlt?: string
  spacing?: number
  flag?: string
  flagAlt?: string
}
