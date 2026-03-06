export type FieldListBodyChildren =
  | React.ReactNode
  | ((ctx: { isDesktop: boolean; isMobile: boolean }) => React.ReactNode)

export interface IFieldListBody extends React.HTMLAttributes<HTMLUListElement> {
  children?: FieldListBodyChildren
}
