import { megaMenuUserLoggedIcons } from '@constants/stories'

export const getIcons = (iconName?: string) => {
  if (!iconName || !(iconName in megaMenuUserLoggedIcons)) return null
  return megaMenuUserLoggedIcons[iconName as keyof typeof megaMenuUserLoggedIcons]
}
