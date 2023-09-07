import React from 'react'
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

import { anchorIconList, buttonIconsList, iconDetailList } from '@constants/stories.constants'
import { JobDetailsSkeleton } from './children'

const Component: React.FC<IJobDetailsDrawer> = ({
  jobCompanyLogoProps,
  jobActionsProps,
  jobDetailsProps,
  jobDetailCardProps,
  jobSkillsCardProps,
  jobApplyCardProps,
  jobFooterCardProps,
  isLoading
}) => {
  console.log(isLoading)
  if (isLoading) return <JobDetailsSkeleton />
  return (
    <section className={styles.JobDetailsDrawerComponent}>
      <div className={styles['JobHeaderCardWrapper']}>
        <JobCompanyHeader {...jobCompanyLogoProps} />
        <JobActions actionsButtonIcons={buttonIconsList} actionsAnchorIcons={anchorIconList} {...jobActionsProps} />
      </div>
      <div className={styles['JobBodyCardWrapper']}>
        {jobDetailsProps && <JobDetails iconList={iconDetailList} offerDetailsList={jobDetailsProps} />}
        <JobDetailCard {...jobDetailCardProps} />
        {jobSkillsCardProps && <JobSkillsCard {...jobSkillsCardProps} />}
        <JobApplyCard {...jobApplyCardProps} />
        <JobFooterCard {...jobFooterCardProps} />
      </div>
    </section>
  )
}

/**
 * UI Organism Component for JobDetailsDrawer
 */

export const JobDetailsDrawer = Component
