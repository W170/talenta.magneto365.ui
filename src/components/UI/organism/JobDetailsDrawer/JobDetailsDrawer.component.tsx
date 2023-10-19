import React, { Fragment } from 'react'
import {
  JobCompanyHeader,
  JobActions,
  JobDetails,
  JobDetailCard,
  JobSkillsCard,
  JobApplyCard,
  JobFooterCard
} from '@components/UI/molecules'

import { IJobDetailsDrawer } from './JobDetailsDrawer.interface'
import styles from './JobDetailsDrawer.module.scss'

import { anchorIconList, iconDetailList, iconFooterList, altList } from '@constants/stories'
import { JobDetailsSkeleton } from './children'

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
  isLoading
}) => {
  if (isLoading) return <JobDetailsSkeleton />

  return (
    <Fragment>
      {jobDetailAction ? (
        jobDetailAction
      ) : (
        <section className={styles.JobDetailsDrawerComponent}>
          <div className={styles['JobHeaderCardWrapper']}>
            <JobCompanyHeader {...jobCompanyLogoProps} />
            <JobActions actionsAnchorIcons={anchorIconList} {...jobActionsProps} />
          </div>
          <div className={styles['JobBodyCardWrapper']}>
            {jobDetailsProps && (
              <JobDetails altList={altList} iconList={iconDetailList} offerDetailsList={jobDetailsProps} />
            )}
            <JobDetailCard {...jobDetailCardProps} />
            <JobSkillsCard {...jobSkillsCardProps} />
            <JobApplyCard {...jobApplyCardProps} />
            <JobFooterCard iconList={iconFooterList} {...jobFooterCardProps} />
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
