/* eslint-disable @typescript-eslint/no-namespace */

export interface ICarousel {
  /**
   * Render the component children
   */
  children: React.ReactNode
  /**
   * Class names for the components
   */
  classNamesObject?: {
    /**
     * Base class name for the carousel
     */
    base?: string
    /**
     * Class names for the header component
     */
    headerContainer?: string
    /**
     * Class names for the header items container
     */
    headerItem?: string
    /**
     * Class names for the buttons for the component
     */
    buttons?: string
    /**
     * Class names for the items container
     */
    items?: string
    /**
     * Class names for the item component
     */
    item?: string
  }
  /**
   * Enable auto scroll for the carousel
   */
  autoScroll?: boolean
  /**
   * Interval for auto scroll
   */
  scrollInterval?: number
  /**
   * Enable mobile scrollable for the carousel
   */
  mobileScrollable?: boolean
  /**
   * Size of the buttons
   */
  sizeButtons?: number
  /**
   * Number of items per section
   */
  itemsPerSection?: number
  /**
   * Gap between items
   */
  gap?: number
  /**
   * Maximum width of the container
   */
  maxContainerWidth?: string
  /**
   *  Current index of the carousel, for controlled mode
   */
  currentIndex?: number
  /**
   * Callback function to change the slide
   */
  onChangeSlide?: (newIndex: number) => void
}

export namespace ICarousel {
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
  export interface Items {
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
  export interface Buttons {
    /**
     * Buttons to navigate to the previous slide in the carousel
     */
    onPrevSlide: () => void
    /**
     * Buttons to navigate to the next slide in the carousel
     */
    onNextSlide: () => void
    /**
     * Additional class names for custom styling.
     */
    className?: string
    /**
     * Size of the buttons
     */
    size?: number
    /**
     * Icons for the buttons
     */
    icons?: {
      /**
       * Icon for the previous button
       */
      left: string
      /**
       * Icon for the next button
       */
      right: string
    }
  }
}
