import { ICategoryField } from '../../CategoryMenuCard.interface'

export interface ICategoryMenuList {
  /**
   * list of all options
   * */
  list: ICategoryField[]
  /**
   * The list is open
   * */
  isOpen?: boolean
  /**
   * Onclick callback
   * */
  onClick?: () => void
}
