import React, { Fragment, useCallback, useEffect, useMemo, useState } from 'react'
import { EmptyResults, JobDetailContainer, JobCard } from '@components/UI/molecules'
import { JobCardSkeleton } from '@components/UI/molecules/JobCard/children'
import { JobDetailsDrawer, MobileJobDetailsDrawer } from '@components/UI/organism'
import { useMediaQuery } from '@components/hooks'
import { classMUI } from '@constants/stories'
import { ISuggestedJobsPage } from './SuggestedJobsPage.interface'
import style from './SuggestedJobsPage.module.scss'

const Component: React.FC<ISuggestedJobsPage> = ({
  device,
  emptyResultsProps,
  isLoading,
  jobDetailAction,
  jobDetailsDrawerProps,
  jobSelected,
  mobileJobDetailsDrawerProps,
  paginationProps,
  setJobSelected,
  vacantProps
}) => {
  const [isBottomPage, setIsBottomPage] = useState<boolean>(false)
  const [showDetail, setShowDetail] = useState(device === 'desktop')
  const [selectedJobId, setSelectedJobId] = useState<number | null>(null)

  const {
    total: totalVacants,
    onChange: onChangePage,
    current: currentPage,
    pageSize
  } = useMemo(() => paginationProps, [paginationProps])

  const hasVacancies = useMemo(() => !!vacantProps?.length || isLoading, [isLoading, vacantProps?.length])
  const vacantsLength = useMemo(() => vacantProps.length, [vacantProps.length])
  const fetchMoredata = useMemo(
    () => isBottomPage && !isLoading && totalVacants > vacantsLength && pageSize * currentPage == vacantsLength,
    [currentPage, isBottomPage, isLoading, pageSize, totalVacants, vacantsLength]
  )
  const cardsAltRender = useMemo(() => {
    if (isLoading) {
      return currentPage == 1 ? <JobCardSkeleton numCard={20} /> : null
    }

    return <EmptyResults {...emptyResultsProps} />
  }, [isLoading, emptyResultsProps, currentPage])

  useEffect(() => {
    const element = document.getElementsByTagName('body')[0]
    element.style.overflowY = 'hidden'
    return () => {
      element.style.overflowY = 'auto'
    }
  }, [])

  useEffect(() => {
    if (!fetchMoredata) return
    onChangePage(currentPage + 1, pageSize)
  }, [currentPage, fetchMoredata, onChangePage, pageSize, paginationProps])

  useEffect(() => {
    const element = document.getElementById('magneto-ui-suggestedJobs-page')
    if (!element) return
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = element
      const isBottom = scrollTop + clientHeight >= scrollHeight
      if (isBottomPage != isBottom) setIsBottomPage(isBottom)
    }
    element.addEventListener('scroll', handleScroll)
    return () => {
      element.removeEventListener('scroll', handleScroll)
    }
  }, [isBottomPage])

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

  const onClose = useCallback(() => {
    setShowDetail(false)
    setJobSelected(null)
  }, [setJobSelected])

  const JobDetailsDrawerComponent = useMediaQuery(
    <JobDetailContainer onClose={onClose} isOpen={showDetail && hasVacancies}>
      {jobDetailAction ? (
        jobDetailAction
      ) : (
        <JobDetailsDrawer {...jobDetailsDrawerProps} isLoading={!jobSelected} selectedJobId={selectedJobId} />
      )}
    </JobDetailContainer>,
    {
      lg: (
        <MobileJobDetailsDrawer
          {...mobileJobDetailsDrawerProps}
          onClose={onClose}
          isOpen={showDetail}
          jobDetailAction={jobDetailAction}
          isLoading={!jobSelected}
        />
      )
    }
  )

  const handleJobCardClick = (id: number | null) => {
    setSelectedJobId(id)
    handleVacant(id)
  }

  return (
    <Fragment>
      <div id="magneto-ui-suggestedJobs-page" className={style[`${classMUI}-suggestedJobs-page`]}>
        <div className={style[`${classMUI}-suggestedJobs-page--center-row`]}>
          <div className={style[`${classMUI}-suggestedJobs-page--center-row__jobs-result`]}>
            {vacantProps.length <= 0 || (isLoading && currentPage == 1)
              ? cardsAltRender
              : vacantProps.map(({ id, ...props }) => (
                  <>
                    <JobCard
                      isLoading={isLoading}
                      isActive={id === jobSelected?.id}
                      id={id}
                      showDetail={() => handleJobCardClick(id)}
                      key={`${id}-JobsPage`}
                      {...props}
                    />
                  </>
                ))}
            {isLoading && currentPage > 1 && <JobCardSkeleton numCard={1} goToBottom />}
          </div>
        </div>
        <div className={style[`${classMUI}-suggestedJobs-page__jobs-detail`]}>{JobDetailsDrawerComponent}</div>
      </div>
    </Fragment>
  )
}

export const SuggestedJobsPage = Component
