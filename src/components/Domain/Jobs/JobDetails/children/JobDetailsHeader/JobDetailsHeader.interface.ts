export interface IJobDetailsHeader {
  className?: string
  classNames?: {
    info?: string
    title?: string
    publishDate?: string
  }
  title: React.ReactNode
  publishedDate: React.ReactNode
  children?: React.ReactNode
}
