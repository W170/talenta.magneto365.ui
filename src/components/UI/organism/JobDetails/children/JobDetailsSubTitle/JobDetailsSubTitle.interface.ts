import { iconJobDetailsSubTitle } from '../../../../../../constants/jobDetails.constants'

export interface IJobDetailsSubTitle {
  className?: string
  icon?: keyof typeof iconJobDetailsSubTitle
  children?: React.ReactNode
}
