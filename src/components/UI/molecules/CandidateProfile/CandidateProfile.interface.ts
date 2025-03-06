export type TCandidateProfile = React.HTMLAttributes<HTMLDivElement> & Partial<ICandidateContext>

export interface ICandidateContext {
  isOpen: boolean
  onChangeOpen: (isOpen: boolean) => void
}
