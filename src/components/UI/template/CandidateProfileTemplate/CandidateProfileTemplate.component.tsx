import React from 'react'
import { ICandidateProfileTemplate, ICandidateProfileTemplateCompound } from './CandidateProfileTemplate.interface'
import { CandidateProfileProvider } from './CandidateProfileTemplate.context'
import styles from './CandidateProfileTemplate.module.scss'
import { classNames } from '@shared/utils/common'
import * as children from './children'

const cx = classNames.bind(styles)

const Component: React.FC<ICandidateProfileTemplate> = ({ children, screens }) => {
  return (
    <CandidateProfileProvider screens={screens}>
      <div className={cx('magneto-ui-candidate-profile-page')}>{children}</div>
    </CandidateProfileProvider>
  )
}

export const CandidateProfileTemplate: ICandidateProfileTemplateCompound = Object.assign(Component, children)
