type Icon = 'calendar' | 'people' | 'briefcase' | 'dollar-circle' | 'location' | 'tag'

interface Item {
  id: number | string
  icon: Icon
  label: React.ReactNode
}

export interface IJobDetailsSummary {
  items: Item[]
  className?: string
  classNames?: {
    item?: string
    label?: string
    icon?: string
  }
  children?: React.ReactNode
}
