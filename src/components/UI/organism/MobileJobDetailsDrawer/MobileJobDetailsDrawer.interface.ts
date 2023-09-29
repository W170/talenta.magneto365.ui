import {
  IJobApplyCard,
  IJobCompanyHeader,
  IJobDetailCard,
  IJobFooterCard,
  IJobSkillsCard
} from '@components/UI/molecules'
import { IMobileJobDetailsActionsBar } from '../MobileJobDetailsActionsBar'
import { ReactNode } from 'react'

export interface IMobileJobDetailsDrawer {
  /**
   * Props for the job company logo and header section.
   */
  jobCompanyLogoProps: IJobCompanyHeader
  /**
   * The header text to display in the job details section.
   */
  jobDetailsHeaderText: string
  /**
   * Array of strings representing the job details to display.
   */
  jobDetailsProps: (string | null | undefined)[] | null
  /**
   * Array of job detail cards to display, each card can contain different information.
   */
  jobDetailCardProps: IJobDetailCard
  /**
   * Props for the job skills card section.
   */
  jobSkillsCardProps: IJobSkillsCard | null
  /**
   * Props for the job apply card section.
   */
  jobApplyCardProps: IJobApplyCard
  /**
   * Props for the job footer card section.
   */
  jobFooterCardProps: IJobFooterCard
  /**
   * Props for the actions bar in the mobile job details drawer.
   */
  mobileJobDetailsBarProps: IMobileJobDetailsActionsBar
  /**
   * Represents whether the job details drawer is open or closed.
   * (Optional property)
   */
  isOpen?: boolean
  /**
   * Callback function to be executed when the job details drawer is closed.
   * (Optional property)
   */
  onClose?: () => void
  /**
   *
   */
  jobDetailAction?: JSX.Element | undefined
  /**
   *
   */
  modalPendingInfoComponent?: ReactNode | JSX.Element
  /**
   * Specifies whether the component is in a loading state.
   * (Optional property)
   */
  isLoading?: boolean
}
