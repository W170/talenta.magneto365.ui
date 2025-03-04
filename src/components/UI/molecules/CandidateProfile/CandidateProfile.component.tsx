import React from 'react'
import { CandidateProfileProvider } from './CandidateProfile.context'
import { TCandidateProfile } from './CandidateProfile.interface'
import styles from './CandidateProfile.module.scss'
import { classNames } from '@shared/utils/common'
import * as children from './children'

const cx = classNames.bind(styles)

const Component: React.FC<TCandidateProfile> = ({ children, className, ...props }) => {
  return (
    <CandidateProfileProvider>
      <article className={cx('magneto-ui-candidate-profile', className)} {...props}>
        {children}
      </article>
    </CandidateProfileProvider>
  )
}

/**
 * Molecule UI component of candidate profile
 */
export const CandidateProfile = Object.assign(Component, children)
