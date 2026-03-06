export type TCandidateNav = React.HTMLAttributes<HTMLDivElement>

export interface ICandidateNavContext {
  /**
   * Handles options visibility
   */
  showOptions: boolean
  /**
   * Function to change options visibility
   */
  onChangeOpen: (value?: boolean) => void
}
