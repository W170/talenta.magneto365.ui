import { IMagnetoResolution } from '@components/UI/molecules/MagnetoResolution/MagnetoResolution.interface'
import { IRightsReservedText } from '@components/UI/molecules/RightsReservedText/RightsReservedText.interface'
import { IFooterMenuLinks } from '@components/UI/organism/FooterMenuLinks/FooterMenuLinks.interface'

export interface IFooter {
  followText: string
  magnetoResolutionProps: IMagnetoResolution
  rightsReservedProps: IRightsReservedText
  menuFooterLink: IFooterMenuLinks
}
