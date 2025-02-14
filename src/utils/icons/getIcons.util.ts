export const getIcons = (iconsObject: Record<string, any>, iconName?: string) => {
  if (!iconName || !(iconName in iconsObject)) return null
  return iconsObject[iconName as keyof typeof iconsObject]
}
