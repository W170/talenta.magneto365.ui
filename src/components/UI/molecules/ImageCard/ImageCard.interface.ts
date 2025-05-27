import { IconProps } from '@components/UI/atoms'

export interface ICardImage {
  /**
   * Path to the image to be displayed.
   */
  imagePath: string
  /**
   * Title of the image card.
   */
  title: string
  /**
   * Additional class names for custom styling.
   */
  className?: string
  /**
   * Description of the image card.
   */
  description?: string
  /**
   * Alt text for the image.
   */
  alt?: string
  /**
   * Custom direct dimensions for the image card.
   */
  dimensions?: ICardImageStyles
  /**
   * Icon props to be displayed on the image card.
   */
  icon?: IconProps & { showIcon?: boolean }
  /**
   *  Link to be opened when the image card is clicked.
   */
  link?: string
}

interface ICardImageStyles {
  /**
   * Height of the image card.
   */
  height?: string
  /**
   * Width of the image card.
   */
  width?: string
}
