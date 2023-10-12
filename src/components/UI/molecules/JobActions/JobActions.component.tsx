import React from 'react'
import { IconItem, SaveButton, ShareButton } from '@components/UI/atoms'
import { IJobsActions } from './JobActions.interface'
import styles from './JobActions.module.scss'

const Component: React.FC<IJobsActions> = ({
  actionsAnchorIcons,
  actionsAnchorLinks,
  actionsAnchorTitle,
  externalButtonChild,
  saveButtonProps,
  shareButtonProps
}) => {
  const actionsLinkList = actionsAnchorIcons?.map((_, index: number) => ({
    icon: actionsAnchorIcons?.[index],
    url: actionsAnchorLinks?.[index],
    title: actionsAnchorTitle?.[index]
  }))

  const filteredActionsLinkList = actionsLinkList?.filter((item) => item.url !== null && item.url !== undefined)

  return (
    <div className={styles['magneto-ui-job-actions']}>
      <div id={styles['magneto-ui__external-child']}>{externalButtonChild}</div>
      <div className={styles['magneto-ui-job-actions__buttons-wrapper']}>
        <SaveButton {...saveButtonProps} />
        <ShareButton {...shareButtonProps} />
        {filteredActionsLinkList?.map(({ url, title, icon }) => (
          <a
            className={styles['magneto-ui-job-actions__icon-wrapper']}
            key={`${url}-JobActions`}
            href={url}
            target="_blank"
            rel="noreferrer"
            title={title}
          >
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
