import { OverflowPosition } from './overflowPosition.interface'

export const DEFAULT_TOLERANCE = 2

export type OverflowStrategy = (element: HTMLElement) => boolean

const isOverflownRight: OverflowStrategy = (el) => el.scrollLeft + el.clientWidth < el.scrollWidth - DEFAULT_TOLERANCE

const isOverflownLeft: OverflowStrategy = (el) => el.scrollLeft > DEFAULT_TOLERANCE

const isOverflownDown: OverflowStrategy = (el) => el.scrollTop + el.clientHeight < el.scrollHeight - DEFAULT_TOLERANCE

const isOverflownUp: OverflowStrategy = (el) => el.scrollTop > DEFAULT_TOLERANCE

export const overflowStrategies: Record<OverflowPosition, OverflowStrategy> = {
  right: isOverflownRight,
  left: isOverflownLeft,
  down: isOverflownDown,
  up: isOverflownUp
}
