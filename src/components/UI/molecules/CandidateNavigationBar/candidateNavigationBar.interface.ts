export interface ICandidateNavigationBar {
  /**
   * Class name of Candidate navigation bar
   */
  className?: string
  /**
   * Menu options of Candidate navigation bar
   */
  menuOptions?: ImenuOptions[]
}

export interface ImenuOptions {
  icon: string
  label: string
  onClick: any
}
