import React from 'react'
import { useCandidateProfile } from '../../CandidateProfileTemplate.context'
import styles from './CandidateProfileTemplateScreen.module.scss'
import { classNames } from '@shared/utils/common'

const cx = classNames.bind(styles)

const Component: React.FC<any> = ({ ...props }) => {
  const { activeScreen, screens, navHeight } = useCandidateProfile()
  const { component: Screen } = screens[activeScreen] || {}

  return (
    <div
      className={cx('magneto-ui-candidate-profile-template-screen')}
      style={
        {
          '--nav-height': `${navHeight}px`
        } as React.CSSProperties
      }
    >
      <Screen {...props} />
    </div>
  )
}

export const CandidateProfileTemplateScreen = Component
