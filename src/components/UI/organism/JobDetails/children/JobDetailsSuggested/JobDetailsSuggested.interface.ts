export interface IJobDetailsSuggested {
  behavior?: 'showcase' | 'tab'
  classNames?: {
    container?: string
    tag?: string
    header?: string
    body?: string
  }
  tag?: React.ReactNode
  title: React.ReactNode
  children?: React.ReactNode
}
