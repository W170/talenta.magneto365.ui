export interface IJobDetails {
  renderHeader: () => React.ReactNode
  children?: React.ReactNode
  renderFooter?: () => React.ReactNode
  className?: string;
  classNames?: {
    header?: string
    body?: string
    footer?: string
    separator?: string
  }
}
