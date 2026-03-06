import {
  INavMMenuAnalystRegionModal,
  INavMenuAnalystRegion
} from '@components/UI/organism/NavMenuAnalyst/NavMenuAnalyst.interface'

export interface INavMenuAnalystRegionModalContentProps {
  /**
   * Default language
   */
  defaultRegion: string
  /**
   * Function when modal is closed
   */
  handleClose: (region: INavMenuAnalystRegion | null) => void
  /**
   * Texts of modal
   */
  regionModal: INavMMenuAnalystRegionModal
  /**
   * Region list
   */
  regions: INavMenuAnalystRegion[]
  /**
   * Selected region
   */
  selectedRegion: INavMenuAnalystRegion | null
  /**
   * Function when region is selected
   */
  setSelectedRegion: React.Dispatch<React.SetStateAction<INavMenuAnalystRegion | null>>
}
