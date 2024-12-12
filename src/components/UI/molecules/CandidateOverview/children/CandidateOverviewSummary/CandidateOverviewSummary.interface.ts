import {
  ICandidateOverviewTextContainer,
  ICandidateOverviewBaseProps,
  TCandidateOverviewSeparation
} from '../../CandidateOverview.interface'

export interface ICandidateOverviewSummaryProps extends ICandidateOverviewBaseProps {
  /**
   * Summary of the candidate
   */
  children?: ICandidateOverviewSummary[]
  /**
   * Additional descriptions
   */
  descriptions?: ICandidateOverviewTextContainer
}

export interface ICandidateOverviewSummary {
  /**
   * Array of descriptions
   */
  descriptions?: ICandidateOverviewTextContainer
  /**
   * Array of infos
   */
  infos?: ICandidateOverviewTextContainer
  /**
   * Separation between sub children
   */
  separation?: TCandidateOverviewSeparation
  /**
   * Array of subtitles
   */
  subtitles?: ICandidateOverviewTextContainer
  /**
   * Array of titles
   */
  titles?: ICandidateOverviewTextContainer
}
