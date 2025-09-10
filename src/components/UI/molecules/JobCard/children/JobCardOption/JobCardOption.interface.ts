import { TVacantOption } from '@components/Domain/Jobs/JobsPage'

export interface IJobCardOption {
  clickOut?: boolean
  setClickOut?: React.Dispatch<React.SetStateAction<boolean>>
  menu: TVacantOption[]
}
