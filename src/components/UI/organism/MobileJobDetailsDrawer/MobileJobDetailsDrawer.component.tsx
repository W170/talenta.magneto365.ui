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
  MobileJobDetailsHeader,
  FraudCardJob,
  AlertJobStatus,
  Alert
} from '@components/UI/molecules'
import { MobileJobDetailsActionsBar } from '../MobileJobDetailsActionsBar'
import { MobileJobDetailsDrawerSkeleton } from './children/MobileJobDetailsDrawerSkeleton.component'

import { IMobileJobDetailsDrawer } from './MobileJobDetailsDrawer.interface'
import { iconDetailList, iconFooterList } from '@constants/stories'
import { SimilarJobs } from '../SimilarJobs'
import { Swipe } from '../Swipe'
import styles from './MobileJobDetailsDrawer.module.scss'

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
  textRemote,
  fraudCardJobProps,
  isApplied,
  alertJobStatusProps,
  canApply
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
        {canApply?.isApplicable === false && (
          <Alert type="info" text={canApply?.message} className={styles['job-locked-alert']} />
        )}
        {isApplied && <AlertJobStatus {...alertJobStatusProps} />}
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
        {fraudCardJobProps && <FraudCardJob {...fraudCardJobProps} />}
        <JobApplyCard {...jobApplyCardProps} isApplied={isApplied} />
        <JobFooterCard iconList={iconFooterList} {...jobFooterCardProps} />
        {similarJobsProps ? <SimilarJobs {...similarJobsProps} /> : null}
      </Fragment>
    )
  }, [
    jobDetailAction,
    isLoading,
    jobDetailsHeaderText,
    handleClose,
    canApply?.isApplicable,
    canApply?.message,
    jobCompanyLogoProps,
    isApplied,
    alertJobStatusProps,
    jobDetailsProps,
    cities,
    isRemote,
    textRemote,
    jobVideo,
    loadVideo,
    setLoadVideo,
    jobDetailCardProps,
    jobSkillsCardProps,
    fraudCardJobProps,
    jobApplyCardProps,
    jobFooterCardProps,
    similarJobsProps
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
        {!jobDetailAction && (
          <MobileJobDetailsActionsBar {...mobileJobDetailsBarProps} onClose={isOpen} isApplied={isApplied} />
        )}
      </Drawer>
      {modalPendingInfoComponent}
    </Fragment>
  )
}

/**
 * UI Organism Component for Mobile JobDetailsDrawer
 */

export const MobileJobDetailsDrawer = Component
