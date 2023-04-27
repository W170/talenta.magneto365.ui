import React from 'react'
import { EventDispatcherContextProvider } from './EventDispatcherContext.component'
import { ResponsiveContextProvider } from './ResponsiveContext.component'

export const ContextAppProvider: React.FC = ({ children }) => {
  return (
    <EventDispatcherContextProvider>
      <ResponsiveContextProvider>{children}</ResponsiveContextProvider>
    </EventDispatcherContextProvider>
  )
}
