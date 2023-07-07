import React from 'react'
import { IconItem } from '../../atoms'
import { IListIcon } from '../ListIconLink'
import { IJobsActions } from './JobActions.interface'
import styles from './JobActions.module.scss'

const Component: React.FC<IJobsActions> = ({ actionButtonText, actionsListIcon }) => {
  return (
    <div className={styles.JobsActionsComponent}>
      <button>{actionButtonText}</button>
      <div className={styles['ActionsIconWrapper']}>
        {actionsListIcon?.map(({ url, Icon, assetsIcon }: IListIcon, index: number) => (
          <a className={styles['IconWrapper']} key={index} href={url} target="" rel="">
            <IconItem hover={true} size={20} Icon={Icon} assetsIcon={assetsIcon} />
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
