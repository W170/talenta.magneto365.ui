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

const Component: React.FC<IJobDetailsDrawer> = ({
  jobCompanyLogoProps,
  jobActionsProps,
  jobDetailsProps,
  jobDetailCardProps,
  jobSkillsCardProps,
  jobApplyCardProps,
  jobFooterCardProps
}) => {
  return (
    <section className={styles.JobDetailsDrawerComponent}>
      <div className={styles['JobHeaderCardWrapper']}>
        <JobCompanyHeader {...jobCompanyLogoProps} />
        <JobActions actionsButtonIcons={buttonIconsList} actionsAnchorIcons={anchorIconList} {...jobActionsProps} />
      </div>
      <JobDetails iconList={iconDetailList} detailsTextList={jobDetailsProps} />
      <JobDetailCard {...jobDetailCardProps} />
      <JobSkillsCard {...jobSkillsCardProps} />
      <JobApplyCard {...jobApplyCardProps} />
      <JobFooterCard {...jobFooterCardProps} />
    </section>
  )
}

/**
 * UI Organism Component for JobDetailsDrawer
 */

export const JobDetailsDrawer = Component
