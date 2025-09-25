import { IJobCard } from '@components/UI/molecules/JobCard/JobCard.interface'
import { IFrequentSearch, IJobSkillsCard, IPaginationProps } from '@components/UI/molecules'
import { IJobDetailsDrawer, IMobileJobDetailsDrawer } from '@components/UI/organism'
import { ISortBar } from '@components/UI/template/SortBar/SortBar.interface'
import { ISideFilter } from '@components/UI/template'
import { IFooter } from '@components/UI/template/Footer/Footer.interface'
import { DeviceType } from '@components/context/context.interface'
import { IEmptyResults } from '@components/UI/molecules/EmptyResults/EmptyResults.interface'
import { ICreateAccountCTA } from '@components/UI/molecules/CreateAccountCTA/CreateAccountCTA.interface'
import { ICreateCustomAlert } from '@components/UI/molecules/CreateCustomAlert/CreateCustomAlert.interface'

export interface IJobsPage {
  /**
   * Props for the filter bottom header section.
   * This section typically contains filter options for job listings.
   */
  sortBarProps: Omit<ISortBar, 'isFiltersOpen' | 'setIsFiltersOpen'>
  /**
   * An array of job card props to display multiple job listings.
   * Each job card contains information about a single job listing.
   */
  vacantProps: IVacancies[]
  /**
   * Props for the job details drawer component.
   * The job details drawer shows detailed information about a selected job listing.
   */
  jobDetailsDrawerProps: IJobDetailsDrawer
  /**
   * Props for the mobile version of the job details drawer component.
   * This version is displayed on mobile devices and provides job details for selected listings.
   */
  mobileJobDetailsDrawerProps: IMobileJobDetailsDrawer
  /**
   *
   */
  frequentSearchProps: IFrequentSearch
  /**
   * Props for the filters.
   *
   */
  sideFilterProps: Omit<ISideFilter, 'isFiltersOpen' | 'setIsFiltersOpen'>
  /**
   * Props for the footer
   */
  footerProps: IFooter
  /**
   * Props for the paginator
   */
  paginationProps: IPaginationProps
  setJobSelected: (id: number | null) => void
  jobSelected: IVacancies
  /**
   * this property should active loading state in the components
   */
  isLoading: boolean
  /**
   * This property indicates the type of device being rendered.
   */
  device: DeviceType
  /**
   * This property show the action detail view
   */
  jobDetailAction?: JSX.Element | undefined
  /**
   * This property show values in the empty vacants card
   */
  emptyResultsProps: IEmptyResults
  /**
   * This is the custom custom paragraph to show in the search hit pages
   */
  customParagraph?: string
  /**
   * This object contains dynamics urls that google robots will use to navigate with simple anchors in vacancies titles and pagination
   */
  dynamicPaginationUrl: IDynamicUrl
  /**
   * This property show or hide the filter always in the desktop of jobsite
   */
  displayAlwaysFilter?: boolean
  /**
   * This property sets the create account card data
   */
  createAccountCTAProps?: ICreateAccountCTA
  /**
   *  This property sets the job card type filter, which can be either 'row' or 'side'.
   */
  typeFilters?: 'row' | 'side'
  /**
   * This property sets the create account card data
   */
  createCustomAlertProps?: ICreateCustomAlert
}

export interface IVacancies extends IJobCard {
  offerVacancyData?: string
  offerDescription?: string
  offerSkills?: IJobSkillsCard
}

export interface IDynamicUrl {
  fullUrl: string
  fullJobsUrl: string
}

/**
 * Different kinds of option. links for anchor tag, button for button tag and menu for dropdown component.
 */
export type TVacantOptionType =
  | {
      type: 'link'
      href: string
    }
  | {
      type: 'menu'
      children: TVacantOption[]
    }
  | {
      type: 'button'
      onClick?: VoidFunction
    }

export type TVacantOption = {
  className?: string
  /**
   * Label to display in the option ui.
   */
  label: string
  /**
   * icon to display in the option ui.
   * @example values in ShareIcons constant like Facebook, X, Sms, Export or custom value as a link.
   */
  icon?: string
} & TVacantOptionType
