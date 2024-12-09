import { ICustomText } from '@components/UI/atoms/Text/Text.interface'

/* eslint-disable @typescript-eslint/no-namespace */
export interface ISimilarCard {
  /**
   * this property sets the url title
   */
  title?: string
  /**
   * this property sets custom styles
   */
  className?: string
  /**
   * this property sets the url link
   */
  jobUrlSlug?: string
}

export interface ISimilarCardData {
  id?: number | null
  title: string
  salary: string | null
  toAgree: boolean | null
  cities: string[]
  jobUrlSlug: string
  experience: string | null
  companyLogo: string | null
  companyName?: string | null
  contractType?: string | null
  hideLogo?: boolean
}

export namespace ISimilarCard {
  export interface Container {
    /**
     * this property sets the alt text when source cant be loaded
     */
    title: string
    /**
     * this property sets the url link
     */
    jobUrlSlug: string
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
     * this property sets the logo source file
     */
    src?: string
    /**
     * this property sets custom styles
     */
    className?: string
    /**
     * this property sets the alt text when source cant be loaded
     */
    alt?: string
    /**
     * this property sets if should hide logo
     */
    hideLogo?: boolean
  }
  export interface Text {
    /**
     * If the text must show more than one line, use customText instead text
     * */
    customText?: ICustomText[]
    /**
     * this property sets custom styles
     */
    className?: string
  }
  export interface Icon {
    /**
     * this property sets the icon source file
     */
    src?: string
    /**
     * this property sets custom styles
     */
    className?: string
    /**
     * this property sets the alt text when source cant be loaded
     */
    alt?: string
    /**
     * this property set the icon show the source when there is a mobile resolution
     */
    showIconMobile?: boolean
  }
}
