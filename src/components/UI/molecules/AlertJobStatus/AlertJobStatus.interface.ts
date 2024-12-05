/* eslint-disable @typescript-eslint/no-namespace */

export interface IAlertJobStatus {
  /**
   * React children to be rendered inside the component.
   */
  children?: React.ReactNode

  /**
   * Additional class names for custom styling.
   */
  className?: string
}

export namespace IAlertJobStatus {
  export interface Container {
    /**
     * React children to be rendered inside the container.
     */
    children?: React.ReactNode

    /**
     * Additional class names for custom styling.
     */
    className?: string
  }
}
