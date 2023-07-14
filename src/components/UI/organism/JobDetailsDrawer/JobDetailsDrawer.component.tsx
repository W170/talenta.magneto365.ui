import React from 'react'
import { JobHeaderCard } from '../../molecules/JobHeaderCard'
import { JobDetails } from '../../molecules/JobDetails'
import { IJobDetailCard, JobDetailCard } from '../../molecules/JobDetailCard'
import { JobSkillsCard } from '../../molecules/JobSkillsCard'
import { JobApplyCard } from '../../molecules/JobApplyCard'
import { JobFooterCard } from '../../molecules/JobFooterCard'

import { IJobDetailsDrawer } from './JobDetailsDrawer.interface'
import styles from './JobDetailsDrawer.module.scss'
import { iconDetailList } from '@constants/stories.constants'

const Component: React.FC<IJobDetailsDrawer> = ({
  jobHeaderCardProps,
  jobDetailsProps,
  jobDetailCard,
  jobSkillsCardProps,
  jobApplyCardProps,
  jobFooterCardProps
}) => {
  return (
    <section className={styles.JobDetailsDrawerComponent}>
      <JobHeaderCard {...jobHeaderCardProps} />
      <JobDetails iconList={iconDetailList} detailsTextList={jobDetailsProps} />
      {jobDetailCard.map(({ jobDetailCardHeader, jobDetailCardText }: IJobDetailCard, index: number) => (
        <React.Fragment key={index}>
          <JobDetailCard jobDetailCardHeader={jobDetailCardHeader} jobDetailCardText={jobDetailCardText} />
        </React.Fragment>
      ))}
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
