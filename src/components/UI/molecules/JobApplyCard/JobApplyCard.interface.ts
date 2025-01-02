import { ReactNode } from 'react'
export interface JobRequirementsElement {
  /**
   * The title or label for the job requirement.
   */
  offerApplyLabel: string
  /**
   * Additional information or details about the job requirement.
   * This can be a string, null, or undefined.
   */
  offerApplyInfo: string | null | undefined
}

export interface IJobApplyCard {
  /**
   * The header or title for the job apply card section.
   */
  offerApplyHeader: string
  /**
   * An array of job requirements elements, each representing a specific job requirement.
   */
  offerApplyElements: JobRequirementsElement[]
  /**
   * Content to be displayed as an external child element.
   */
  externalChild: ReactNode | JSX.Element
  /**
   * Props for show apply button
   */
  isApplied?: boolean
}
