export interface ICandidateNavigationBar {
  /**
   * Class name of Candidate navigation bar
   */
  className?: string

  /**
   * Icon Button Left of Candidate navigation bar
   */
  iconButtonLeft: string

  /**
   * Menu options of Candidate navigation bar
   */
  menuOptions?: ImenuOptions[]

  /**
   * onClick Arrow Left of Candidate navigation bar
   */
  onClickArrowLeft?: () => void

  /**
   * onClick Arrow Right of Candidate navigation bar
   */
  onClickArrowRight?: () => void

  /**
   * onClick Button Center of Candidate navigation bar
   */
  onclickButtonCenter?: () => void

  /**
   * onClick Button Left of Candidate navigation bar
   */
  onClickbuttonLeft?: () => void

  /**
   * Prefix of Candidate navigation bar
   */
  prefix?: string

  /**
   * Suffix of Candidate navigation bar
   */
  sufix?: string

  /**
   * Text Button Center of Candidate navigation bar
   */
  textButtonCenter: string

  /**
   * Text of Candidate navigation bar
   */
  text: string
}

export interface ImenuOptions {
  /**
   * icon of Candidate navigation bar
   */
  icon: string
  /**
   * label of Candidate navigation bar
   */
  label: string
  /**
   * onClick of Candidate navigation bar
   */
  onClick: any
}
