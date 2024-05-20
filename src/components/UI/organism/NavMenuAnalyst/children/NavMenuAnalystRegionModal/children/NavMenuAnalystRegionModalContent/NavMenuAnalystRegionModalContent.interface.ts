import {
  INavMMenuAnalystRegionModal,
  INavMenuAnalystRegion
} from '@components/UI/organism/NavMenuAnalyst/NavMenuAnalyst.interface'

export interface INavMenuAnalystRegionModalContentProps {
  defaultRegion: string
  handleClose: (region: INavMenuAnalystRegion | null) => void
  regionModal: INavMMenuAnalystRegionModal
  regions: INavMenuAnalystRegion[]
  selectedRegion: INavMenuAnalystRegion | null
  setSelectedRegion: React.Dispatch<React.SetStateAction<INavMenuAnalystRegion | null>>
}
