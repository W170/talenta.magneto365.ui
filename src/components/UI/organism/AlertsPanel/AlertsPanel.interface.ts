/* eslint-disable @typescript-eslint/no-namespace */
export interface IAlertsPanel {
  /**
   *  This is the title on the top
   */
  title: string
  /**
   * React children to be rendered inside the component.
   */
  children?: React.ReactNode
  /**
   * Additional class names for custom styling.
   */
  className?: string
}

export namespace IAlertsPanel {
  export interface List {
    /**
     * React children to be rendered inside the component.
     */
    children?: React.ReactNode
    /**
     * Additional class names for custom styling.
     */
    className?: string
  }
  export interface Item {
    /**
     * Additional class names for custom styling.
     */
    className?: string
    /**
     * This is the custom text
     */
    text: string
    /**
     * React children to be rendered inside the component.
     */
    onDelete: () => void
  }
}
