import { ICandidateOverviewText, ICandidateOverviewBaseProps } from '../../CandidateOverview.interface'

export interface ICandidateOverviewTagsProps extends ICandidateOverviewBaseProps {
  /**
   * Array of tags
   */
  children?: ICandidateOverviewTag[]
}

export interface ICandidateOverviewTag {
  /**
   * Tag text
   */
  title?: ICandidateOverviewText
}
