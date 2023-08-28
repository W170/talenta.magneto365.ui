export interface JobRequirementsElement {
  /**
   * The title or label for the job requirement.
   */
  jobRequirementTitle: string
  /**
   * Additional information or details about the job requirement.
   */
  jobRequirementInfo: string
}

export interface IJobApplyCard {
  /**
   * The header or title for the job apply card section.
   */
  jobApplyCardHeader: string
  /**
   * An array of job requirements elements, each representing a specific job requirement.
   */
  jobApplyCardReqs: JobRequirementsElement[]
  /**
   * The text to be displayed on the main apply button.
   */
  jobApplyButtonText: string
  /**
   * Callback function to be executed when the main apply button is clicked.
   */
  onHandlerClick: () => void
}
