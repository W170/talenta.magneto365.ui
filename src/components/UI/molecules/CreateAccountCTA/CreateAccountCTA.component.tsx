import React from 'react'
import { Avatar3DImg } from '@constants/img.constants'
import { ICreateAccountCTA } from './CreateAccountCTA.interface'
import { ArrowRight2 } from '@constants/icons.constants'
import { DotsLoader } from '@components/UI/atoms'
import styles from './CreateAccountCTA.module.scss'

const Component: React.FC<ICreateAccountCTA> = ({ ctaClick, description, title, isLoading }) => {
  return (
    <button onClick={ctaClick} className={styles['create-account-cta']}>
      {isLoading ? (
        <div className={styles['create-account-cta__loader']}>
          <DotsLoader color="#1a324c" count={3} />
        </div>
      ) : (
        <>
          <img className={styles['create-account-cta__avatar']} src={Avatar3DImg} alt="avatar" />
          <div className={styles['create-account-cta__summary']}>
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
          <img className={styles['create-account-cta__arrow']} src={ArrowRight2} alt="arrow" />
        </>
      )}
    </button>
  )
}

export const CreateAccountCTA = Component
