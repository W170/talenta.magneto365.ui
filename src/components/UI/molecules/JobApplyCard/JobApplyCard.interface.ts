export interface JobRequirementsElement {
  jobRequirementTitle: string
  jobRequirementInfo: string
}

export interface IJobApplyCard {
  /**
   *
   */
  jobApplyCardHeader: string
  /**
   *
   */
  jobApplyCardReqs: JobRequirementsElement[]
  /**
   *
   */
  jobApplyButtonText: string
}
