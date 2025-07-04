export interface IJobDetailsActions {
  actionsLinkList?: IActionList[]
  actionsLinkSize?: number
  actionsRounded?: boolean
  externalButtonApply?: React.ReactNode
  additionalAction?: React.ReactNode
  className?: string
}

interface IActionList {
  link: string
  title: string
  icon?: string
  text?: string
}
