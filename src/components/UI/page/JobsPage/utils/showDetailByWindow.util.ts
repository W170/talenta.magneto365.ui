import { screenSize } from '@constants/responsive.constants'

export const showDetailByWindow = () => {
  const page = document?.getElementById('magneto-ui-jobs-page')
  if (!page) return false
  if (page.getBoundingClientRect()?.width < screenSize.xl) {
    return false
  }
  return true
}
