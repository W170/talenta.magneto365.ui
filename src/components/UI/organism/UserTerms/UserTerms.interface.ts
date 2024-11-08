/* eslint-disable @typescript-eslint/no-namespace */
export interface IUserTerm {
  /**
   * this property sets any component
   */
  children: JSX.Element | JSX.Element[]
  /**
   * this property opens the ui
   */
  isOpen: boolean
  /**
   * this property closes the ui
   */
  onClose?: () => void
}

export namespace IUserTerm {
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
  export interface SubTitle {
    /**
     * this property sets custom styles
     */
    className?: string
    /**
     * this property sets children elements
     */
    children?: React.ReactNode
  }
  export interface Highlight {
    /**
     * this property sets custom styles
     */
    className?: string
    /**
     * this property sets children elements
     */
    children?: React.ReactNode
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
  export interface Content {
    /**
     * this property sets custom styles
     */
    className?: string
    /**
     * this property sets children elements
     */
    children?: React.ReactNode
  }
  export interface UlList {
    /**
     * this property sets custom styles
     */
    className?: string
    /**
     * this property sets children elements
     */
    children?: React.ReactNode
  }

  export interface Check {
    /**
     * this property sets custom styles
     */
    className?: string
    /**
     * this property check the input
     */
    isChecked?: boolean
    /**
     * this fn returns true or false depending on checked
     */
    onChange?: (value: boolean) => void
    /**
     * this property sets children elements
     */
    children?: React.ReactNode
  }
  export interface Submit extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * this property add loading component
     */
    isLoading?: boolean
  }
}
