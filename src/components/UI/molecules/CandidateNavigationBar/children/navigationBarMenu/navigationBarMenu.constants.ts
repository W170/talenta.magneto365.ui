import {
  VideoAddLinearDarkBlue,
  VideoAddLinearBlack,
  VideoAddLinearWhite,
  ArchiveAdd,
  ArchiveAddLinearWhite,
  ArchiveAddLinearDarkBlue,
  shareLinearBlack,
  shareLinearWhite,
  shareLinearDarkBlue,
  FileDownloadLinearDarkBlue,
  FileDownloadLinearBlack,
  FileDownloadLinearWhite,
  UserCheckLinearBlack,
  userCheckLinearWhite,
  UserCheckLinearDarkBlue
} from '@constants/icons.constants'
import { NAVIGATION_BAR_MENU_ICONS_COLOR } from './navigationBarMenu.interface'

export const NAVIGATION_BAR_MENU_ICONS: { [key: string]: Record<string, string> } = {
  videoInterview: {
    [NAVIGATION_BAR_MENU_ICONS_COLOR.DARK_BLUE]: VideoAddLinearDarkBlue,
    [NAVIGATION_BAR_MENU_ICONS_COLOR.WHITE]: VideoAddLinearWhite,
    [NAVIGATION_BAR_MENU_ICONS_COLOR.BLACK]: VideoAddLinearBlack
  },
  separateCandidate: {
    [NAVIGATION_BAR_MENU_ICONS_COLOR.DARK_BLUE]: ArchiveAddLinearDarkBlue,
    [NAVIGATION_BAR_MENU_ICONS_COLOR.BLACK]: ArchiveAdd,
    [NAVIGATION_BAR_MENU_ICONS_COLOR.WHITE]: ArchiveAddLinearWhite
  },
  share: {
    [NAVIGATION_BAR_MENU_ICONS_COLOR.DARK_BLUE]: shareLinearDarkBlue,
    [NAVIGATION_BAR_MENU_ICONS_COLOR.BLACK]: shareLinearBlack,
    [NAVIGATION_BAR_MENU_ICONS_COLOR.WHITE]: shareLinearWhite
  },
  download: {
    [NAVIGATION_BAR_MENU_ICONS_COLOR.DARK_BLUE]: FileDownloadLinearDarkBlue,
    [NAVIGATION_BAR_MENU_ICONS_COLOR.BLACK]: FileDownloadLinearBlack,
    [NAVIGATION_BAR_MENU_ICONS_COLOR.WHITE]: FileDownloadLinearWhite
  },
  contracted: {
    [NAVIGATION_BAR_MENU_ICONS_COLOR.DARK_BLUE]: UserCheckLinearDarkBlue,
    [NAVIGATION_BAR_MENU_ICONS_COLOR.BLACK]: UserCheckLinearBlack,
    [NAVIGATION_BAR_MENU_ICONS_COLOR.WHITE]: userCheckLinearWhite
  }
}
