import React, { useMemo, useCallback } from 'react'
import { HorizontalMenu, IHorizontalMenu } from '@components/UI/molecules'
import { useCandidateProfile } from '../../CandidateProfileTemplate.context'
import styles from './CandidateProfileTemplateHeader.module.scss'
import { classNames } from '@shared/utils/common'

const cx = classNames.bind(styles)

const Component: React.FC<IHorizontalMenu> = () => {
  const { setActiveScreen, screens } = useCandidateProfile()

  const menuOptions = useMemo(() => screens.map((screen) => ({ title: screen.title, icon: screen.icon })), [screens])

  const onMenuOptionClick = useCallback(
    (selectedOption: number) => {
      setActiveScreen(selectedOption)
    },
    [setActiveScreen]
  )

  return (
    <HorizontalMenu
      options={menuOptions}
      onChange={onMenuOptionClick}
      className={cx('magneto-ui-candidate-profile-page__nav')}
    />
  )
}

export const CandidateProfileTemplateHeader = Component
