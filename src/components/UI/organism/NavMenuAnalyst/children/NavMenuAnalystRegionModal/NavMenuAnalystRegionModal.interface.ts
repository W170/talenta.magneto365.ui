import { INavMenuAnalystRegion, INavMMenuAnalystRegionModal } from '../../NavMenuAnalyst.interface'

export interface INavMenuAnalystRegionModalProps {
  defaultRegion: string
  regions: INavMenuAnalystRegion[]
  regionModal: INavMMenuAnalystRegionModal
  isOpen: boolean
  onClose: (region: INavMenuAnalystRegion | null) => void
}
