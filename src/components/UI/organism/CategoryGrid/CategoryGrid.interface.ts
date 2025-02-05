export interface ICategoryGrid<T> {
  elements: T[]
  render: React.FC<T>
  columnsNumber?: number
}
