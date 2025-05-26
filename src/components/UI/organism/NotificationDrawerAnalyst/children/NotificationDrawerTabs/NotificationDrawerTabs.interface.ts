import { ISectionConfiguration } from '../../NotificationDrawerAnalyst.interface'

export interface INotificationDrawerTabs {
  sections: Record<string, ISectionConfiguration>
  tooltipText: string
}
