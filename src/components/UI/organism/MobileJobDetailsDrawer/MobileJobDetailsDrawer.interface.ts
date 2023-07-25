import {
  IJobApplyCard,
  IJobCompanyHeader,
  IJobDetailCard,
  IJobFooterCard,
  IJobSkillsCard
} from '@components/UI/molecules'

export interface IMobileJobDetailsDrawer {
  /**
   *
   */
  jobCompanyLogoProps: IJobCompanyHeader
  /**
   *
   */
  jobDetailsHeaderText: string
  /**
   *
   */
  jobDetailsProps: string[]
  /**
   *
   */
  jobDetailCard: IJobDetailCard[]
  /**
   *
   */
  jobSkillsCardProps: IJobSkillsCard
  /**
   *
   */
  jobApplyCardProps: IJobApplyCard
  /**
   *
   */
  jobFooterCardProps: IJobFooterCard
  /**
   *
   */
  isOpen?: boolean
  /**
   *
   * @returns
   */
  onClose?: () => void
}
