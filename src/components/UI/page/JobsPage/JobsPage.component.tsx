import React, { useState } from 'react'
import FilterContainerMenu from '@components/UI/molecules/FilterContainerMenu/FilterContainerMenu.component'
import { JobDetailContainer, JobCard, FrequentSearch } from '@components/UI/molecules'
import { JobDetailsDrawer, MobileJobDetailsDrawer } from '@components/UI/organism'
import { FilterBottomHeader, Footer, SideFilter } from '@components/UI/template'
import { useMediaQuery } from '@components/hooks'

import { IJobsPage } from './JobsPage.interface'
import style from './JobsPage.module.scss'

import { classMUI } from '../../../../constants/stories.constants'

const JobsPage: React.FC<IJobsPage> = ({
  jobDetailsDrawerProps,
  MobileJobDetailsDrawerProps,
  filterBottomHeaderProps,
  sideFilterProps,
  frequentSearchProps,
  vacantProps,
  footerProps
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
    <>
      <div className={style[`${classMUI}-jobs-page`]}>
        <div className={style[`${classMUI}-jobs-page--filter-row`]}>
          <FilterContainerMenu>
            <SideFilter {...sideFilterProps} />
          </FilterContainerMenu>
        </div>

        <div className={style[`${classMUI}-jobs-page--center-row`]}>
          <FilterBottomHeader {...filterBottomHeaderProps} />
          <div className={style[`${classMUI}-jobs-page--center-row__jobs-result`]}>
            {vacantProps.map(({ ...props }, index) => (
              <JobCard showDetail={handleDrawers} key={index} {...props} />
            ))}
          </div>
          <FrequentSearch {...frequentSearchProps} />
        </div>
        <div className={style[`${classMUI}-jobs-page__jobs-detail`]}>{JobDetailsDrawerComponent}</div>
      </div>

      <Footer {...footerProps} />
    </>
  )
}

export default JobsPage
