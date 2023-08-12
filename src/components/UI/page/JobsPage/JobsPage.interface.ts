import { IJobCard } from '@components/UI/molecules/JobCard/JobCard.interface'
import { IJobDetailsDrawer, IMobileJobDetailsDrawer } from '@components/UI/organism'
import { ISideFilter } from '@components/UI/template'
import { IFilterBottomHeader } from '@components/UI/template/FilterBottomHeader/FilterBottomHeader.interface'

export interface IJobsPage {
  /**
   * Props for the filter bottom header section.
   * This section typically contains filter options for job listings.
   */
  filterBottomHeaderProps: IFilterBottomHeader
  /**
   * An array of job card props to display multiple job listings.
   * Each job card contains information about a single job listing.
   */
  vacantProps: IJobCard[]
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
   * Props for the filters.
   *
   */
  sideFilterProps: ISideFilter
}
