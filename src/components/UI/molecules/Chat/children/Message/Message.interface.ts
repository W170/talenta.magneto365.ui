export interface TMessage extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  role: string
  to: 'right' | 'left'
  classNames?: {
    content?: string
  }
}
