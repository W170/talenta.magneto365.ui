import React, { Fragment, useCallback, useEffect, useMemo, useState } from 'react'
import { EmptyResults, JobDetailContainer, JobCard, Pagination } from '@components/UI/molecules'
import { JobCardSkeleton } from '@components/UI/molecules/JobCard/children'
import { JobDetailsDrawer, MobileJobDetailsDrawer } from '@components/UI/organism'
import { useMediaQuery } from '@components/hooks'
import { classMUI } from '@constants/stories'
import { showDetailByWindow } from '../JobsPage/utils'
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
  const [showDetail, setShowDetail] = useState(device === 'desktop')
  const [selectedJobId, setSelectedJobId] = useState<number | null>(null)

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

  const handleJobCardClick = (id: number | null) => {
    setSelectedJobId(id)
    handleVacant(id)
  }

  useEffect(() => {
    setShowDetail(showDetailByWindow('magneto-ui-suggestedJobs-page'))
  }, [])

  const onClose = useCallback(() => {
    setShowDetail(false)
    setJobSelected(null)
  }, [setJobSelected])

  const hasVacancies = useMemo(() => !!vacantProps?.length || isLoading, [isLoading, vacantProps?.length])

  const JobDetailsDrawerComponent = useMediaQuery(
    <JobDetailContainer onClose={onClose} isOpen={showDetail && hasVacancies}>
      {jobDetailAction ? (
        jobDetailAction
      ) : (
        <JobDetailsDrawer
          {...jobDetailsDrawerProps}
          isLoading={isLoading || !jobSelected}
          selectedJobId={selectedJobId}
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
        />
      )
    }
  )

  const cardsAltRender = useMemo(() => {
    if (isLoading) {
      return <JobCardSkeleton numCard={20} />
    }

    return <EmptyResults {...emptyResultsProps} />
  }, [isLoading, emptyResultsProps])

  return (
    <Fragment>
      <div id="magneto-ui-suggestedJobs-page" className={style[`${classMUI}-suggestedJobs-page`]}>
        <div className={style[`${classMUI}-suggestedJobs-page--center-row`]}>
          <div className={style[`${classMUI}-suggestedJobs-page--center-row__jobs-result`]}>
            {vacantProps.length <= 0 || isLoading
              ? cardsAltRender
              : vacantProps.map(({ id, ...props }) => (
                  <JobCard
                    isLoading={isLoading}
                    isActive={id === jobSelected?.id}
                    id={id}
                    showDetail={() => handleJobCardClick(id)}
                    key={`${id}-JobsPage`}
                    {...props}
                  />
                ))}
          </div>
          <Pagination {...paginationProps} />
        </div>
        <div className={style[`${classMUI}-suggestedJobs-page__jobs-detail`]}>{JobDetailsDrawerComponent}</div>
      </div>
    </Fragment>
  )
}

export const SuggestedJobsPage = Component
