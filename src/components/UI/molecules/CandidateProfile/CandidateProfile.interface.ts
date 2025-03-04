export type TCandidateProfile = React.HTMLAttributes<HTMLDivElement>

export interface ICandidateContext {
  isOpen: boolean
  onChangeOpen: (isOpen: boolean) => void
}
