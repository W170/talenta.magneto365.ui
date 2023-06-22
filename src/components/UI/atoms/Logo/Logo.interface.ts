export interface ILogoComponent {
  /**
   * This function change between logo and isoLogo
   */
  isoView?: boolean
  /**
   * Put here the image of the logo to be rendered
   */
  logo?: string
  /**
   * Put here the image of the isologo to be rendered (IS NOT REQUIRED)
   */
  isoType?: string
  /**
   * Put here text alt  to seo
   */
  alt?: string
}
