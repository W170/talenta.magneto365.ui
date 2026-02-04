export interface IContextAppProvider {
  children: React.ReactNode
  container?: HTMLElement
  device?: DeviceType
}

export type DeviceType = 'mobile' | 'desktop'

export interface IResponsiveContext {
  device?: DeviceType
}
