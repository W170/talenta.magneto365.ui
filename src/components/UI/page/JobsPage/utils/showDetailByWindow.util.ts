import { screenSize } from '@constants/responsive.constants'

export const showDetailByWindow = (elementID: string) => {
  const page = document?.getElementById(elementID)
  if (!page) return false
  if (page.getBoundingClientRect()?.width < screenSize.xl) {
    return false
  }
  return true
}
