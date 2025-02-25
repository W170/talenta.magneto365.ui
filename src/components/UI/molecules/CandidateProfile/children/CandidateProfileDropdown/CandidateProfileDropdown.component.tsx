import React from 'react'
import { TCandidateProfileDropdown } from './CandidateProfileDropdown.interface'
import { useCandidateProfile } from '../../CandidateProfile.context'
import styles from './CandidateProfileDropdown.module.scss'
import { classNames } from '@shared/utils/common'

const cx = classNames.bind(styles)

const Component: React.FC<TCandidateProfileDropdown> = ({ children, ...props }) => {
  const { isOpen } = useCandidateProfile()

  return (
    <footer
      className={cx('magneto-ui-candidate-profile-dropdown', {
        'magneto-ui-candidate-profile-dropdown--visible': isOpen
      })}
      {...props}
    >
      <div
        className={cx('magneto-ui-candidate-profile-dropdown-container', {
          'magneto-ui-candidate-profile-dropdown-container--visible': isOpen
        })}
      >
        <div
          className={cx('magneto-ui-candidate-profile-dropdown-content', {
            'magneto-ui-candidate-profile-dropdown-content--visible': isOpen
          })}
        >
          {children}
        </div>
      </div>
    </footer>
  )
}

export const CandidateProfileDropdown = Component
