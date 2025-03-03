import React from 'react'
import { TCandidateProfilePageNav } from './CandidateProfileTemplateNav.interface'
import { CandidateNavigationBar } from '@components/UI/molecules'
import styles from './CandidateProfileTemplateNav.module.scss'
import { classNames } from '@shared/utils/common'

const cx = classNames.bind(styles)

const Component: React.FC<TCandidateProfilePageNav> = ({ ...props }) => {
  return <CandidateNavigationBar className={cx('magneto-ui-candidate-profile-page-nav')} {...props} />
}

export const CandidateProfileTemplateNav = Component
