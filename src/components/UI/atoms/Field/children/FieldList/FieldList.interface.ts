export type OmitedFieldListProps = 'onChange' | 'defaultValue'

export type FieldListChildren = React.ReactNode | ((ctx: { isMobile: boolean }) => React.ReactNode)

export type FieldListDirection = 'up' | 'down'

export interface IFieldListBaseProps extends Omit<React.HTMLAttributes<HTMLUListElement>, OmitedFieldListProps> {
  children: FieldListChildren
  direction?: FieldListDirection
  breakpoint?: string
  isMobile?: boolean
}

export interface IFieldListMultiple<T> extends IFieldListBaseProps {
  defaultValue?: T[]
  multiple: true
  onChange?: (value?: T[]) => void
}

export interface IFieldListSingle<T> extends IFieldListBaseProps {
  defaultValue?: T
  multiple?: false
  onChange?: (value: T) => void
}

export type IFieldList<T> = IFieldListMultiple<T> | IFieldListSingle<T>

export interface IFieldListContext {
  selected?: unknown[] | unknown
  toggleValue: (value?: unknown) => void
}
