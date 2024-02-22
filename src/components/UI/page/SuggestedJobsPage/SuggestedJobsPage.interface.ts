import { IEmptyResutls, IJobCard, IJobSkillsCard, IPaginationProps } from '@components/UI/molecules'
import { IJobDetailsDrawer, IMobileJobDetailsDrawer } from '@components/UI/organism'
import { DeviceType } from '@components/context/context.interface'

export interface ISuggestedJobsPage {
  /**
   * This property indicates the type of device being rendered.
   */
  device: DeviceType
  /**
   * This property shows values in the empty vacancies card.
   */
  emptyResultsProps: IEmptyResutls
  /**
   * This property should activate the loading state in the components.
   */
  isLoading: boolean
  /**
   * This property shows the action detail view.
   */
  jobDetailAction?: JSX.Element | undefined
  /**
   * Props for the job details drawer component.
   * The job details drawer shows detailed information about a selected job listing.
   */
  jobDetailsDrawerProps: IJobDetailsDrawer
  /**
   * An array of job card props to display multiple job listings.
   * Each job card contains information about a single job listing.
   */
  vacantProps: IVacancies[]
  /**
   * The selected job's data.
   */
  jobSelected: IVacancies
  /**
   * Props for the mobile version of the job details drawer component.
   * This version is displayed on mobile devices and provides job details for selected listings.
   */
  mobileJobDetailsDrawerProps: IMobileJobDetailsDrawer
  /**
   * Props for the paginator.
   */
  paginationProps: IPaginationProps
  /**
   * Function to set the selected job based on its ID.
   */
  setJobSelected: (id: number | null) => void
}

interface IVacancies extends IJobCard {
  /**
   * Additional data specific to the offer vacancy.
   */
  offerVacancyData?: string
  /**
   * Additional description for the offer.
   */
  offerDescription?: string
  /**
   * Skills required for the job offer.
   */
  offerSkills?: IJobSkillsCard
}
