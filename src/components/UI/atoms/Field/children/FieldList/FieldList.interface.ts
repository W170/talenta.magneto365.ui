import { TFieldScreenSizes } from '../../Field.interface'

export type OmitedFieldListProps = 'onChange' | 'defaultValue'

export type FieldListChildren = React.ReactNode | ((ctx: { isDesktop: boolean; isMobile: boolean }) => React.ReactNode)

export type FieldListDirection = 'up' | 'down'

export type FieldListValue = { id: string | number }

export interface IFieldListBaseProps extends Omit<React.HTMLAttributes<HTMLUListElement>, OmitedFieldListProps> {
  children: FieldListChildren
  direction?: FieldListDirection
  breakpoint?: TFieldScreenSizes | null
  isMobile?: boolean
}

export interface IFieldListMultiple<T extends FieldListValue> extends IFieldListBaseProps {
  defaultValue?: T[]
  multiple: true
  onChange?: (value?: T[]) => void
  value?: T[]
}

export interface IFieldListSingle<T extends FieldListValue> extends IFieldListBaseProps {
  defaultValue?: T
  multiple?: false
  onChange?: (value: T) => void
  value?: T
}

export type IFieldList<T extends FieldListValue> = IFieldListMultiple<T> | IFieldListSingle<T>

export interface IFieldListContext<T extends FieldListValue = FieldListValue> {
  toggleValue: (value?: T) => void
  value?: T[] | T
}
