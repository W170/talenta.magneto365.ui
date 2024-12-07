/* eslint-disable @typescript-eslint/no-namespace */
import { ICustomText } from '@components/UI/atoms/Text/Text.interface'
import { ISimilarCardData } from '@components/UI/molecules/SimilarCard'
import { IJobCompanyLogo, IJobHeader } from '@components/UI/atoms'
export interface IJobSuggestedDrawer {
  /**
   * Management the loading status jobs ui
   */
  isLoading?: boolean
  /**
   * React children to be rendered inside the component.
   */
  children?: React.ReactNode
  /**
   * Additional class names for custom styling.
   */
  className?: string
}

export namespace IJobSuggestedDrawer {
  export interface SimilarJobCards {
    /**
     * This is the title in the top
     */
    sectionTitle: string
    /**
     * This property hide the image
     */
    hideLogo?: boolean
    /**
     * These are similar jobs cards values
     */
    similarJobsCard: ISimilarCardData[]
    /**
     * Additional class names for custom styling.
     */
    className?: string
    /**
     * The tag or keyword associated with the search item.
     */
    tag: string
    /**
     * The custom href to the anchor tag
     */
    url: string
    /**
     * This property sets the max cards to show
     */
    maxItemsToShow?: number
    /**
     * This property shows the default anchor text when the cards are empty
     */
    notItemsDefaultAnchor?: boolean
    /**
     * This property shows the default anchor text when the cards are empty
     */
    tagDefaultAnchor?: string
    /**
     * This property shows the default anchor text when the cards are empty
     */
    urlDefaultAnchor?: string
  }
  export interface AlertJob {
    /**
     * React children to be rendered inside the component.
     */
    children?: React.ReactNode

    /**
     * Additional class names for custom styling.
     */
    className?: string
    /**
     * This is the custom text
     */
    customText?: ICustomText[]
  }
  export interface Header {
    /**
     * Props for the company logo in the job company header.
     */
    jobCompanyLogoProps: IJobCompanyLogo
    /**
     * Props for the header of the job listing in the job company header.
     */
    jobHeaderProps: IJobHeader
    /**
     * Additional class names for custom styling.
     */
    className?: string
  }
}
