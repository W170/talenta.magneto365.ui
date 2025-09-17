export interface ICategoryGrid<T> {
  /**
   * This is the elements list to render
   * */
  elements: T[]
  /**
   * This is the component to render dynamically
   * */
  render: React.FC<T>
  /**
   * Number of columns to render
   * */
  columnsNumber?: number
  /**
   * Disable padding and make the grid full width
   * */
  fullWidth?: boolean
}
