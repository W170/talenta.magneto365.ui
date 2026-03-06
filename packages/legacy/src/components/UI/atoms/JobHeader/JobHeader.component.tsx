import React, { Fragment, useMemo } from 'react'
import { IJobHeader } from './JobHeader.interface'
import styles from './JobHeader.module.scss'
import { TYPE_TITLE } from '../../../../constants/stories/typeTitleJobDetail.constant'
import { MainTitleJobDetails } from '../../organism/JobDetailsDrawer/children/MainTitle'
import { SubTitleJobDetails } from '../../organism/JobDetailsDrawer/children/SubTitle'

const Component: React.FC<IJobHeader> = ({ offerTitle, offerCompanyName, offerCompanyLink, isHidden, typeTitle }) => {
  const showCompanyName = useMemo(() => {
    if (isHidden || !offerCompanyName) return <Fragment />
    if (offerCompanyLink) {
      return (
        <a className={styles['magneto-ui-job-header__link']} href={offerCompanyLink} title={offerCompanyName}>
          {offerCompanyName}
        </a>
      )
    }
    return <h2 className={styles['magneto-ui-job-header__subtitle']}>{offerCompanyName}</h2>
  }, [isHidden, offerCompanyLink, offerCompanyName])

  const GenerateTitle = () => {
    if (typeTitle === TYPE_TITLE.SUB_TITLE)
      return <SubTitleJobDetails styles={styles['magneto-ui-job-header__title']} title={String(offerTitle)} />
    return <MainTitleJobDetails styles={styles['magneto-ui-job-header__title']} title={String(offerTitle)} />
  }

  return (
    <div className={styles['magneto-ui-job-header']}>
      {GenerateTitle()}
      {showCompanyName}
    </div>
  )
}

/**
 * UI Atom component of Job Header
 */

export const JobHeader = Component
