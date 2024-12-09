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
  export interface Icon {
    /**
     * Additional class names for custom styling.
     */
    className?: string
    /**
     * Here is the icon component
     */
    src?: string | null
    /**
     * You can change the size of the icon by adding a numeric value here
     */
    size?: number

    /**
     * Text alt in the img element
     */
    alt?: string | null
  }
}