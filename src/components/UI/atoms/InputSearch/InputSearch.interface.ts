import { ChangeEvent } from 'react'

export interface ISearchInput {
  /**
   * this property change search value text
   */
  inputValue: string
  /**
   * this property have value text
   */
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  /**
   * this property add function in the close icon
   */
  closeOnClick: () => void
  /**
   * this property add function in the search icon
   */
  searchOnClick?: () => void
  /**
   * this property add placeholder text in the input
   */
  placeholder: string
}
