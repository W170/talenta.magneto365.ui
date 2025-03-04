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
  /**
   * See all text
   * */
  seeAllText: string
  /**
   * Url to redirect
   * */
  href: string
}
