import React, { Fragment, useCallback, useMemo } from 'react'
import {
  Drawer,
  JobCompanyHeader,
  JobDetails,
  JobDetailCard,
  JobVideo,
  JobSkillsCard,
  JobApplyCard,
  JobFooterCard,
  MobileJobDetailsHeader
} from '@components/UI/molecules'
import { MobileJobDetailsActionsBar } from '../MobileJobDetailsActionsBar'
import { MobileJobDetailsDrawerSkeleton } from './children/MobileJobDetailsDrawerSkeleton.component'

import { IMobileJobDetailsDrawer } from './MobileJobDetailsDrawer.interface'
import { iconDetailList, iconFooterList } from '@constants/stories'
import { SimilarJobs } from '../SimilarJobs'
import { Swipe } from '../Swipe'

const Component: React.FC<IMobileJobDetailsDrawer> = ({
  jobCompanyLogoProps,
  jobDetailsHeaderText,
  jobDetailsProps,
  jobDetailCardProps,
  jobSkillsCardProps,
  jobApplyCardProps,
  jobFooterCardProps,
  mobileJobDetailsBarProps,
  jobDetailAction,
  modalPendingInfoComponent,
  isOpen = true,
  isLoading,
  onClose,
  similarJobsProps,
  jobVideo,
  loadVideo,
  setLoadVideo,
  swipeProps,
  cities,
  isRemote,
  textRemote
}) => {
  const handleClose = useCallback(() => {
    if (onClose) {
      onClose()
    }
  }, [onClose])

  const renderContent = useMemo(() => {
    return jobDetailAction ? (
      jobDetailAction
    ) : isLoading ? (
      <MobileJobDetailsDrawerSkeleton />
    ) : (
      <Fragment>
        <MobileJobDetailsHeader returnText={jobDetailsHeaderText} onClick={handleClose} />
        <JobCompanyHeader {...jobCompanyLogoProps} />
        {jobDetailsProps && (
          <JobDetails
            iconList={iconDetailList}
            offerDetailsList={jobDetailsProps}
            cities={cities}
            isRemote={isRemote}
            textRemote={textRemote}
          />
        )}
        {jobVideo && <JobVideo {...jobVideo} loadVideo={loadVideo} setLoadVideo={setLoadVideo} />}
        <JobDetailCard {...jobDetailCardProps} />
        {jobSkillsCardProps && <JobSkillsCard {...jobSkillsCardProps} />}
        <JobApplyCard {...jobApplyCardProps} />
        <JobFooterCard iconList={iconFooterList} {...jobFooterCardProps} />
        {similarJobsProps ? <SimilarJobs {...similarJobsProps} /> : null}
      </Fragment>
    )
  }, [
    handleClose,
    isLoading,
    jobApplyCardProps,
    jobCompanyLogoProps,
    jobDetailAction,
    jobDetailCardProps,
    jobDetailsHeaderText,
    jobDetailsProps,
    jobFooterCardProps,
    jobSkillsCardProps,
    similarJobsProps,
    jobVideo,
    loadVideo,
    setLoadVideo,
    cities,
    isRemote,
    textRemote
  ])

  const content = useMemo(
    () =>
      swipeProps ? (
        <Swipe {...swipeProps} openModal={isOpen && swipeProps.openModal}>
          {renderContent}
        </Swipe>
      ) : (
        renderContent
      ),
    [isOpen, renderContent, swipeProps]
  )

  return (
    <Fragment>
      <Drawer
        isOpen={isOpen}
        isFull={true}
        onClose={handleClose}
        direction="right"
        customPadding={0}
        hideButton
        isMobile
      >
        {content}
        {!jobDetailAction && <MobileJobDetailsActionsBar {...mobileJobDetailsBarProps} onClose={isOpen} />}
      </Drawer>
      {modalPendingInfoComponent}
    </Fragment>
  )
}

/**
 * UI Organism Component for Mobile JobDetailsDrawer
 */

export const MobileJobDetailsDrawer = Component
