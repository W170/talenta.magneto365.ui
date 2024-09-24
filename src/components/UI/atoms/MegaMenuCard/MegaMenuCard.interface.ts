export interface IMegaMenuCard {
  title: string
  logo?: string
  icon?: string
  className?: string
  quotas: number
  href?: string
  target?: string
  onClick: () => void
  showRigthArrow?: boolean
}
