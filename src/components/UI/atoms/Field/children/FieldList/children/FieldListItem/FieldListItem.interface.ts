export interface IFieldListItem<T> extends React.HTMLAttributes<HTMLLIElement> {
  children: React.ReactNode
  value?: T
}
