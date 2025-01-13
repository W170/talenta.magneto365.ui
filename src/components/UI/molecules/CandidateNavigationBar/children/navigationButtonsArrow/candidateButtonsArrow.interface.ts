export interface ICandidateButtonsArrow {
  /**
   * Function to handle the left arrow button click event
   */
  onClickArrowLeft?: () => void

  /**
   * Function to handle the right arrow button click event
   */
  onClickArrowRight?: () => void

  /**
   * Component core text
   */
  text: string
}
