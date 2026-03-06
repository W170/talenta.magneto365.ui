import { ReactNode } from 'react'
import {
  IJobApplyCard,
  IJobCompanyHeader,
  IJobDetailCard,
  IJobFooterCard,
  IJobSkillsCard,
  ICityDetail,
  IAlertJobStatus,
  TJobActionsVariant,
  IJobsActions
} from '@components/UI/molecules'
import { IMobileJobDetailsActionsBar } from '../MobileJobDetailsActionsBar'
import { IJobVideo } from '@components/UI/molecules/JobVideo'

import { SwipeProps } from '../Swipe/Swipe.interface'
import { IFraudCardJob } from './../../molecules/FraudCardJob/FraudCardJob.interface'
import { ICanApply } from '../JobDetailsDrawer'
import { IActionLinkCard } from '@components/UI/molecules/ActionLinkCard/ActionLinkCard.interface'
import { ISimilarJobs } from '@components/Domain/Jobs/SimilarJobs/SimilarJobs.interface'

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
  /**
   *These are the properties of similar jobs ui
   */
  similarJobsProps?: ISimilarJobs
  /**
   * Props for the job video informative section
   */
  jobVideo?: IJobVideo
  /**
   * This property shows or hides the video component
   */
  loadVideo?: boolean
  /**
   * This property changes when the video component is assembled or disassembled.
   */
  setLoadVideo?: (load: boolean) => void
  /**
   *These are the properties of swipe
   */
  swipeProps?: SwipeProps

  cities: ICityDetail[]

  isRemote: boolean

  textRemote: string
  /**
   * Props for the fraud card job.
   */
  fraudCardJobProps?: IFraudCardJob
  /**
   * Props for show actions buttons or alert
   */
  isApplied?: boolean
  /**
   * Props for show alert when apply
   */
  alertJobStatusProps?: IAlertJobStatus
  /**
   * Props for show alert when user can´t apply
   */
  canApply?: ICanApply
  /**
   * Props for show action link company
   */
  actionLinkCardProps?: IActionLinkCard
  /**
   * Indicates whether the component is default or detailed.
   */

  variant?: TJobActionsVariant
  /**
   * Props for the actions section associated with the job details.
   */
  jobActionsProps?: IJobsActions
}
