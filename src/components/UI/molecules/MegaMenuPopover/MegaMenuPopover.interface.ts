import { ReactNode } from 'react'

export interface IMegaMenuPopover {
  children: ReactNode
  popoverRef?: React.Ref<IPopoverRef>
}

export interface IPopoverRef {
  setShow: (show: boolean) => void
}
