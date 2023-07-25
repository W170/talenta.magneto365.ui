import {
  IJobApplyCard,
  IJobCompanyHeader,
  IJobDetailCard,
  IJobFooterCard,
  IJobSkillsCard
} from '@components/UI/molecules'

/**
 * This interface represents the props required for a mobile job details drawer component.
 */
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
  jobDetailsProps: string[]
  /**
   * Array of job detail cards to display, each card can contain different information.
   */
  jobDetailCard: IJobDetailCard[]
  /**
   * Props for the job skills card section.
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
   * Represents whether the job details drawer is open or closed.
   * (Optional property)
   */
  isOpen?: boolean
  /**
   * Callback function to be executed when the job details drawer is closed.
   * (Optional property)
   */
  onClose?: () => void
}
