import { INavMenuAnalystRegion, INavMMenuAnalystRegionModal } from '../NavMenuAnalyst/NavMenuAnalyst.interface'

export interface INavMenuAnalystRegionModalProps {
  /**
   * Default language
   */
  defaultRegion: string
  /**
   * Texts of modal
   */
  regionModal: INavMMenuAnalystRegionModal
  /**
   * Region list
   */
  regions: INavMenuAnalystRegion[]
}
