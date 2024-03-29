import { ChangeEvent } from 'react'

export interface IFilterSearchItem {
  /**
   * This is the function that execute in the search of the input
   */
  handleSearch: (event: ChangeEvent<HTMLInputElement>, inputRef: React.MutableRefObject<null>) => void
  /**
   * This is the text that display in the placeholder
   */
  placeholder: string
  /**
   *This is the flag when the filters promise is pending
   */
  loading: boolean
  /**
   * This flag indicates if the input can search
   */
  disabled?: boolean
}
