import { IJobCard } from '../../molecules/JobCard/JobCard.interface'
import { IFilterBottomHeader } from '../../template/FilterBottomHeader/FilterBottomHeader.interface'

export interface IJobsPage {
  filterBottomHeaderProps: IFilterBottomHeader
  vacantProps: IJobCard[]
}
