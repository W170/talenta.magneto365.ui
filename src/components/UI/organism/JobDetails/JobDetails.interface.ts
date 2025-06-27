export interface IJobDetails {
  renderHeader: () => React.ReactNode
  children?: React.ReactNode
  renderFooter?: () => React.ReactNode
  classNames?: {
    header?: string
    body?: string
    footer?: string
  }
}
