import React from 'react'
import { ICandidateProfileTemplate } from './CandidateProfileTemplate.interface'
import * as context from './CandidateProfileTemplate.context'
import styles from './CandidateProfileTemplate.module.scss'
import { classNames } from '@shared/utils/common'
import * as children from './children'

const cx = classNames.bind(styles)

const Component: React.FC<ICandidateProfileTemplate> = ({ children, onChangeScreen, screens }) => {
  return (
    <context.Provider screens={screens} onChangeScreen={onChangeScreen}>
      <div className={cx('magneto-ui-candidate-profile-page')}>{children}</div>
    </context.Provider>
  )
}

/**
 * Template UI component of Candidate Profile.
 */
export const CandidateProfileTemplate = Object.assign(Component, { ...children, ...context })
