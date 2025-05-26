export interface IScrollableTab {
  children: React.ReactNode | React.ReactNode[]
  /**
   * Optional prop to set the scroll amount when clicking the arrows
   * @default 100
   */
  scrollAmount?: number
}
