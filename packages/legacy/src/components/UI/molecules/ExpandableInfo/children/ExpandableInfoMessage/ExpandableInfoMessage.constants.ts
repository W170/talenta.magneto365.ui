import { Warning, Danger } from '@constants/icons.constants'
import { EExpandableInfoVariant } from '../../ExpandableInfo.interface'

export const EXPANDABLE_INFO_MESSAGE_ICONS: { [key: string]: Record<string, string> } = {
  warning: {
    [EExpandableInfoVariant.BLUE]: Warning,
    [EExpandableInfoVariant.WHITE]: Danger
  }
}
