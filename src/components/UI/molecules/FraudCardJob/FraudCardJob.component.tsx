import React from 'react'
import styles from './FraudCardJob.module.scss'
import { Warning3D, WarningHex } from '@constants/icons.constants'

const Component = ({ fraudLink }: { fraudLink: string }) => {
  return (
    <div className={styles['fraud-card-job']}>
      <div className={styles['fraud-card-job__header']}>
        <img src={Warning3D} alt="warning" />
        <h4>¡Ten cuidado con el fraude!</h4>
      </div>
      <div>
        <p className={styles['fraud-card-job__text']}>
          Magneto y sus empresas aliadas nunca te pedirán dinero a cambio en un proceso de selección. Ten cuidado,
          revisa bien la vacante y si ves algo sospechoso repórtalo.
        </p>
        <a target="_blank" rel="noreferrer" className={styles['fraud-card-job__link']} href={fraudLink}>
          <img src={WarningHex} alt="warning" />
          Reportar fraude
        </a>
      </div>
    </div>
  )
}

export const FraudCardJob = Component
