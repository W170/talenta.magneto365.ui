import React, { Fragment, useCallback, useMemo } from 'react'
import {
  Drawer,
  JobCompanyHeader,
  JobDetailCard,
  JobVideo,
  JobSkillsCard,
  JobApplyCard,
  JobFooterCard,
  MobileJobDetailsHeader,
  FraudCardJob,
  AlertJobStatus,
  Alert,
  JobActions
} from '@components/UI/molecules'
import { MobileJobDetailsActionsBar } from '../MobileJobDetailsActionsBar'
import { MobileJobDetailsDrawerSkeleton } from './children/MobileJobDetailsDrawerSkeleton.component'

import { IMobileJobDetailsDrawer } from './MobileJobDetailsDrawer.interface'
import { anchorIconListJobsActions2, iconDetailList, iconFooterList } from '@constants/stories'
import { Swipe } from '../Swipe'
import styles from './MobileJobDetailsDrawer.module.scss'
import { ActionLinkCard } from '@components/UI/molecules/ActionLinkCard'
import { classNames } from '@shared/utils/common'
import { JobDetails } from '@components/UI/molecules/JobDetails'
import { SimilarJobs } from '@components/Domain/Jobs/SimilarJobs'

const cx = classNames.bind(styles)

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
  canApply,
  variant = 'default',
  actionLinkCardProps,
  jobActionsProps,
  alert
}) => {
  const isDetailedVariant = variant === 'detailed'
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
          <Alert type="info" text={canApply?.message} className={cx('job-locked-alert')} />
        )}
        {isApplied && <AlertJobStatus {...alertJobStatusProps} />}
        {jobActionsProps && (
          <JobActions
            actionsAnchorIcons={anchorIconListJobsActions2}
            {...jobActionsProps}
            isApplied={isApplied}
            variant={variant}
            className={cx('job-actions-card')}
            externalChildClass={cx('external-buttons')}
          />
        )}
        {alert && (
          <div className={styles['CompletionAlertWrapper']}>
            <Alert {...alert} />
          </div>
        )}
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
        {actionLinkCardProps && <ActionLinkCard {...actionLinkCardProps} />}
        {fraudCardJobProps && <FraudCardJob {...fraudCardJobProps} />}
        <JobApplyCard {...jobApplyCardProps} isApplied={isApplied} />
        <JobFooterCard iconList={iconFooterList} {...jobFooterCardProps} className={cx('job-footer-card')} />
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
    similarJobsProps,
    actionLinkCardProps,
    jobActionsProps,
    variant,
    alert
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
        {!jobDetailAction && !isDetailedVariant && (
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
