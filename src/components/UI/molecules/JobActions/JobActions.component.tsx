import React from 'react'
import { IconItem, SaveButton, ShareButton } from '@components/UI/atoms'
import { IJobsActions } from './JobActions.interface'
import styles from './JobActions.module.scss'

const Component: React.FC<IJobsActions> = ({
  actionsAnchorIcons,
  actionsAnchorLinks,
  externalButtonChild,
  saveButtonProps,
  shareButtonProps
}) => {
  const actionsAnchorTarget = ['_blank', '_self']

  const actionsLinkList = actionsAnchorIcons?.map((_, index: number) => ({
    icon: actionsAnchorIcons?.[index],
    url: actionsAnchorLinks?.[index],
    target: actionsAnchorTarget?.[index]
  }))

  return (
    <div className={styles['magneto-ui-job-actions']}>
      <div id={styles['magneto-ui__external-child']}>{externalButtonChild}</div>
      <div className={styles['magneto-ui-job-actions__buttons-wrapper']}>
        <SaveButton {...saveButtonProps} />
        <ShareButton {...shareButtonProps} />
        {actionsLinkList?.map(({ url, target, icon }, index: number) => (
          <a className={styles['magneto-ui-job-actions__icon-wrapper']} key={index} href={url} target={target} rel="">
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
