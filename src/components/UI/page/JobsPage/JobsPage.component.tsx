import React, { Fragment, useCallback, useEffect, useMemo, useState } from 'react'
import {
  JobDetailContainer,
  JobCard,
  FrequentSearch,
  Pagination,
  CreateAccountCTA,
  FilterContainerMenu
} from '@components/UI/molecules'
import { JobDetailsDrawer, MobileJobDetailsDrawer } from '@components/UI/organism'
import { SortBar, Footer, SideFilter } from '@components/UI/template'
import { useMediaQuery } from '@components/hooks'
import { showDetailByWindow } from './utils'
import { IJobsPage } from './JobsPage.interface'
import style from './JobsPage.module.scss'
import { classMUI } from '@constants/stories'
import { EmptyResults } from '@components/UI/molecules/EmptyResults'
import { JobCardSkeleton } from '@components/UI/molecules/JobCard/children'
import { Paragraph } from '@components/UI/atoms'
import HorizontalFilter from '@components/UI/template/HorizontalFilter/HorizontalFilter.component'

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
  jobDetailAction,
  customParagraph,
  dynamicPaginationUrl,
  displayAlwaysFilter,
  createAccountCTAProps,
  typeFilters = 'row',
  renderCustomAlert
}) => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)
  const [loadVideo, setLoadVideo] = useState(false)
  const [showDetail, setShowDetail] = useState(device === 'desktop')
  const [selectedJobId, setSelectedJobId] = useState<number | null>(null)

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
      setSelectedJobId(id)
      handleVacant(id)
      setLoadVideo(false)
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
      {jobDetailAction ? (
        jobDetailAction
      ) : (
        <JobDetailsDrawer
          {...jobDetailsDrawerProps}
          isLoading={isLoading || !jobSelected}
          selectedJobId={selectedJobId}
          loadVideo={loadVideo}
          setLoadVideo={setLoadVideo}
        />
      )}
    </JobDetailContainer>,
    {
      lg: (
        <MobileJobDetailsDrawer
          {...mobileJobDetailsDrawerProps}
          onClose={onClose}
          isOpen={showDetail}
          jobDetailAction={jobDetailAction}
          isLoading={isLoading || !jobSelected}
          loadVideo={loadVideo}
          setLoadVideo={setLoadVideo}
        />
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

  const filterAltRender = useMemo(() => {
    if (!displayAlwaysFilter && emptyVacant) return

    if (typeFilters === 'side') {
      return (
        <div className={style[`${classMUI}-jobs-page--filter-row`]}>
          <FilterContainerMenu>
            <SideFilter {...sideFilterProps} isFiltersOpen={isFiltersOpen} setIsFiltersOpen={setIsFiltersOpen} />
          </FilterContainerMenu>
        </div>
      )
    }
    return <HorizontalFilter {...sideFilterProps} isFiltersOpen={isFiltersOpen} />
  }, [displayAlwaysFilter, sideFilterProps, typeFilters, isFiltersOpen, emptyVacant])

  return (
    <Fragment>
      <div
        id="magneto-ui-jobs-page"
        className={`${style[`${classMUI}-jobs-page`]} ${
          typeFilters === 'row' ? style[`${classMUI}-jobs-page--column`] : ''
        }`}
      >
        {typeFilters === 'row' ? (
          <Fragment>
            {filterAltRender}
            <div className={style[`${classMUI}-jobs-page--row-content`]}>
              <div className={style[`${classMUI}-jobs-page--center-row`]}>
                <SortBar
                  {...sortBarProps}
                  isFiltersOpen={isFiltersOpen}
                  setIsFiltersOpen={setIsFiltersOpen}
                  emptyVacant={emptyVacant}
                  horizontal={typeFilters === 'row'}
                />
                {createAccountCTAProps && <CreateAccountCTA {...createAccountCTAProps} />}
                {mainTitleByMediaQuery}
                {renderCustomAlert && renderCustomAlert()}
                <div className={style[`${classMUI}-jobs-page--center-row__jobs-result`]}>{cardsAltRender}</div>
                {customParagraph && <Paragraph paragraph={customParagraph} />}
                <Pagination dynamicUrl={fullUrl} {...paginationProps} />
                <FrequentSearch {...frequentSearchProps} />
              </div>
              <div className={style[`${classMUI}-jobs-page__jobs-detail`]}>{JobDetailsDrawerComponent}</div>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            {filterAltRender}
            <div className={style[`${classMUI}-jobs-page--center-row`]}>
              <SortBar
                {...sortBarProps}
                isFiltersOpen={isFiltersOpen}
                setIsFiltersOpen={setIsFiltersOpen}
                emptyVacant={emptyVacant}
              />
              {createAccountCTAProps && <CreateAccountCTA {...createAccountCTAProps} />}
              {mainTitleByMediaQuery}
              {renderCustomAlert && renderCustomAlert()}
              <div className={style[`${classMUI}-jobs-page--center-row__jobs-result`]}>{cardsAltRender}</div>
              {customParagraph && <Paragraph paragraph={customParagraph} />}
              <Pagination dynamicUrl={fullUrl} {...paginationProps} />
              <FrequentSearch {...frequentSearchProps} />
            </div>
            <div className={style[`${classMUI}-jobs-page__jobs-detail`]}>{JobDetailsDrawerComponent}</div>
          </Fragment>
        )}
      </div>
      <Footer {...footerProps} />
    </Fragment>
  )
}

export default JobsPage
