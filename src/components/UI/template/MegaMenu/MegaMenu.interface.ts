import { IMegaMenuSocialHeader } from '@components/UI/organism/MegaMenuSocialHeader'
import { IDrawerOrganism } from '../../organism'

export interface IMegaMenu {
  /**
   * Sets the props of the logout header component
   */
  headerProps: IMegaMenuSocialHeader
  /**
   * Sets the props of the drawer menu component
   */
  headerDrawerMenuProps: IDrawerOrganism
}
