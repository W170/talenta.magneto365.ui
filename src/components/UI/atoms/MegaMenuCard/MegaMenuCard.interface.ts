export interface IMegaMenuCard {
  title: string
  logo?: string
  icon?: string
  className?: string
  quotas: number
  onClick: () => void
  showRigthArrow?: boolean
}
