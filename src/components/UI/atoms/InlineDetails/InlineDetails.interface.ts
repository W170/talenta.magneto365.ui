/**
 * Interface for the InLineDetails component
 */
export interface IInlineDetails {
  /**
   * Array of strings that will be displayed in a single line, separated by " | "
   */
  details: string[]

  /**
   * Optional className to apply custom styles to the wrapper element
   */
  className?: string
}
