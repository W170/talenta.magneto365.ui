import React from 'react'
import { useCandidateProfile } from '../../CandidateProfileTemplate.context'

const Component: React.FC = () => {
  const { activeScreen, screens } = useCandidateProfile()
  const { component: Screen } = screens[activeScreen] || {}

  return <Screen />
}

export const CandidateProfileTemplateScreen = Component
