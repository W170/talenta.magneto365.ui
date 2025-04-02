import React from 'react'
import { TCandidateProfileBody } from './CandidateProfileBody.interface'
import styles from './CandidateProfileBody.module.scss'
import { classNames } from '@shared/utils/common'
import { Collapse } from '@components/UI/atoms'

const cx = classNames.bind(styles)

const Component: React.FC<TCandidateProfileBody> = ({ children, ...props }) => {
  const { open } = Collapse.useCollapse()

  return (
    <Collapse.Body
      className={cx('magneto-ui-candidate-profile-body', {
        'magneto-ui-candidate-profile-body--open': open
      })}
      {...props}
    >
      {children}
    </Collapse.Body>
  )
}

/**
 * Molecule UI component child of candidate profile
 */
export const CandidateProfileBody = Component
