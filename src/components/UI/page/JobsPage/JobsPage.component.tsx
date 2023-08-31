import React, { Fragment, useCallback, useState } from 'react'
import FilterContainerMenu from '@components/UI/molecules/FilterContainerMenu/FilterContainerMenu.component'
import { JobDetailContainer, JobCard, FrequentSearch, Pagination } from '@components/UI/molecules'
import { JobDetailsDrawer, MobileJobDetailsDrawer } from '@components/UI/organism'
import { SortBar, Footer, SideFilter } from '@components/UI/template'
import { useMediaQuery } from '@components/hooks'

import { IJobsPage } from './JobsPage.interface'
import style from './JobsPage.module.scss'

import { classMUI } from '../../../../constants/stories.constants'

const JobsPage: React.FC<IJobsPage> = ({
  jobDetailsDrawerProps,
  MobileJobDetailsDrawerProps,
  sortBarProps,
  sideFilterProps,
  frequentSearchProps,
  vacantProps,
  footerProps,
  paginationProps
}) => {
  const [jobSelected, setJobSelected] = useState<string | number | null>(vacantProps[0].id)
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)
  const [showDetail, setShowDetail] = useState(true)

  const onClose = useCallback(() => {
    setShowDetail(false)
    setJobSelected(null)
  }, [])

  const JobDetailsDrawerComponent = useMediaQuery(
    <JobDetailContainer onClose={onClose} isOpen={showDetail}>
      <JobDetailsDrawer {...jobDetailsDrawerProps} />
    </JobDetailContainer>,
    {
      lg: <MobileJobDetailsDrawer {...MobileJobDetailsDrawerProps} onClose={onClose} isOpen={showDetail} />
    }
  )

  const handleVacant = useCallback((id: string | number) => {
    setJobSelected(id)
    setShowDetail(true)
  }, [])

  return (
    <Fragment>
      <div className={style[`${classMUI}-jobs-page`]}>
        <div className={style[`${classMUI}-jobs-page--filter-row`]}>
          <FilterContainerMenu>
            <SideFilter {...sideFilterProps} isFiltersOpen={isFiltersOpen} setIsFiltersOpen={setIsFiltersOpen} />
          </FilterContainerMenu>
        </div>

        <div className={style[`${classMUI}-jobs-page--center-row`]}>
          <SortBar {...sortBarProps} isFiltersOpen={isFiltersOpen} setIsFiltersOpen={setIsFiltersOpen} />
          <h1 className={style[`${classMUI}-jobs-page--title`]}>{sortBarProps?.mainTitle}</h1>
          <div className={style[`${classMUI}-jobs-page--center-row__jobs-result`]}>
            {vacantProps.map(({ id, ...props }) => (
              <JobCard isActive={id === jobSelected} id={id} showDetail={() => handleVacant(id)} key={id} {...props} />
            ))}
          </div>
          <Pagination {...paginationProps} />
          <FrequentSearch {...frequentSearchProps} />
        </div>
        <div className={style[`${classMUI}-jobs-page__jobs-detail`]}>{JobDetailsDrawerComponent}</div>
      </div>

      <Footer {...footerProps} />
    </Fragment>
  )
}

export default JobsPage
