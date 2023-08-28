import React from 'react'
import {
  Drawer,
  JobCompanyHeader,
  JobDetails,
  JobDetailCard,
  JobSkillsCard,
  JobApplyCard,
  JobFooterCard,
  MobileJobDetailsHeader
} from '@components/UI/molecules'
import { MobileJobDetailsActionsBar } from '../MobileJobDetailsActionsBar'

import { IMobileJobDetailsDrawer } from './MobileJobDetailsDrawer.interface'
import { iconDetailList } from '@constants/stories.constants'

const Component: React.FC<IMobileJobDetailsDrawer> = ({
  jobCompanyLogoProps,
  jobDetailsHeaderText,
  jobDetailsProps,
  jobDetailCard,
  jobSkillsCardProps,
  jobApplyCardProps,
  jobFooterCardProps,
  mobileJobDetailsBarProps,
  isOpen = true,
  onClose
}) => {
  const handleClose = () => {
    if (onClose) {
      onClose()
    }
  }

  return (
    <Drawer isOpen={isOpen} isFull={true} onClose={handleClose} direction="right" customPadding={0} hideButton isMobile>
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
      <MobileJobDetailsActionsBar {...mobileJobDetailsBarProps} />
    </Drawer>
  )
}

/**
 * UI Organism Component for Mobile JobDetailsDrawer
 */

export const MobileJobDetailsDrawer = Component
