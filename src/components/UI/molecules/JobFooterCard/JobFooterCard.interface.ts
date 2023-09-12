import { ReactNode } from 'react'
export interface IFooterList {
  /**
   * The URL to navigate to when the list item is clicked. Can be null if there is no URL.
   */
  href: string | null
  /**
   * The ARIA label for the list item, providing accessibility information.
   */
  ariaLabel: string
  /**
   * The icon associated with the list item. Can be null if there is no icon.
   */
  icon?: string | null
}

export interface IJobFooterCard {
  /**
   * The header or title for the footer card section.
   */
  offerFooterHeader: string
  /**
   * The URL of the company logo image to display in the footer card.
   */
  offerCompanyLogo: string
  /**
   * An array of footer list items, each representing a link or action in the footer.
   */
  offerFooterList: IFooterList[]
  /**
   * Content to be displayed as an external child element.
   */
  externalChild?: ReactNode
  /**
   * An array of string icons representing additional icons in the footer card. Can be null if there are no icons.
   */
  iconList?: string[]
  /**
   * The alternative text for the company image in the footer card. Can be null if there is no image.
   */
  companyImgAlt?: string
}
