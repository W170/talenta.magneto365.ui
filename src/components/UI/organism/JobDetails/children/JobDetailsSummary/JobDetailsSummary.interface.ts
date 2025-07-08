
interface Item {
  id: number | string
  icon: React.ReactNode,
  label: React.ReactNode,
}

export interface IJobDetailsSummary {
  items: Item[]
  className?: string;
  classNames?: {
    item?: string 
    label?: string
  }
  children?: React.ReactNode
}
