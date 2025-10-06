export interface TMessage extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  role: string
  to: 'right' | 'left'
  renderLeft?: () => React.ReactNode
  renderRight?: () => React.ReactNode
  classNames?: {
    content?: string
  }
}
