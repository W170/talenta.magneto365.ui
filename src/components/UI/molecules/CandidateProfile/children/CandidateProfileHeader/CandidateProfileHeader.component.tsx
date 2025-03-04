import React from 'react'
import { TCandidateProfileHeader } from './CandidateProfileHeader.interface'
import { useCandidateProfile } from '../../CandidateProfile.context'
import styles from './CandidateProfileHeader.module.scss'
import { classNames } from '@shared/utils/common'

const cx = classNames.bind(styles)

const Component: React.FC<TCandidateProfileHeader> = ({ children, className, ...props }) => {
  const { isOpen } = useCandidateProfile()

  return (
    <header
      className={cx('magneto-ui-candidate-profile-header', className, {
        'magneto-ui-candidate-profile-header--open': isOpen
      })}
      {...props}
    >
      {children}
    </header>
  )
}

/**
 * Molecule UI component child of candidate profile
 */
export const CandidateProfileHeader = Component
