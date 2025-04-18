import React, { Fragment, useEffect, useRef } from 'react'
import {
  JobCompanyHeader,
  JobActions,
  JobDetailCard,
  JobVideo,
  JobSkillsCard,
  JobApplyCard,
  JobFooterCard,
  JobDetails,
  FraudCardJob,
  AlertJobStatus,
  Alert
} from '@components/UI/molecules'

import { IJobDetailsDrawer } from './JobDetailsDrawer.interface'
import styles from './JobDetailsDrawer.module.scss'

import { anchorIconList, iconDetailList, iconFooterList, altList } from '@constants/stories'
import { JobDetailsSkeleton } from './children'
import { SimilarJobs } from '../SimilarJobs'

const Component: React.FC<IJobDetailsDrawer> = ({
  jobCompanyLogoProps,
  jobActionsProps,
  jobDetailsProps,
  jobDetailCardProps,
  jobSkillsCardProps,
  jobApplyCardProps,
  jobFooterCardProps,
  jobDetailAction,
  modalPendingInfoComponent,
  isLoading,
  selectedJobId,
  similarJobsProps,
  jobVideo,
  loadVideo,
  setLoadVideo,
  cities,
  isRemote,
  textRemote,
  fraudCardJobProps,
  alertJobStatusProps,
  isApplied,
  canApply
}) => {
  const jobDetailsRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (jobDetailsRef.current) {
      jobDetailsRef.current.scrollTop = 0
    }
  }, [selectedJobId])

  if (isLoading) return <JobDetailsSkeleton />

  return (
    <Fragment>
      {jobDetailAction ? (
        jobDetailAction
      ) : (
        <section className={styles.JobDetailsDrawerComponent}>
          <div className={styles['JobHeaderCardWrapper']}>
            <JobCompanyHeader {...jobCompanyLogoProps} isApplied={isApplied} jobActionsProps={jobActionsProps} />
            {canApply?.isApplicable === false && (
              <Alert type="info" text={canApply?.message} className={styles.JobLockedAlert} />
            )}
            {isApplied ? (
              <AlertJobStatus {...alertJobStatusProps} />
            ) : (
              <JobActions actionsAnchorIcons={anchorIconList} {...jobActionsProps} />
            )}
          </div>
          <div className={styles['JobBodyCardWrapper']} ref={jobDetailsRef}>
            {jobDetailsProps && (
              <JobDetails
                altList={altList}
                iconList={iconDetailList}
                offerDetailsList={jobDetailsProps}
                cities={cities}
                isRemote={isRemote}
                textRemote={textRemote}
              />
            )}
            {jobVideo && <JobVideo {...jobVideo} loadVideo={loadVideo} setLoadVideo={setLoadVideo} />}
            <JobDetailCard {...jobDetailCardProps} />
            <JobSkillsCard {...jobSkillsCardProps} />
            {fraudCardJobProps && <FraudCardJob {...fraudCardJobProps} />}
            <JobApplyCard {...jobApplyCardProps} />
            <JobFooterCard iconList={iconFooterList} {...jobFooterCardProps} />
            {similarJobsProps ? <SimilarJobs {...similarJobsProps} /> : null}
          </div>
        </section>
      )}
      {modalPendingInfoComponent}
    </Fragment>
  )
}

/**
 * UI Organism Component for JobDetailsDrawer
 */

export const JobDetailsDrawer = Component
