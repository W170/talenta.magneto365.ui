/* eslint-disable @typescript-eslint/no-namespace */

export interface IAlertJobModal {
  /**
   * React children to be rendered inside the component.
   */
  children: JSX.Element | JSX.Element[]

  /**
   * Additional class names for custom styling.
   */
  className?: string

  /**
   * Represents whether the modal is open or closed.
   */
  open: boolean

  /**
   * Callback function to be executed when the modal is closed.
   */
  onClose: () => void
}

export namespace IAlertJobModal {
  export interface Header {
    /**
     * React children to be rendered inside the container.
     */
    children?: React.ReactNode

    /**
     * Additional class names for custom styling.
     */
    className?: string
  }
  export interface Body {
    /**
     * React children to be rendered inside the container.
     */
    children?: React.ReactNode

    /**
     * Additional class names for custom styling.
     */
    className?: string
  }
  export interface Footer {
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
  export interface Title {
    /**
     * Set title text on modal header
     */
    title: string

    /**
     * Set subtitle text on modal header
     */
    subtitle?: string | null

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
