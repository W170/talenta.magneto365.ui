import { PopoverElement } from './FieldList.interface'

export const supportsPopover = (node: HTMLDivElement): node is PopoverElement =>
  typeof (node as PopoverElement).showPopover === 'function'
