export interface IChatQuestionnaireHeader extends React.HTMLAttributes<HTMLElement> {
  classNames?: {
    iconBack?: string
    iconLogo?: string
    title?: string
  }
  onBack?: () => void
}
