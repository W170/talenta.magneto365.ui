export interface IContextAppProvider {
  children: React.ReactNode
  device?: DeviceType
}

export type DeviceType = 'mobile' | 'desktop'

export interface IResponsiveContext {
  device?: DeviceType
}
