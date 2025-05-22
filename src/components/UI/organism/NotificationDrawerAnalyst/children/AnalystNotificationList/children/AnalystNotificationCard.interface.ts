import { IAnalystNotification, IBaseNotification } from '../AnalystNotificationList.interface'

export interface IAnalystNotificationCardProps {
  notification: IAnalystNotification
}

export interface DefaultNotificationProps extends IBaseNotification {
  icon: string
}
