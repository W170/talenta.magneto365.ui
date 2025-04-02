export type TCollapse = React.HTMLAttributes<HTMLDivElement> & Partial<ICollapseContext>

export interface ICollapseContext {
  /**
   * Is collapse open by default
   */
  defaultOpen?: boolean
  /**
   * Is collapse open
   */
  open: boolean
  /**
   * Function when collapse open
   */
  onChangeOpen: (open: boolean) => void
}
