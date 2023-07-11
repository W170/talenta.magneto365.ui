import React, { useState } from 'react'
import { FilterBottomHeader } from '../../template'
import { IJobsPage } from './JobsPage.interface'
import { JobCard } from '../../molecules/JobCard'
import FilterContainerMenu from '../../molecules/FilterContainerMenu/FilterContainerMenu.component'
import { classMUI } from '../../../../constants/stories.constants'
import style from './JobsPage.module.scss'
import { JobDetailContainer } from '../../molecules/JobDetailContainer'

const JobsPage: React.FC<IJobsPage> = ({ filterBottomHeaderProps }) => {
  const [showDetail, setShowDetail] = useState(false)

  return (
    <div className={style[`${classMUI}-jobs-page`]}>
      <FilterContainerMenu>
        <p>Here should be all filters</p>
      </FilterContainerMenu>
      <div className={style[`${classMUI}-jobs-page--center-row`]}>
        <FilterBottomHeader {...filterBottomHeaderProps} />
        <div className={style[`${classMUI}-jobs-page--center-row__jobs-result`]}>
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <button onClick={() => setShowDetail(!showDetail)}>Abre pa</button>
        </div>
      </div>
      <JobDetailContainer onClose={() => setShowDetail(false)} isOpen={showDetail}>
        <p>Detail Vacant</p>
        <p>Here should be detail organism</p>
      </JobDetailContainer>
    </div>
  )
}

export default JobsPage
