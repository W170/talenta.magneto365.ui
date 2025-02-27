import { TVacantOption } from '@components/UI/page'

export interface IVacantOptionMobile {
  option: TVacantOption
  onClick?: VoidFunction
  onMenu?: (options: TVacantOption[]) => void
}
