export type OmitedFieldListProps = 'onChange' | 'defaultValue'

export type FieldListChildren = React.ReactNode | ((ctx: { isMobile: boolean }) => React.ReactNode)

export type FieldListDirection = 'up' | 'down'

export interface IFieldListBaseProps extends Omit<React.HTMLAttributes<HTMLUListElement>, OmitedFieldListProps> {
  children: FieldListChildren
  direction?: FieldListDirection
  breakpoint?: string
  isMobile?: boolean
}

export interface IFieldListMultiple extends IFieldListBaseProps {
  defaultValue?: unknown[]
  multiple: true
  onChange?: (value?: unknown[]) => void
}

export interface IFieldListSingle extends IFieldListBaseProps {
  defaultValue?: unknown
  multiple?: false
  onChange?: (value: unknown) => void
}

export type IFieldList = IFieldListMultiple | IFieldListSingle

export interface IFieldListContext {
  selected?: unknown[] | unknown
  toggleValue: (value?: unknown) => void
}
