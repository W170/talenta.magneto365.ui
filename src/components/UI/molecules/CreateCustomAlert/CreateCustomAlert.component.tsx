import React from 'react'
import { ICreateCustomAlert } from './CreateCustomAlert.interface'
import { ArrowRight2, Message3D } from '@constants/icons.constants'
import { Button, DotsLoader } from '@components/UI/atoms'
import styles from './createCustomAlert.module.scss'

const Component: React.FC<ICreateCustomAlert> = ({ onClick, title, isLoading }) => (
  <div className={styles['create-custom-alert']}>
    {isLoading ? (
      <div className={styles['create-custom-alert__loader']}>
        <DotsLoader color="#1a324c" count={3} />
      </div>
    ) : (
      <Button
        onClick={onClick}
        className={styles['create-custom-alert__button']}
        prefixIcon={ArrowRight2}
        buttonText={title}
        suffixIcon={Message3D}
      />
    )}
  </div>
)

export const CreateCustomAlert = Component
