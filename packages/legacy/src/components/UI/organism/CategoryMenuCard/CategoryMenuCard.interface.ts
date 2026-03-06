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
}

export interface ICategoryField {
  /**
   * This is the field id
   * */
  id: string | number
  /**
   * This is the field name
   * */
  name: string
  /**
   * Url to redirect
   * */
  href: string
  /**
   * Onclick callback
   * */
  onClick?: () => void
}
