export type INotificationType = 'requests' | 'candidateManagement' | 'vacancyStatuses' | 'interviews'

export type IRequestEvent = 'created' | 'assigned' | 'named' | 'rejected'

export type ICandidateManagementEvent = 'matchFound'

export interface IBaseNotification {
  id: string
  timestamp: string
  read: boolean
  title: string
  descriptionLines?: string[][]
  action: () => void
  actionTitle: string
}

export interface IRequestNotification extends IBaseNotification {
  type: 'requests'
  event: IRequestEvent
}

export interface ICandidateManagementNotification extends IBaseNotification {
  type: 'candidateManagement'
  event: ICandidateManagementEvent
}

export type IAnalystNotification = IRequestNotification | ICandidateManagementNotification

export interface IAnalystNotificationListProps {
  notifications: IAnalystNotification[]
}
