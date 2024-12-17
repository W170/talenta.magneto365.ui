export interface INotification {
  onClose: () => void
  title?: string
  description?: string
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  containerClassName?: string
  contentClassName?: string
  titleClassName?: string
  descriptionClassName?: string
  childrenClassName?: string
  autoCloseDuration?: number
  children?: React.ReactNode
}
