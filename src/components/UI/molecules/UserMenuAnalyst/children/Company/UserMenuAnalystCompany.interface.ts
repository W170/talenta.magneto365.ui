import { ICompanyAnalyst } from '@components/UI/molecules'
import { IMainButton } from '@components/UI/atoms'

export interface IUserMenuAnalystCompanyProps {
  /**
   * Company data
   */
  company: ICompanyAnalyst
  /**
   * Share button props
   */
  shareButtonProps: IMainButton
}
