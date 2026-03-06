import { FieldListValue } from '../../FieldList.interface'

export interface IFieldListItem<T extends FieldListValue> extends React.HTMLAttributes<HTMLLIElement> {
  children: React.ReactNode
  value?: T
}
