import React from 'react'
import {
  Drawer,
  JobCompanyHeader,
  JobDetails,
  JobDetailCard,
  JobSkillsCard,
  JobApplyCard,
  JobFooterCard
} from '@components/UI/molecules'

import { IMobileJobDetailsDrawer } from './MobileJobDetailsDrawer.interface'
import styles from './MobileJobDetailsDrawer.module.scss'

import { MobileJobDetailsHeader } from '@components/UI/molecules/MobileJobDetailsHeader/MobileJobDetailsHeader.component'

import { iconDetailList } from '@constants/stories.constants'

const Component: React.FC<IMobileJobDetailsDrawer> = ({
  jobCompanyLogoProps,
  jobDetailsHeaderText,
  jobDetailsProps,
  jobDetailCard,
  jobSkillsCardProps,
  jobApplyCardProps,
  jobFooterCardProps,
  isOpen = true,
  onClose
}) => {
  const handleClose = () => {
    if (onClose) {
      onClose()
    }
  }

  return (
    <section className={styles.MobileJobDetailsDrawer}>
      <Drawer isOpen={isOpen} onClose={handleClose} direction="right" customPadding={0} hideButton>
        <MobileJobDetailsHeader returnText={jobDetailsHeaderText} onClick={handleClose} />
        <JobCompanyHeader {...jobCompanyLogoProps} />
        <JobDetails iconList={iconDetailList} detailsTextList={jobDetailsProps} />
        {jobDetailCard.map(({ jobDetailCardText }, index: number) => (
          <React.Fragment key={index}>
            <JobDetailCard jobDetailCardText={jobDetailCardText} />
          </React.Fragment>
        ))}
        <JobSkillsCard {...jobSkillsCardProps} />
        <JobApplyCard {...jobApplyCardProps} />
        <JobFooterCard {...jobFooterCardProps} />
      </Drawer>
    </section>
  )
}

/**
 * UI Organism Component for Mobile JobDetailsDrawer
 */

export const MobileJobDetailsDrawer = Component
