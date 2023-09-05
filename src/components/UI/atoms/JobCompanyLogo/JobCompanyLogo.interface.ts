export interface IJobCompanyLogo {
  /**
   * Sets the URL of the company logo image for the job detail.
   * (Optional property)
   */
  companyLogo?: string | JSX.Element
  /**
   * Sets the alternative text for the company logo image.
   * This text is displayed when the image cannot be loaded.
   * (Optional property)
   */
  alt?: string
}
