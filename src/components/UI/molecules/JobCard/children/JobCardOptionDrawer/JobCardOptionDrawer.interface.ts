import { TVacantOption } from '@components/UI/page'

export interface IJobCardOptionDrawer {
  /**
   * Vacant Title.
   */
  title?: string | null
  /**
   * Company name.
   */
  company?: string | null
  /**
   * Auxiliar text for back action.
   */
  backText?: string
  /**
   * Menu option to display in drawer.
   */
  menu: TVacantOption[]
}
