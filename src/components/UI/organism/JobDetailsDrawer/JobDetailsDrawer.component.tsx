import React, { Fragment, useEffect, useRef } from 'react'
import {
  JobCompanyHeader,
  JobActions,
  JobDetailCard,
  JobVideo,
  JobSkillsCard,
  JobApplyCard,
  JobFooterCard,
  FraudCardJob,
  AlertJobStatus,
  Alert
} from '@components/UI/molecules'

import { IJobDetailsDrawer } from './JobDetailsDrawer.interface'
import styles from './JobDetailsDrawer.module.scss'

import { anchorIconList, iconDetailList, iconFooterList, altList, anchorIconListJobsActions2 } from '@constants/stories'
import { JobDetailsSkeleton } from './children'

import { ActionLinkCard } from '@components/UI/molecules/ActionLinkCard'
import { JobDetails } from '@components/UI/molecules/JobDetails'
import { SimilarJobs } from '@components/Domain/Jobs/SimilarJobs'
import { JobsFaqs } from '@components/Domain/Jobs/JobDetails/children/JobsFaqs'
import { JobsFaqsLink } from '@components/Domain/Jobs/JobDetails/children/JobsFaqs/JobsFaqsLink'

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
  canApply,
  variant,
  isJobDetailPage,
  actionLinkCardProps,
  faqs
}) => {
  const jobDetailsRef = useRef<HTMLDivElement | null>(null)
  const isDetailVariant = variant === 'detailed'

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
              <JobActions
                actionsAnchorIcons={isDetailVariant ? anchorIconListJobsActions2 : anchorIconList}
                {...jobActionsProps}
                isApplied={isApplied}
                isJobDetailPage={isJobDetailPage}
                variant={variant}
              />
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
            {actionLinkCardProps && <ActionLinkCard {...actionLinkCardProps} />}
            {fraudCardJobProps && <FraudCardJob {...fraudCardJobProps} />}
            <JobApplyCard {...jobApplyCardProps} />
            {faqs && (
              <JobsFaqs title={faqs.title} roundEdges={true}>
                {faqs.questions.map(({ question, href }, index) => (
                  <JobsFaqsLink key={index} text={question} href={href} />
                ))}
              </JobsFaqs>
            )}
            <JobFooterCard iconList={iconFooterList} {...jobFooterCardProps} variant={variant} />
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
