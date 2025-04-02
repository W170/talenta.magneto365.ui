import React from 'react'
import { TCandidateProfileHeader } from './CandidateProfileHeader.interface'
import styles from './CandidateProfileHeader.module.scss'
import { classNames } from '@shared/utils/common'
import { Collapse } from '@components/UI/atoms'

const cx = classNames.bind(styles)

const Component: React.FC<TCandidateProfileHeader> = ({ children, className, ...props }) => {
  const { open } = Collapse.useCollapse()

  return (
    <Collapse.Header
      className={cx('magneto-ui-candidate-profile-header', className, {
        'magneto-ui-candidate-profile-header--open': open
      })}
      {...props}
    >
      {children}
    </Collapse.Header>
  )
}

/**
 * Molecule UI component child of candidate profile
 */
export const CandidateProfileHeader = Component
