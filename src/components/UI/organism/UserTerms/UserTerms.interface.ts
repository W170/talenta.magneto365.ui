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
  onClose: () => void
}

export namespace IUserTerm {
  export interface Title {
    className?: string
    /**
     * this property sets custom styles
     */
  }
  export interface SubTitle {
    className?: string
    /**
     * this property sets custom styles
     */
  }
  export interface Highlight {
    className?: string
    /**
     * this property sets custom styles
     */
  }
  export interface Text {
    className?: string
    /**
     * this property sets custom styles
     */
  }
  export interface Content {
    className?: string
    /**
     * this property sets custom styles
     */
  }
  export interface UlList {
    className?: string
    /**
     * this property sets custom styles
     */
  }

  export interface Check {
    /**
     * this property sets custom styles
     */
    className?: string
    /**
     * this property check the input
     */
    isChecked: boolean
    /**
     * this fn returns true or false depending on checked
     */
    onChange: (value: boolean) => void
  }
  export interface Submit extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * this property add loading component
     */
    isLoading?: boolean
  }
}
