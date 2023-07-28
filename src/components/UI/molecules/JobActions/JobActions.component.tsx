import React from 'react'
import { IconItem, MainButton } from '@components/UI/atoms'
import { IJobsActions } from './JobActions.interface'
import styles from './JobActions.module.scss'

const Component: React.FC<IJobsActions> = ({
  actionButtonText,
  actionsButtonIcons,
  actionsButtonEvents,
  actionsAnchorIcons,
  actionsAnchorLinks,
  onHandleClick
}) => {
  const actionsAnchorTarget = ['_blank', '_self']

  const actionsLinkList = actionsAnchorIcons?.map((_, index: number) => ({
    Icon: actionsAnchorIcons?.[index],
    url: actionsAnchorLinks?.[index],
    target: actionsAnchorTarget?.[index]
  }))

  const actionsButtonList = actionsButtonIcons?.map((_, index: number) => ({
    Icon: actionsButtonIcons?.[index],
    onClick: actionsButtonEvents?.[index]
  }))

  return (
    <div className={styles['magneto-ui-job-actions']}>
      <MainButton buttonType="button" buttonText={actionButtonText} onClick={onHandleClick} />
      <div className={styles['magneto-ui-job-actions__buttons-wrapper']}>
        {actionsButtonList?.map(({ Icon, onClick }, index: number) => (
          <button key={index} type="button" onClick={onClick}>
            <IconItem hover={true} size={20} Icon={Icon} />
          </button>
        ))}
        {actionsLinkList?.map(({ url, target, Icon }, index: number) => (
          <a className={styles['magneto-ui-job-actions__icon-wrapper']} key={index} href={url} target={target} rel="">
            <IconItem hover={true} size={20} Icon={Icon} />
          </a>
        ))}
      </div>
    </div>
  )
}

/**
 * UI Molecule Component for Jobs Actions
 */

export const JobActions = Component
