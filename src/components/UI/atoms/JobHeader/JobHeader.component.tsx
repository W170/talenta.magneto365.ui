import React, { Fragment, useMemo } from 'react'
import { IJobHeader } from './JobHeader.interface'
import styles from './JobHeader.module.scss'

const Component: React.FC<IJobHeader> = ({ offerTitle, offerCompanyName, offerCompanyLink, isHidden }) => {
  const showCompanyName = useMemo(() => {
    if (isHidden || !offerCompanyName) return <Fragment />
    if (offerCompanyLink) {
      return (
        <a className={styles['magneto-ui-job-header__link']} href={offerCompanyLink} title={offerCompanyName}>
          {offerCompanyName}
        </a>
      )
    }
    return <h3 className={styles['magneto-ui-job-header__subtitle']}>{offerCompanyName}</h3>
  }, [isHidden, offerCompanyLink, offerCompanyName])

  return (
    <div className={styles['magneto-ui-job-header']}>
      <h2 className={styles['magneto-ui-job-header__title']}>{offerTitle}</h2>
      {showCompanyName}
    </div>
  )
}

/**
 * UI Atom component of Job Header
 */

export const JobHeader = Component
