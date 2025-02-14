export interface ICategoryMenuCard {
  /**
   * This is the category name
   * */
  name: string
  /**
   * You can switch between logo and icon
   * */
  icon?: string
  /**
   * Onclick callback
   * */
  onClick?: () => void
  /**
   * not setting this property is specific to the component
   * */
  clickOut?: boolean
  /**
   * not setting this property is specific to the component
   * */
  setClickOut?: React.Dispatch<React.SetStateAction<boolean>>
  /**
   * This is the item list to render
   * */
  list: ICategoryField[]
  /**
   * Url to redirect
   * */
  href: string
}

export interface ICategoryField {
  id: string | number
  name: string
  href: string
  onClick?: () => void
}
