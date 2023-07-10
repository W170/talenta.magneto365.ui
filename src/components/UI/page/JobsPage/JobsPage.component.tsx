import React from 'react'
import { FilterBottomHeader } from '../../template'
import { IJobsPage } from './JobsPage.interface'

const JobsPage: React.FC<IJobsPage> = ({ filterBottomHeaderProps }) => {
  return (
    <div>
      <FilterBottomHeader {...filterBottomHeaderProps} />
    </div>
  )
}

export default JobsPage
