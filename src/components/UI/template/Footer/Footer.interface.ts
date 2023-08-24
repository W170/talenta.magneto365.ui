import { IListMenuText } from '@components/UI/molecules/ListMenuText/ListMenuText.interface'
import { IMagnetoResolution } from '@components/UI/molecules/MagnetoResolution/MagnetoResolution.interface'
import { IRightsReservedText } from '@components/UI/molecules/RightsReservedText/RightsReservedText.interface'

export interface IFooter {
  followText: string
  magnetoResolutionProps: IMagnetoResolution
  rightsReservedProps: IRightsReservedText
  menuFooterLink: IListMenuText[]
}
