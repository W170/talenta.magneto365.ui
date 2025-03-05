export type TCandidateNav = React.HTMLAttributes<HTMLDivElement>

export interface ICandidateNavContext {
  showOptions: boolean
  onChangeOpen: () => void
}
