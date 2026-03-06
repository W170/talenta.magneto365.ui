import React from 'react'
import { ICreateAccountCTA } from './CreateAccountCTA.interface'
import { ProfileAdd, SmsStar } from '@constants/icons.constants'
import { DotsLoader, Typography, MainButton } from '@components/UI/atoms'
import styles from './CreateAccountCTA.module.scss'

const Component: React.FC<ICreateAccountCTA> = ({
  onHandlerCreateAccount,
  onHandlerNewsletter,
  description,
  title,
  isLoading,
  primaryText,
  secondaryText
}) => {
  return (
    <div className={styles['create-account-cta']}>
      {isLoading ? (
        <div className={styles['create-account-cta__loader']}>
          <DotsLoader color="#1a324c" count={3} />
        </div>
      ) : (
        <>
          <div className={styles['create-account-cta__content']}>
            <div className={styles['create-account-cta__header']}>
              <span className={styles['create-account-cta__emoji']}>🤓</span>
              <Typography.Text size="lg" weight="bold">
                {title}
              </Typography.Text>
            </div>
            <Typography.Text size="md" color="blue-dark-300" className={styles['create-account-cta__description']}>
              {description}
            </Typography.Text>
          </div>

          <div className={styles['create-account-cta__actions']}>
            <MainButton
              buttonSize="full"
              buttonStyles={{ buttonColor: '#9EE4B8', textColor: '#292F37', spacing: '10px' }}
              onClick={onHandlerCreateAccount}
              buttonText={primaryText}
              iconProps={{ icon: ProfileAdd, size: 20 }}
              className={styles['btn--primary']}
            />

            <MainButton
              buttonSize="full"
              buttonStyles={{ buttonColor: '#FFFFFF', textColor: '#292F37', spacing: '10px' }}
              onClick={onHandlerNewsletter}
              buttonText={secondaryText}
              iconProps={{ icon: SmsStar, size: 20 }}
              className={styles['btn--secondary']}
            />
          </div>
        </>
      )}
    </div>
  )
}

export const CreateAccountCTA = Component
