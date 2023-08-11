import React, { useState } from 'react'
import FilterContainerMenu from '@components/UI/molecules/FilterContainerMenu/FilterContainerMenu.component'
import { JobDetailContainer, JobCard } from '@components/UI/molecules'
import { JobDetailsDrawer, MobileJobDetailsDrawer } from '@components/UI/organism'
import { FilterBottomHeader } from '@components/UI/template'
import { useMediaQuery } from '@components/hooks'

import { IJobsPage } from './JobsPage.interface'
import style from './JobsPage.module.scss'

import { classMUI } from '../../../../constants/stories.constants'

const JobsPage: React.FC<IJobsPage> = ({
  jobDetailsDrawerProps,
  MobileJobDetailsDrawerProps,
  filterBottomHeaderProps,
  vacantProps
}) => {
  const [showDetail, setShowDetail] = useState(false)
  const [showDrawer, setShowDrawer] = useState(false)

  const JobDetailsDrawerComponent = useMediaQuery(
    <JobDetailContainer onClose={() => setShowDetail(false)} isOpen={showDetail}>
      <JobDetailsDrawer {...jobDetailsDrawerProps} />
    </JobDetailContainer>,
    {
      sm: (
        <MobileJobDetailsDrawer
          {...MobileJobDetailsDrawerProps}
          onClose={() => setShowDrawer(false)}
          isOpen={showDrawer}
        />
      )
    }
  )

  const handleDrawers = useMediaQuery(() => setShowDetail(!showDetail), {
    lg: () => setShowDrawer(!showDrawer)
  })

  return (
    <div className={style[`${classMUI}-jobs-page`]}>
      <div className={style[`${classMUI}-jobs-page--filter-row`]}>
        <FilterContainerMenu>
          <p>Here should be all filters</p>
        </FilterContainerMenu>
      </div>

      <div className={style[`${classMUI}-jobs-page--center-row`]}>
        <FilterBottomHeader {...filterBottomHeaderProps} />
        <div className={style[`${classMUI}-jobs-page--center-row__jobs-result`]}>
          {vacantProps.map(({ ...props }, index) => (
            <JobCard showDetail={handleDrawers} key={index} {...props} />
          ))}
        </div>
      </div>
      {JobDetailsDrawerComponent}
    </div>
  )
}

export default JobsPage
