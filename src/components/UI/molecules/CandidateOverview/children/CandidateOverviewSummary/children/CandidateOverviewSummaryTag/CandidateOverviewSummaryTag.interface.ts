import { ICandidateOverviewText } from '../../../../CandidateOverview.interface'

export interface ICandidateOverviewSummaryTagProps {
  /**
   * key of the tag to render
   */
  tag?: keyof JSX.IntrinsicElements
  /**
   * Text to show
   */
  text?: ICandidateOverviewText
}
