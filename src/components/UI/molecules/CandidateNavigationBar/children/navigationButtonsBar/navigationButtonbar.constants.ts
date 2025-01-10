import { CloseBlack, CloseWhite, BanBlack, BanWhite } from '@constants/icons.constants'
import { NAVIGATION_BAR_BUTTONS_ICONS_COLOR } from './navigationButtonsBar.interface'

export const NAVIGATION_BAR_BUTTONS_ICONS: { [key: string]: Record<string, string> } = {
  close: {
    [NAVIGATION_BAR_BUTTONS_ICONS_COLOR.WHITE]: CloseWhite,
    [NAVIGATION_BAR_BUTTONS_ICONS_COLOR.BLACK]: CloseBlack
  },
  ban: {
    [NAVIGATION_BAR_BUTTONS_ICONS_COLOR.WHITE]: BanWhite,
    [NAVIGATION_BAR_BUTTONS_ICONS_COLOR.BLACK]: BanBlack
  }
}
