export interface IJobDetailsSuggested {
  behavior?: 'showcase' | 'tab'
  classNames?: {
    container?: string
    tag?: string
    header?: string
    body?: string
    footer?: string
  }
  tag?: React.ReactNode
  title: React.ReactNode
  renderFooter: () => React.ReactNode
  children?: React.ReactNode
}
