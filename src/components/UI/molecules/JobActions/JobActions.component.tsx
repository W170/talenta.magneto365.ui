import React from 'react'
import { IconItem, MainButton } from '../../atoms'
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
    icon: actionsAnchorIcons?.[index],
    url: actionsAnchorLinks?.[index],
    target: actionsAnchorTarget?.[index]
  }))

  const actionsButtonList = actionsButtonIcons?.map((_, index: number) => ({
    icon: actionsButtonIcons?.[index],
    onClick: actionsButtonEvents?.[index]
  }))

  return (
    <div className={styles.JobsActionsComponent}>
      <MainButton buttonType="button" buttonText={actionButtonText} onClick={onHandleClick} />
      <div className={styles['ActionsIconWrapper']}>
        {actionsButtonList?.map(({ icon, onClick }, index: number) => (
          <button key={index} type="button" onClick={onClick}>
            <IconItem hover={true} size={20} icon={icon} />
          </button>
        ))}
        {actionsLinkList?.map(({ url, target, icon }, index: number) => (
          <a className={styles['IconWrapper']} key={index} href={url} target={target} rel="">
            <IconItem hover={true} size={20} icon={icon} />
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
