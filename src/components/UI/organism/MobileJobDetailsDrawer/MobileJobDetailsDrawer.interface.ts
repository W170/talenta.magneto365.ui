import { ReactNode } from 'react'
import {
  IJobApplyCard,
  IJobCompanyHeader,
  IJobDetailCard,
  IJobFooterCard,
  IJobSkillsCard,
  ICityDetail,
  IAlertJobStatus
} from '@components/UI/molecules'
import { IMobileJobDetailsActionsBar } from '../MobileJobDetailsActionsBar'
import { IJobVideo } from '@components/UI/molecules/JobVideo'
import { ISimilarJobs } from '../SimilarJobs/SimilarJobs.interface'
import { SwipeProps } from '../Swipe/Swipe.interface'
import { IFraudCardJob } from './../../molecules/FraudCardJob/FraudCardJob.interface'

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
  fraudCardJobProps: IFraudCardJob

  isApplied?: boolean

  alertJobStatusProps?: IAlertJobStatus
}
