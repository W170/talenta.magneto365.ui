import React from 'react'
import { CandidateProfileProvider } from './CandidateProfile.context'
import { ICandidateProfile } from './CandidateProfile.interface'
import styles from './CandidateProfile.module.scss'
import { classNames } from '@shared/utils/common'
import * as children from './children'

const cx = classNames.bind(styles)

const Component: React.FC<ICandidateProfile> = ({ children, className }) => {
  return (
    <CandidateProfileProvider>
      <article className={cx('magneto-ui-candidate-profile')}>
        <section className={cx('magneto-ui-candidate-profile__container', className)}>{children}</section>
      </article>
    </CandidateProfileProvider>
  )
}

/**
 * Molecule UI component of candidate profile
 */
export const CandidateProfile = Object.assign(Component, children)
