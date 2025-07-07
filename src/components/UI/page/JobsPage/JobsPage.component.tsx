import React, { Fragment, useCallback, useEffect, useMemo, useState } from 'react'
import FilterContainerMenu from '@components/UI/molecules/FilterContainerMenu/FilterContainerMenu.component'
import { JobCard, FrequentSearch, Pagination, CreateAccountCTA, JobDetailContainer } from '@components/UI/molecules'
import { SortBar, Footer, SideFilter } from '@components/UI/template'
import { useMediaQuery } from '@components/hooks'
import { showDetailByWindow } from './utils'
import { IJobsPage } from './JobsPage.interface'
import style from './JobsPage.module.scss'
import { classMUI } from '@constants/stories'
import { EmptyResults } from '@components/UI/molecules/EmptyResults'
import { JobCardSkeleton } from '@components/UI/molecules/JobCard/children'
import { Paragraph } from '@components/UI/atoms'
import { JobDetails } from '@components/UI/organism/JobDetails'

const JobsPage: React.FC<IJobsPage> = ({
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
  jobDetailAction,
  customParagraph,
  dynamicPaginationUrl,
  displayAlwaysFilter,
  createAccountCTAProps,
  jobDetailsContent,
  jobDetailsTitle
}) => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)
  const [showDetail, setShowDetail] = useState(device === 'desktop')

  const { fullUrl, fullJobsUrl } = dynamicPaginationUrl || {}

  const emptyVacant = vacantProps.length === 0
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

  const handleJobCardClick = useCallback(
    (id: number | null) => {
      handleVacant(id)
    },
    [handleVacant]
  )

  useEffect(() => {
    setShowDetail(showDetailByWindow('magneto-ui-jobs-page'))
  }, [])

  const onClose = useCallback(() => {
    setShowDetail(false)
    setJobSelected(null)
  }, [setJobSelected])

  const hasVacancies = useMemo(() => !!vacantProps?.length || isLoading, [isLoading, vacantProps?.length])

  useEffect(() => {
    if (!jobSelected && showDetail && device === 'mobile') {
      onClose()
    }
  }, [device, jobSelected, onClose, showDetail])

  const JobDetailsDrawerComponent = useMediaQuery(
    <JobDetailContainer onClose={onClose} isOpen={showDetail && hasVacancies}>
      {jobDetailAction ? jobDetailAction : jobDetailsContent}
    </JobDetailContainer>,
    {
      lg: (
        <JobDetails.Drawer isMobile isOpen={showDetail && hasVacancies} onClose={onClose} title={jobDetailsTitle}>
          {jobDetailsContent}
        </JobDetails.Drawer>
      )
    }
  )

  const mainTitleByMediaQuery = useMediaQuery(<Fragment />, {
    md: <h1 className={style[`${classMUI}-jobs-page--title`]}>{sortBarProps?.mainTitle}</h1>
  })

  const cardsAltRender = useMemo(() => {
    if (isLoading) {
      return <JobCardSkeleton numCard={20} />
    }

    if (emptyVacant) {
      return <EmptyResults {...emptyResultsProps} />
    }

    return vacantProps.map(({ id, ...props }) => (
      <JobCard
        isLoading={isLoading}
        isActive={id === jobSelected?.id}
        id={id}
        showDetail={() => handleJobCardClick(id)}
        dynamicUrl={fullJobsUrl}
        key={`${id}-JobsPage`}
        {...props}
      />
    ))
  }, [isLoading, emptyVacant, emptyResultsProps, vacantProps, jobSelected, fullJobsUrl, handleJobCardClick])

  const sideFilterAltRender = useMemo(() => {
    if (!displayAlwaysFilter && emptyVacant) return

    return (
      <div className={style[`${classMUI}-jobs-page--filter-row`]}>
        <FilterContainerMenu>
          <SideFilter {...sideFilterProps} isFiltersOpen={isFiltersOpen} setIsFiltersOpen={setIsFiltersOpen} />
        </FilterContainerMenu>
      </div>
    )
  }, [displayAlwaysFilter, sideFilterProps, isFiltersOpen, emptyVacant])

  return (
    <Fragment>
      <div id="magneto-ui-jobs-page" className={style[`${classMUI}-jobs-page`]}>
        {sideFilterAltRender}
        <div className={style[`${classMUI}-jobs-page--center-row`]}>
          <SortBar
            {...sortBarProps}
            isFiltersOpen={isFiltersOpen}
            setIsFiltersOpen={setIsFiltersOpen}
            emptyVacant={emptyVacant}
          />
          {createAccountCTAProps && <CreateAccountCTA {...createAccountCTAProps} />}
          {mainTitleByMediaQuery}
          <div className={style[`${classMUI}-jobs-page--center-row__jobs-result`]}>{cardsAltRender}</div>
          {customParagraph && <Paragraph paragraph={customParagraph} />}
          <Pagination dynamicUrl={fullUrl} {...paginationProps} />
          <FrequentSearch {...frequentSearchProps} />
        </div>
        <div className={style[`${classMUI}-jobs-page__jobs-detail`]}>{JobDetailsDrawerComponent}</div>
      </div>
      <Footer {...footerProps} />
    </Fragment>
  )
}

export default JobsPage
