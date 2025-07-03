export interface IJobDetailsActions {
  actionsLinkList: IActionList[]
  actionsRounded?: boolean
  externalButtonApply?: React.ReactNode
  className?: string
}

interface IActionList {
  link: string
  title: string
  icon?: string
  text?: string
}
