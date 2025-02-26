import { TVacantOption } from '@components/UI/page'

export interface IJobCardOption {
  clickOut?: boolean
  setClickOut?: React.Dispatch<React.SetStateAction<boolean>>
  menu: TVacantOption[]
}
