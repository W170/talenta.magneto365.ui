import { IJobCard } from '@components/UI/molecules/JobCard/JobCard.interface'
import { IFrequentSearch, IJobSkillsCard, IPaginationProps } from '@components/UI/molecules'
import { IJobDetailsDrawer, IMobileJobDetailsDrawer } from '@components/UI/organism'
import { ISortBar } from '@components/UI/template/SortBar/SortBar.interface'
import { ISideFilter } from '@components/UI/template'
import { IFooter } from '@components/UI/template/Footer/Footer.interface'
export interface IJobsPage {
  /**
   * Props for the filter bottom header section.
   * This section typically contains filter options for job listings.
   */
  sortBarProps: ISortBar
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
  MobileJobDetailsDrawerProps: IMobileJobDetailsDrawer
  /**
   *
   */
  frequentSearchProps: IFrequentSearch
  /**
   * Props for the filters.
   *
   */
  sideFilterProps: ISideFilter
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
}

export interface IVacancies extends IJobCard {
  offerVacancyData?: string
  offerDescription?: string
  offerSkills?: IJobSkillsCard
}
