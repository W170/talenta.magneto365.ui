import React from 'react'
import { ICandidateProfileTemplate } from './CandidateProfileTemplate.interface'
import { CandidateProfileProvider } from './CandidateProfileTemplate.context'
import styles from './CandidateProfileTemplate.module.scss'
import { classNames } from '@shared/utils/common'
import * as children from './children'

const cx = classNames.bind(styles)

const Component: React.FC<ICandidateProfileTemplate> = ({ children, onChangeScreen, screens }) => {
  return (
    <CandidateProfileProvider screens={screens} onChangeScreen={onChangeScreen}>
      <div className={cx('magneto-ui-candidate-profile-page')}>{children}</div>
    </CandidateProfileProvider>
  )
}

export const CandidateProfileTemplate = Object.assign(Component, children)
