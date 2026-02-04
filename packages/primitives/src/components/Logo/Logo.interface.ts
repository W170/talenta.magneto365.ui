export interface ILogoComponent {
  /**
   * Sets the fallback image when the image is not available
   */
  fallbackImage?: string
  /**
   * Shows the default fallback icon with alt text
   */
  showDefaultFallback?: boolean
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
