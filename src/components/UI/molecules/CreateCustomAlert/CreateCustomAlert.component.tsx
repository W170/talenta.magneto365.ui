import React from 'react'
import { ICreateCustomAlert } from './CreateCustomAlert.interface'
import { ArrowRight2, Message3D } from '@constants/icons.constants'
import { DotsLoader } from '@components/UI/atoms'
import styles from './createCustomAlert.module.scss'

const Component: React.FC<ICreateCustomAlert> = ({ onClick, title, isLoading }) => {
  return (
    <button disabled={isLoading} onClick={onClick} className={styles['create-custom-alert']}>
      {isLoading ? (
        <div className={styles['create-custom-alert__loader']}>
          <DotsLoader color="#1a324c" count={3} />
        </div>
      ) : (
        <>
          <img className={styles['create-custom-alert__icon']} src={Message3D} alt="avatar" />
          <div className={styles['create-custom-alert__summary']}>
            <h4>{title}</h4>
          </div>
          <img className={styles['create-custom-alert__arrow']} src={ArrowRight2} alt="arrow" />
        </>
      )}
    </button>
  )
}

export const CreateCustomAlert = Component
