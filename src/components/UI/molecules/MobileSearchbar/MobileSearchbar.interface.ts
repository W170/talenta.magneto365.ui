import { IMainButton } from '../../atoms/MainButton'

export interface IMobileSearchbar {
  /**
   * Props for the search button
   */
  openProps: IMainButton
  /**
   * Props for the search button
   */
  infoProps: IMainButton
  /**
   * Props for the remove/delete button
   */
  closeProps: IMainButton
  /**
   * Handler for the input value
   */
  onSearch?: (searchValue: string) => void
  className?: string
}
