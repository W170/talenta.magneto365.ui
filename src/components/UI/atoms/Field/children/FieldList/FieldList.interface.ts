import { TFieldScreenSizes } from '../../Field.interface'

export type OmitedFieldListProps = 'onChange' | 'defaultValue'

export type FieldListChildren = React.ReactNode | ((ctx: { isDesktop: boolean; isMobile: boolean }) => React.ReactNode)

export type FieldListDirection = 'up' | 'down'

export interface IFieldListBaseProps extends Omit<React.HTMLAttributes<HTMLUListElement>, OmitedFieldListProps> {
  children: FieldListChildren
  direction?: FieldListDirection
  breakpoint?: TFieldScreenSizes | null
  isMobile?: boolean
}

export interface IFieldListMultiple<T> extends IFieldListBaseProps {
  defaultValue?: T[]
  multiple: true
  onChange?: (value?: T[]) => void
  value?: T[]
}

export interface IFieldListSingle<T> extends IFieldListBaseProps {
  defaultValue?: T
  multiple?: false
  onChange?: (value: T) => void
  value?: T
}

export type IFieldList<T> = IFieldListMultiple<T> | IFieldListSingle<T>

export interface IFieldListContext {
  toggleValue: (value?: unknown) => void
  value?: unknown[] | unknown
}
