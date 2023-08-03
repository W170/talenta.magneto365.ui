import { IFilterValue } from '@components/UI/template/SideFilter'
import { Dispatch, SetStateAction } from 'react'

export interface IFilterSearchItem {
  /**
   * This is a vector whit the search options
   */
  options: IFilterValue[]
  /**
   * This function modify the options
   */
  setOptions: Dispatch<SetStateAction<IFilterValue[]>>
  /**
   * This is the text that display in the placeholder
   */
  placeholder: string
}
