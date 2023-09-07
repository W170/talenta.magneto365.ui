export interface JobRequirementsElement {
  /**
   * The title or label for the job requirement.
   */
  offerApplyLabel: string
  /**
   * Additional information or details about the job requirement.
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
   * The text to be displayed on the main apply button.
   */
  offerApplyButtonText: string
  /**
   * Callback function to be executed when the main apply button is clicked.
   */
  onHandlerClick: () => void
}
