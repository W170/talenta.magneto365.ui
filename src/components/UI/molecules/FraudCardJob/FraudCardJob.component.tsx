import React from 'react'
import { Warning3D, WarningHex } from '@constants/icons.constants'
import { IFraudCardJob } from './FraudCardJob.interface'
import styles from './FraudCardJob.module.scss'

const Component: React.FC<IFraudCardJob> = ({ title, content, linkText, link }) => {
  return (
    <div className={styles['fraud-card-job']}>
      <div className={styles['fraud-card-job__header']}>
        <img src={Warning3D} alt="warning" />
        <h4>{title}</h4>
      </div>
      <div>
        <p className={styles['fraud-card-job__text']}>{content}</p>
        <a target="_blank" rel="noreferrer" className={styles['fraud-card-job__link']} href={link}>
          <img src={WarningHex} alt="warning" />
          {linkText}
        </a>
      </div>
    </div>
  )
}

export const FraudCardJob = Component
