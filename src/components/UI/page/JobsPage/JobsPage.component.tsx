import React, { Fragment, useCallback, useState } from 'react'
import FilterContainerMenu from '@components/UI/molecules/FilterContainerMenu/FilterContainerMenu.component'
import { JobDetailContainer, JobCard, FrequentSearch, Pagination } from '@components/UI/molecules'
import { JobDetailsDrawer, MobileJobDetailsDrawer } from '@components/UI/organism'
import { SortBar, Footer, SideFilter } from '@components/UI/template'
import { useMediaQuery } from '@components/hooks'
import { IJobsPage } from './JobsPage.interface'
import style from './JobsPage.module.scss'
import { classMUI } from '@constants/stories'
import { EmptyResults } from '@components/UI/molecules/EmptyResults'

const JobsPage: React.FC<IJobsPage> = ({
  jobDetailsDrawerProps,
  mobileJobDetailsDrawerProps,
  sortBarProps,
  sideFilterProps,
  frequentSearchProps,
  vacantProps,
  footerProps,
  paginationProps,
  setJobSelected,
  jobSelected,
  isLoading,
  device,
  emptyResultsProps,
  jobDetailAction
}) => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)
  const [showDetail, setShowDetail] = useState(device === 'desktop')

  const onClose = useCallback(() => {
    setShowDetail(false)
    setJobSelected(null)
  }, [setJobSelected])

  const hasVacants = !!vacantProps?.length && !isLoading

  const JobDetailsDrawerComponent = useMediaQuery(
    <JobDetailContainer onClose={onClose} isOpen={showDetail && hasVacants}>
      {jobDetailAction ? (
        jobDetailAction
      ) : (
        <JobDetailsDrawer {...jobDetailsDrawerProps} isLoading={isLoading || !jobSelected} />
      )}
    </JobDetailContainer>,
    {
      lg: (
        <MobileJobDetailsDrawer
          {...mobileJobDetailsDrawerProps}
          onClose={onClose}
          isOpen={showDetail}
          jobDetailAction={jobDetailAction}
        />
      )
    }
  )

  const handleVacant = useCallback(
    (id: number | null) => {
      if (id) {
        setJobSelected(id)
        setShowDetail(true)
        return
      }
    },
    [setJobSelected]
  )

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
            {vacantProps?.length > 0 ? (
              vacantProps.map(({ id, ...props }) => (
                <JobCard
                  isLoading={isLoading}
                  isActive={id === jobSelected?.id}
                  id={id}
                  showDetail={() => handleVacant(id)}
                  key={`${id}-JobsPage`}
                  {...props}
                />
              ))
            ) : (
              <EmptyResults {...emptyResultsProps} />
            )}
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
