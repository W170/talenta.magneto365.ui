export interface IOptions {
  title: string
  icon?: string
}

export interface ITabs {
  defaultTab?: number
  options: IOptions[]
  children: React.ReactNode[]
}
