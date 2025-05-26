export type SectionKey = 'all' | 'requests' | 'candidates' | 'vacants' | 'interviews'

export interface ISectionConfiguration {
  label: string
  isDisabled: boolean
  apiUrl: string // TODO: Validar si es necesario
  filters: Record<string, string>
}

export interface INotificationDrawerHeaderConfig {
  title: string
  tabTooltipText: string
}

export interface INotificationDrawerFooterConfig {
  actionText: string
  actionUrl: string
}

export interface INotificationDrawerConfig {
  headerConfig: INotificationDrawerHeaderConfig
  footerConfig: INotificationDrawerFooterConfig
  defaultKey: string
  sectionConfig: Record<SectionKey, ISectionConfiguration>
}

export interface INotificationDrawerAnalystProps {
  /**
   * Boolean to show or hide the drawer
   */
  isDrawerOpen?: boolean

  /**
   * Function to close menu
   */
  onClose?: () => void

  /**
   * Configuration for the notification drawer
   */
  drawerConfig: INotificationDrawerConfig
}
