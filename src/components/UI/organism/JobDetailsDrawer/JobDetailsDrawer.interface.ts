import { IAlertJobStatus } from './../../molecules/AlertJobStatus/AlertJobStatus.interface'
import { IJobSkillsCard } from '../../molecules/JobSkillsCard'
import { IJobApplyCard } from '../../molecules/JobApplyCard'
import { IJobFooterCard } from '../../molecules/JobFooterCard'
import { IJobDetailCard } from '../../molecules/JobDetailCard'
import { IJobCompanyHeader } from '@components/UI/molecules/JobCompanyHeader'
import { IJobsActions } from '@components/UI/molecules/JobActions'
import { ReactNode } from 'react'
import { ISimilarJobs } from '../SimilarJobs/SimilarJobs.interface'
import { IJobVideo } from '@components/UI/molecules/JobVideo'
import { ICityDetail } from '../../molecules/CitiesDetailDrawer'
import { IFraudCardJob } from '../../molecules/FraudCardJob/FraudCardJob.interface'

export interface ICanApply {
  message: string
  isApplicable: boolean
}

export interface IJobDetailsDrawer {
  /**
   * Props for the job company logo and header section.
   */
  jobCompanyLogoProps: IJobCompanyHeader
  /**
   * Props for the actions section associated with the job details.
   */
  jobActionsProps: IJobsActions
  /**
   * Array of strings representing the job details to display.
   */
  jobDetailsProps: (string | null | undefined)[] | null
  /**
   * Props for the job detail card.
   */
  jobDetailCardProps: IJobDetailCard
  /**
   * Props for the job skills card section. Can be null if no skills card is present.
   */
  jobSkillsCardProps: IJobSkillsCard
  /**
   * Props for the job apply card section.
   */
  jobApplyCardProps: IJobApplyCard
  /**
   * Props for the job footer card section.
   */
  jobFooterCardProps: IJobFooterCard
  /**
   * Specifies whether the component is in a loading state.
   * (Optional property)
   */
  isLoading?: boolean
  /**
   *
   */
  modalPendingInfoComponent?: ReactNode | JSX.Element
  /**
   * This property show the action detail view
   */
  jobDetailAction?: JSX.Element | undefined
  /**
   *
   */
  selectedJobId?: number | null
  /**
   * These are the properties of similar jobs ui
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
}
