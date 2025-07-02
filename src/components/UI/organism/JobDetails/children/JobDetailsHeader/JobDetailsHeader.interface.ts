export interface IJobDetailsHeader {
  className?: string
  classNames?: {
    icon?: string
    info?: string
    title?: string
    publishDate?: string
  }
  title: React.ReactNode
  companyIcon: string
  publishedDate: React.ReactNode
  renderBottom?: () => React.ReactNode
}
