import { Checked, Clock, Lock } from './icons.constants'
import { classMUI } from './stories'

export const BASE_CLASS = `${classMUI}-timeline-event`

export const TIMELINE_ICONS = {
  checked: Checked,
  current: Clock,
  unlocked: Clock,
  blocked: Lock
}
