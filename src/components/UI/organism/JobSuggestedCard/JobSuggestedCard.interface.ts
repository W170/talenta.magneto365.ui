/* eslint-disable @typescript-eslint/no-namespace */

export interface IJobSuggestedCard {
  /**
   * this property sets any component
   */
  children: JSX.Element | JSX.Element[]
  /**
   * this property sets custom styles
   */
  className?: string
}

export namespace IJobSuggestedCard {
  export interface Section {
    /**
     * this property sets custom styles
     */
    className?: string

    /**
     * this property sets any component
     */
    children: JSX.Element | JSX.Element[]

    /**
     * this property update to position align the components
     */
    aligned?: 'start' | 'center' | 'end'
  }

  export interface Title {
    /**
     * this property sets custom styles
     */
    className?: string
    /**
     * this property sets children elements
     */
    children?: React.ReactNode
  }

  export interface Logo {
    /**
     * this property sets custom styles
     */
    className?: string
    /**
     * this property added icon
     */
    logo: string
  }

  export interface Text {
    /**
     * this property sets custom styles
     */
    className?: string
    /**
     * this property sets children elements
     */
    children?: React.ReactNode
  }

  export interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * this property sets custom styles
     */
    className?: string
    /**
     * this property sets custom style button
     */
    variant?: 'primary' | 'secondary'
  }
}
