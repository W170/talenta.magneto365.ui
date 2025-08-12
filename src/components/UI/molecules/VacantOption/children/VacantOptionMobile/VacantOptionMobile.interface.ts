import { TVacantOption } from '@components/Domain/Jobs/JobsPage'

export interface IVacantOptionMobile {
  option: TVacantOption
  onClick?: VoidFunction
  onMenu?: (options: TVacantOption[]) => void
}
