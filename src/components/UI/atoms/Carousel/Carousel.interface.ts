export interface ICarousel {
  /**
   * className to add styles in the carousel component.
   */
  className?: string
  /**
   * Set the number of values to show.
   */
  showElements: number
  /**
   * .
   */
  children: React.ReactNode[]
}
