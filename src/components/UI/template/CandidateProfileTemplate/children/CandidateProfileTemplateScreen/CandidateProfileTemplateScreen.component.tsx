import React from 'react'
import { useCandidateProfile } from '../../CandidateProfileTemplate.context'

const Component: React.FC<any> = ({ ...props }) => {
  const { activeScreen, screens } = useCandidateProfile()
  const { component: Screen } = screens[activeScreen] || {}

  return <Screen {...props} />
}

export const CandidateProfileTemplateScreen = Component
