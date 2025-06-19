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
  /**
   * unique identifier for the job or card.
   */
  id?: number | null

  /**
   * title of the job or offer. Required.
   */
  title: string

  /**
   * salary for the job. Can be a string or null.
   */
  salary: string | null

  /**
   * indicates if agreement is required for the job. Optional, can be boolean or null.
   */
  toAgree: boolean | null

  /**
   * list of cities where the job is available. Required.
   */
  cities: string[]

  /**
   * URL slug for the job.
   */
  jobUrlSlug: string

  /**
   * required experience for the job.
   */
  experience: string | null

  /**
   * URL for the company logo.
   */
  companyLogo: string | null

  /**
   * company name.
   */
  companyName?: string | null

  /**
   * type of contract for the job.
   */
  contractType?: string | null

  /**
   * determines if the company logo should be hidden.
   */
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
    customText?: CustomText[]
    /**
     * this property sets custom styles
     */
    className?: string
    /**
     * This property allows you to set the tag for the first text.
     */
    headingType?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  }
  export interface CustomText {
    /**
     * This is the value to the custom text
     * */
    value: string | React.ReactNode
    /**
     * This is the custom font weight to text
     * */
    fontWeight: 'normal' | 'bold' | 'lighter'
    /**
     * This is the custom line break to text
     * */
    lineBreak?: boolean
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
