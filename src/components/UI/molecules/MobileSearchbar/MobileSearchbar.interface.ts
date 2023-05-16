import { IMainButton } from '../../atoms/MainButton'

export interface IMobileSearchbar {
  /**
   * Props for the search button
   */
  toggleProps: IMainButton
  /**
   * Props for the search button
   */
  searchProps: IMainButton
  /**
   * Props for the remove/delete button
   */
  removeProps: IMainButton
  /**
   * Handler for the input value
   */
  onSearch: (searchValue: string) => void
  className?: string
}
