import React, { useMemo, useCallback } from 'react'
import { TCandidateProfileTemplateMainNav } from './CandidateProfileTemplateMainNav.interface'
import { useCandidateProfile } from '../../CandidateProfileTemplate.context'
import styles from './CandidateProfileTemplateMainNav.module.scss'
import { HorizontalMenu } from '@components/UI/molecules'
import { classNames } from '@shared/utils/common'

const cx = classNames.bind(styles)

const Component: React.FC<TCandidateProfileTemplateMainNav> = ({ ...props }) => {
  const { setActiveScreen, screens, setIsProfileOpen } = useCandidateProfile()

  const menuOptions = useMemo(() => screens.map((screen) => ({ title: screen.title, icon: screen.icon })), [screens])

  const onMenuOptionClick = useCallback(
    (selectedOption: number) => {
      setActiveScreen(selectedOption)
      setIsProfileOpen(false)
    },
    [setActiveScreen, setIsProfileOpen]
  )

  return (
    <HorizontalMenu
      {...props}
      options={menuOptions}
      onChange={onMenuOptionClick}
      className={cx('magneto-ui-candidate-profile-template-main-nav')}
    />
  )
}

/**
 * Template UI child component of Candidate Profile.
 */
export const CandidateProfileTemplateMainNav = Component
